import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Nabvar from "@/components/ui/navbar";

const geistSans = Urbanist({
  subsets: ["latin"],
});
const geistMono = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Welcome to my e-commerce app Melisa Peano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans} ${geistMono} antialiased`}
      >
        <Nabvar />
        {children}
      </body>
    </html>
  );
}
