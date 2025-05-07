import { headerLinks } from "@/components/header/HeaderLinks";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function MobileMenu() {
  const t = useTranslations("nav");
  return (
    <div className="flex items-center gap-x-2 md:hidden">
      <LocaleSwitcher />
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger className="neo-btn px-5 py-3 bg-neoviolet text-white font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9">
          <Menu className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[1.2rem] bg-neoviolet text-white border-4 border-border rounded-none font-bold md:hidden" align="end">
          {/* <DropdownMenuLabel>
            <Link
              href="/"
              prefetch={false}
              className="flex items-center"
            >
              <Image
                alt="Haman Logo"
                src="/logo-w.svg"
                className="w-20 h-auto"
                width={32}
                height={32}
              />
              <span className="text-gray-800 dark:text-gray-200">
                {t("home")}
              </span>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator /> */}
          <DropdownMenuGroup dir="auto">
            {headerLinks.map((link, index) => (
              <div key={link.name}>
                <DropdownMenuItem className="p-0">
                  <Link
                    href={link.href}
                    prefetch={false}
                    className="w-full hover:bg-neoyellow hover:text-black cursor-pointer p-2"
                  >
                    {t(link.name)}
                  </Link>
                </DropdownMenuItem>
                {index !== headerLinks.length - 1 && <Separator className="bg-border" />}
              </div>
            ))}
          </DropdownMenuGroup>
          {/* <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="p-2 focus:bg-transparent justify-end">
              <div className="flex items-center gap-x-4"></div>
            </DropdownMenuItem>
          </DropdownMenuGroup> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
