import type { Metadata } from "next";
import { Geist, Geist_Mono ,Montserrat} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quad",
  description: "Your No 1 e-commerce platform in CMUL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montSerrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
