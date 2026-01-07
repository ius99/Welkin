import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Za website",
  description: "by me: still working on it tho",

  icons: {
    icon: "/SHIVANSH.svg",
    shortcut: "/SHIVANSH.svg",
    apple: "/SHIVANSH.svg",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-pink-500 text-yellow-500`}
      >
        {children}
      </body>
    </html>
  );
}
