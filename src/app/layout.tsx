import type { Metadata, Viewport } from "next";
import { Theme } from "@/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/context/settingsContext";
import TopbarClient from "@/components/layout/TopbarClient";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Pomodoro",
  description: "A simple Pomodoro timer app built with Next.js and TypeScript",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const theme: Theme = "system";

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
        <SettingsProvider>
          <TopbarClient />
          {children}
        </SettingsProvider>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
