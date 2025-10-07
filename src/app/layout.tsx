import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pomodoro",
  description: "A simple Pomodoro timer app built with Next.js and TypeScript.",
};

type Theme = "" | "dark";
const theme: Theme = "";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" data-theme={theme}>
      <body
        className={`${inter.className} antialiased bg-neutral-50 h-screen flex flex-col`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
