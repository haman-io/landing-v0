import { useTranslations } from 'next-intl';
import { AI } from '@/components/AI';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="container mx-auto px-6 py-12 md:py-24 lg:py-32" dir="auto">
      <div className="mx-auto flex max-w-[1200px] flex-col lg:flex-row items-center gap-6 text-center">
        <div className="flex flex-col items-start justify-center gap-6 text-start w-full lg:w-1/2">
          <p className="text-sm text-neogreen font-semibold">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t('description.p1')}
          </p>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t('description.p2')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full lg:w-1/2">
          {/* <Image
            src="/exp4.svg"
            alt="About Us"
            width={212}
            height={212}
            className="w-full max-w-[60%] h-auto mt-8 scale-x-[-1]"
          /> */}
          <AI />
        </div>
      </div>
    </section>
  );
} 