"use client";

import { useTranslations } from 'next-intl';
import useIsInView from "@/hooks/useIsInView";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

export function Benefits() {
  const t = useTranslations('benefits');

  const l1Items = Number(t('l1.items'));
  const l1 = [];
  for (let i = 0; i < l1Items; i++) {
    l1.push({
      key: `l1-${i}`,
      title: t(`l1.i${i + 1}.title`),
      description: t(`l1.i${i + 1}.description`),
    });
  }

  const l2Items = Number(t('l2.items'));
  const l2 = [];
  for (let i = 0; i < l2Items; i++) {
    l2.push({
      key: `l2-${i}`,
      title: t(`l2.i${i + 1}.title`),
      description: t(`l2.i${i + 1}.description`),
    });
  }

  const ref = useRef<HTMLDivElement>(null);
  const messageControls = useAnimation();
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  // useEffect(() => {
  //   messageControls.start('visible'); // Trigger animation when the component mounts
  // }, [messageControls]);

  return (
    <section id="benefits" className="container mx-auto px-6 py-12 md:py-24 lg:py-32" dir="auto">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <p className="text-sm text-neogreen font-semibold">
          {t('subtitle')}
        </p>
        <h2 className="text-3xl text-white font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
          {t('title')}
        </h2>
        <p className="max-w-[750px] text-lg text-white sm:text-xl">
          {t('description')}
        </p>
        <div ref={ref} className="w-full grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-primary border-4 border-border shadow-shadow p-8 transform -rotate-1">
            <h3 className="font-display text-3xl font-bold mb-6">{t('l1.title')}</h3>
            <motion.ul className="space-y-4">
              <AnimatePresence>
                {l1.map((feature, index) => (
                  <motion.li
                    key={feature.key}
                    className="flex items-start"
                    initial="hidden"
                    animate={messageControls}
                    variants={messageVariants}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-neoyellow border-2 border-border text-black flex items-center justify-center me-3">✓</div>
                    <p className="text-lg text-start">
                      <span className="font-bold">{feature.title}</span>
                      {` - ${feature.description}`}
                    </p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
          <div className="bg-primary border-4 border-border shadow-shadow p-8 transform rotate-1">
            <h3 className="font-display text-3xl font-bold mb-6">{t('l2.title')}</h3>
            <motion.ul className="space-y-4">
              <AnimatePresence>
                {l2.map((feature, index) => (
                  <motion.li
                    key={feature.key}
                    className="flex items-start"
                    initial="hidden"
                    animate={messageControls}
                    variants={messageVariants}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-neopink border-2 border-border text-black flex items-center justify-center me-3">✓</div>
                    <p className="text-lg text-start">
                      <span className="font-bold">{feature.title}</span>
                      {` - ${feature.description}`}
                    </p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
} 