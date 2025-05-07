"use client";

import { useTranslations } from 'next-intl';
import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export function Hero() {
  // const parallaxRef = useRef(null);
  const t = useTranslations('hero');

  return (
    <section id="hero" className="container mx-auto px-6 py-12 md:py-24 lg:py-32" dir="auto">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 text-center">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-start mb-6 md:mb-12">
          <div className="flex justify-end h1 w-full max-w-5xl text-start">
            <span>{t('title')}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <p className="text-lg text-start text-muted-foreground md:text-xl max-w-3xl mb-8 md:mb-10 lg:mb-12">
            {t('description')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link href="#students" className="flex justify-center text-lg capitalize w-68 neo-btn px-5 py-3 bg-neoviolet text-white font-bold">
            {t('cta.students')}
            <MdSchool className="text-n-1 ms-2" size={25} />
          </Link>
          <Link href="#instructors" className="flex justify-center text-lg capitalize w-68 neo-btn px-5 py-3 !bg-primary font-bold">
            {t('cta.instructors')}
            <FaChalkboardTeacher className="ms-2" size={25} />
          </Link>
        </div>
      </div>
    </section>
  );
};
