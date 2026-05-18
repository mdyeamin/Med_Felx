import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MedFlex | Premium Doctor Appointment System",
  description:
    "Discover certified experts and book appointments seamlessly with MedFlex.",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning thame synchronization validation issue block kore
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white dark:bg-slate-950 text-[#0F172A] dark:text-slate-50 flex flex-col transition-colors duration-300">
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
