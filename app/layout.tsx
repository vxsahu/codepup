import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTML CSS JS Code",
  description: "It is a simple code editor for HTML, CSS, and JavaScript. You can write your code and see the output in real-time.",
  openGraph: {
    title: "HTML CSS JS Code",
    description: "It is a simple code editor for HTML, CSS, and JavaScript. You can write your code and see the output in real-time.",
    type: "website",
    locale: "en_US",
    url: "https://htmlcssjscode.vercel.app",
    siteName: "HTML CSS JS Code",
    images: [
      {
        url: "https://htmlcssjscode.vercel.app/logo2.png",
        width: 1000,
        height: 600,
        alt: "HTML CSS JS Code Logo",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="5ieJPv-e2j-udZ5ZRXTarN-2g0AnPhoPg7r9zZgnE0A" />
      </head>
      <body className={cn(
        "min-h-screen bg-background antialiased",
        inter.className
      )}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
