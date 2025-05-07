import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const headerLinks = [
  {
    name: "about",
    href: "#about",
  },
  {
    name: "students",
    href: "#students",
  },
  {
    name: "instructors",
    href: "#instructors",
  },
  {
    name: "benefits",
    href: "#benefits",
  },
];

const HeaderLinks = () => {
  const t = useTranslations('nav');

  return (
    <nav className="hidden md:flex flex-grow max-w-[400px] justify-between items-center font-semibold" dir="auto">
      {headerLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-lg hover-underline-animation"
        >
          {t(link.name)}
        </Link>
      ))}
    </nav>
  );
};
export default HeaderLinks;
