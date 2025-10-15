import type { Metadata, Viewport } from "next";
import { Theme } from "@/types";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Topbar from "@/components/layout/Topbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  variable: "--font-roboto",
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
        className={`${inter.className} ${roboto.variable} antialiased bg-neutral-50 h-screen flex flex-col`}
      >
        <Providers>
          <Topbar />
          <main className="flex items-center justify-center flex-col gap-8 h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
