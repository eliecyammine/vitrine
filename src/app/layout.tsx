import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import { siteConfig } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} dark`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.className=document.documentElement.className.replace(/\\blight\\b|\\bdark\\b/g,'').trim()+' '+t}else if(window.matchMedia('(prefers-color-scheme:light)').matches){document.documentElement.className=document.documentElement.className.replace(/\\bdark\\b/g,'').trim()+' light'}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <ThemeProvider>
          <SmoothScroll />

          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
