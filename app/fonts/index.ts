import { Roboto, Noto_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";

const parkinsans = localFont({
  variable: "--font-local",
  src: [
    {
      path: './Parkinsans/Parkinsans-Light.ttf',
      weight: '100 300',
    },
    {
      path: './Parkinsans/Parkinsans-Regular.ttf',
      weight: '400',
    },
    {
      path: './Parkinsans/Parkinsans-Medium.ttf',
      weight: '500',
    },
    {
      path: './Parkinsans/Parkinsans-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './Parkinsans/Parkinsans-Bold.ttf',
      weight: '700',
    },
    {
      path: './Parkinsans/Parkinsans-ExtraBold.ttf',
      weight: '800 900',
    },
  ],
})

const vazirmatn = localFont({
  variable: "--font-local",
  src: [
    {
      path: './Vazirmatn/Vazirmatn-Thin.ttf',
      weight: '100',
    },
    {
      path: './Vazirmatn/Vazirmatn-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './Vazirmatn/Vazirmatn-Light.ttf',
      weight: '300',
    },
    {
      path: './Vazirmatn/Vazirmatn-Regular.ttf',
      weight: '400',
    },
    {
      path: './Vazirmatn/Vazirmatn-Medium.ttf',
      weight: '500',
    },
    {
      path: './Vazirmatn/Vazirmatn-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './Vazirmatn/Vazirmatn-Bold.ttf',
      weight: '700',
    },
    {
      path: './Vazirmatn/Vazirmatn-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './Vazirmatn/Vazirmatn-Black.ttf',
      weight: '900',
    },
  ],
})

const comicNeue = Roboto({
  variable: "--font-local",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notoSans = Noto_Sans_Arabic({
  variable: "--font-local",
  subsets: ["arabic"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const localFonts = {
  // en: comicNeue.variable,
  en: parkinsans.variable,
  fa: vazirmatn.variable,
  ar: vazirmatn.variable,
  // ar: notoSans.variable,
};

export { localFonts };