"use client";

import { useTranslations } from 'next-intl';
import useIsInView from "@/hooks/useIsInView";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaPepperHot } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GiRobotAntennas } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { GrAnalytics } from "react-icons/gr";
import { TfiSupport } from "react-icons/tfi";

export function Instructors() {
  const t = useTranslations('instructors');

  const features = [
    {
      key: 'content',
      title: t('features.content.title'),
      description: t('features.content.description'),
      background: 'bg-neogreen',
      icon: FaPepperHot,
    },
    {
      key: 'tracking',
      title: t('features.tracking.title'),
      description: t('features.tracking.description'),
      background: 'bg-neoviolet',
      icon: MdOutlineAutoGraph,
    },
    {
      key: 'tools',
      title: t('features.tools.title'),
      description: t('features.tools.description'),
      background: 'bg-neoblue',
      icon: GiRobotAntennas,
    },
    {
      key: 'management',
      title: t('features.management.title'),
      description: t('features.management.description'),
      background: 'bg-neopink',
      icon: SiGoogleclassroom,
    },
    {
      key: 'analytics',
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      background: 'bg-neoyellow',
      icon: GrAnalytics,
    },
    {
      key: 'support',
      title: t('features.support.title'),
      description: t('features.support.description'),
      background: 'bg-neored',
      icon: TfiSupport,
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const messageControls = useAnimation();
  const messageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };
  const isInView = useIsInView({ ref: ref as React.RefObject<HTMLElement>, margin: "0px" });
  useEffect(() => {
    if (isInView) {
      messageControls.start('visible');
    } else {
      messageControls.stop();
      messageControls.set('hidden');
    }
  }, [isInView]);

  return (
    <section id="instructors" className="container mx-auto px-6 py-12 md:py-24 lg:py-32" dir="auto">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <p className="text-sm text-neogreen font-semibold">
          {t('subtitle')}
        </p>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
          {t('title')}
        </h2>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          {t('description')}
        </p>
        <div ref={ref} className="w-full grid md:grid-cols-2 xl:grid-cols-3 justify-items-center space-y-0 lg:space-y-16 xl:space-y-0 gap-8 mt-12">
          <AnimatePresence>
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                className="flex justify-center w-full"
                initial="hidden"
                animate={messageControls}
                variants={messageVariants}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              >
                <Card className={`flex w-full max-w-sm h-75 justify-start text-start gap-3 border-4 ${feature.background} text-black`} key={feature.key}>
                  <CardHeader className="gap-2.5">
                    <CardTitle className="p-3 w-18 h-18 justify-start items-center border-4 bg-white">
                      <feature.icon size={40} className='' />
                    </CardTitle>
                    <CardTitle className='text-2xl font-bold'>{feature.title}</CardTitle>
                    {/* <CardDescription>
              </CardDescription> */}
                  </CardHeader>

                  <CardContent>
                    {feature.description}
                  </CardContent>
                  {/* <CardFooter className="ms-6 p-2 w-12.5 h-12.5 justify-start items-center border-4">
              <feature.icon size={50} className='' />
            </CardFooter> */}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 