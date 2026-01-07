import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Za website",
  description: "by me: still working on it tho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* DESKTOP CONTENT */}
        <div className="hidden sm:block">
          {children}
        </div>

        {/* MOBILE BLOCKER */}
        <div className="fixed inset-0 z-[9999] sm:hidden bg-black text-white overflow-hidden">
          {/* GLOBE (behind) */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            {children}
          </div>

          {/* MESSAGE */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-3xl font-light tracking-widest">
                This website is not optimized
              </h1>
              <p className="mt-4 text-lg opacity-70 tracking-wide">
                for small screens and never will be.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
