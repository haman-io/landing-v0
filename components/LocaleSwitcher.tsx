"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator"
import {
  Locale,
  LOCALE_NAMES,
  routing,
  usePathname,
  useRouter,
} from "@/i18n/routing";
import { useLocaleStore } from "@/stores/localeStore";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const { dismissLanguageAlert } = useLocaleStore();
  const [, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState("locale");

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale, setCurrentLocale]);

  function onSelectChange(nextLocale: Locale) {
    setCurrentLocale(nextLocale);
    dismissLanguageAlert();

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        // { pathname: "/", params: params || {} }, // if your want to redirect to the home page
        { pathname, params: params || {} }, // if your want to redirect to the current page
        { locale: nextLocale }
      );
    });
  }

  return (
    <Select
      defaultValue={locale}
      value={currentLocale}
      onValueChange={onSelectChange}
    >
      <SelectTrigger className="neo-btn px-5 py-3 bg-neoviolet text-white font-bold">
        <Languages className="w-4 h-4 mr-1" />
        {/* <SelectValue placeholder="Language" /> */}
      </SelectTrigger>
      <SelectContent className="w-[1.2rem] bg-neoviolet text-white border-4 border-border rounded-none font-bold">
        {routing.locales.map((cur, index) => (
          <div key={cur}>
            <SelectItem key={cur} value={cur} disabled={cur === locale} className="hover:!bg-neoyellow hover:!text-black font-default rounded-none cursor-pointer">
              {LOCALE_NAMES[cur]}
            </SelectItem>
            {index !== routing.locales.length - 1 && <Separator className="bg-border" />}
          </div>
        ))}
      </SelectContent>
    </Select>
  );
}
