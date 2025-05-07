import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = "https://www.haman.io/";

export const SOURCE_CODE_URL = "https://github.com/far0kh/haman-landing-v1";

const TWITTER_URL = 'https://x.com/h_a_m_a_n'
const BSKY_URL = ''
const EMAIL_URL = 'mailto:hamandotio@gmail.com'
const GITHUB_URL = 'https://github.com/haman-io'

export const siteConfig: SiteConfig = {
  name: "Haman",
  tagLine: "Your Intelligent Learning Partner",
  description:
    "Haman is an AI-powered platform that provides a revolutionary interactive learning experience through a personalized agent trained to teach.",
  url: BASE_URL,
  authors: [
    {
      name: "Haman Team",
      url: "https://www.haman.io",
    }
  ],
  creator: '@h_a_m_a_n',
  socialLinks: {
    bluesky: BSKY_URL,
    twitter: TWITTER_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'light', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
