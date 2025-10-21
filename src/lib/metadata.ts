import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pomodoro-motivation-timer.vercel.app"),

  title: "Pomodoro Timer | Focus & Motivation",
  description:
    "Boost your focus and productivity with the Pomodoro method while staying inspired with motivational quotes",
  keywords: [
    "Pomodoro Timer",
    "Focus Timer",
    "Productivity App",
    "Time Management",
    "Motivational Quotes",
    "Study Timer",
    "Work Timer",
    "Focus Booster",
    "Task Timer",
    "Concentration Aid",
    "Productivity Booster",
    "Focus and Motivation",
    "Pomodoro Timer for ADHD",
  ],
  authors: [{ name: "Jamie Williams" }],
  openGraph: {
    type: "website",
    url: "https://pomodoro-motivation-timer.vercel.app",
    title: "Pomodoro Timer | Focus & Motivation",
    description:
      "Boost your focus and productivity with the Pomodoro method while staying inspired with motivational quotes",
    siteName: "Pomodoro Timer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomodoro Timer | Focus & Motivation",
    description:
      "Boost your focus and productivity with the Pomodoro method while staying inspired with motivational quotes",
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://pomodoro-motivation-timer.vercel.app" },
};
