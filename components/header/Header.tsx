import HeaderLinks from "@/components/header/HeaderLinks";
import MobileMenu from "@/components/header/MobileMenu";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const Header = () => {
  const t = useTranslations("nav");

  return (
    <header className="relative md:sticky top-0 z-50 py-4 text-black bg-neoyellow border-b-4 border-border">
      <div className="mx-auto px-2 sm:px-4 lg:px-12">
        <nav className="flex justify-between">
          <div className="flex items-center md:gap-x-12 flex-1">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center"
            >
              <Image
                alt="Haman Logo"
                src="/logo-w.webp"
                className="w-25 h-auto"
                width={100}
                height={33}
              />
              {/* <span className="text-gray-800 dark:text-gray-200">
                {t("home")}
              </span> */}
            </Link>
            <div className="hidden md:flex md:gap-x-6"></div>
          </div>

          <HeaderLinks />

          <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6 flex-1 justify-end">
            {/* PC */}
            <div className="hidden md:flex items-center gap-x-4">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>

            {/* Mobile */}
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
