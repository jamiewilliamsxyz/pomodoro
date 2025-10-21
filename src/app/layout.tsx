import type { Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Topbar from "@/components/layout/Topbar";

import { metadata } from "@/lib/metadata";
export { metadata };

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${inter.className} ${roboto.variable} antialiased bg-base-100 h-screen flex flex-col`}
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
