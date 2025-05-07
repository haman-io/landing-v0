import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-46 py-6" dir="auto">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-4 px-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            {/* <span dir="ltr">{`©${currentYear}`}</span> */}
            {` ${t('rights')}`}
          </p>
        </div>
        {/* <div className="flex items-center space-x-4">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t('privacy')}
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t('terms')}
          </Link>
        </div> */}
      </div>
    </footer>
  );
} 