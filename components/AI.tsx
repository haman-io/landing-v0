"use client";

import { useTranslations } from 'next-intl';

import { Sparkle } from "phosphor-react";
import React, { useState, useRef, useEffect } from "react";
import wandAnimation from "./data/wandAnimation.json";

// import Lottie from "lottie-react";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

import Tilt from "react-parallax-tilt";
import { CornerDivider } from "./Dividers";
import useIsInView from "@/hooks/useIsInView";
import { useAnimation, motion as m } from "framer-motion";

export function AI() {
  const t = useTranslations('ai');
  const messages = [
    {
      from: t('messages.m1.from'),
      message: t('messages.m1.message'),
    },
    {
      from: t('messages.m2.from'),
      message: t('messages.m2.message'),
    },
    {
      from: t('messages.m3.from'),
      message: t('messages.m3.message'),
    }
  ];

  const lottieRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  const messageControls = useAnimation();

  const messageVariants = (delay: number) => ({
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  const isInView = useIsInView({ ref: ref as React.RefObject<HTMLElement>, margin: "0px" });

  useEffect(() => {
    if (isInView && lottieRef?.current) {
      messageControls.start("animate");
      //@ts-ignore
      lottieRef.current!.goToAndPlay(0, true);
      // lottieRef.current!.play();
    } else if (lottieRef?.current) {
      messageControls.start("initial");
      //@ts-ignore
      lottieRef.current!.goToAndStop(0, true);
      // lottieRef.current!.stop();
    }
  }, [isInView]);

  return (
    // <section id="ai" className="container mx-auto px-6 py-12 md:py-24 lg:py-32" dir="auto">
    <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        transitionSpeed={2000}
        perspective={500}
        scale={1.05}
        gyroscope={true}
        glareEnable={false}
        glarePosition="all"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-full flex items-center flex-col justify-center relative group"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Sparkle Graphic */}

          {/* Chatbox */}
          <div
            style={{
              transformStyle: "preserve-3d",
            }}
            ref={ref}
            className="w-72 sm:w-96 relative flex flex-col p-4 justify-start items-center"
          >
            {/* Sparkle Icon */}
            <div className="absolute -top-6 !p-0 -right-8 flex items-center justify-center group-hover:translate-z-10 duration-700 ease-in-out">
              <Sparkle
                size={54}
                weight="fill"
                className={`text-ai-purple fill-ai-purple drop-shadow-2xl text-neoviolet ${isInView
                  ? "scale-100 opacity-100 rotate-6 transition-all ease-in-out delay-1000 duration-500"
                  : "scale-0 opacity-0 rotate-45"
                  }`}
              // style={{
              //   WebkitMaskImage:
              //     "linear-gradient(130deg, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
              // }}
              />
            </div>
            {/* Magician Animation */}
            <div
              style={{
                WebkitMaskImage:
                  "linear-gradient(140deg, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%)",
              }}
              className="absolute hidden sm:flex -bottom-52 !p-0 -left-64 items-center justify-center -scale-x-100 w-96 h-96 group-hover:translate-z-6 duration-700 ease-in-out"
            >
              <DynamicLottie
                lottieRef={lottieRef}
                animationData={wandAnimation}
                loop={false}
              />
            </div>
            {messages.map((message, index) => {
              return (
                <div
                  key={index}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className={`w-full flex transition-opacity mb-4 ${message.from === "User" ? "justify-end" : "justify-start"
                    } `}
                >
                  <div
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                    }}
                    className={`w-fit max-w-[75%] border-4 border-border shadow-shadow py-1 px-2 flex justify-start transition-all group-hover:translate-z-6 duration-500 ease-in-out ${message.from === "User"
                      ? "bg-neoblue"
                      : "bg-neopink"
                      } `}
                  >
                    <p className="text-start text-white text-xs sm:text-sm p-2">
                      {message.message}
                    </p>
                  </div>
                </div>
              );
            })}
            {/* Loading Indicator */}
            <div className="w-full flex justify-start group-hover:translate-z-6 duration-500 ease-in-out delay-[400ms]">
              <div className="w-fit bg-ai-purple rounded-t-xl rounded-br-xl py-3 px-5 flex justify-start ">
                <div className="bouncing-loader">
                  <div className="" />
                  <div className="" />
                  <div className="" />
                </div>
              </div>
            </div>
          </div>
          {/* Chatbox Input */}
          <div className="w-72 sm:w-96 flex justify-center items-center mt-4">
            <input
              className="w-full py-3 border-4 border-border shadow-shadow px-4 outline-non font-inter text-sm"
              placeholder={t('placeholder')}
            />
          </div>
        </div>
      </Tilt>
    </div>
    // </section>
  );
};
