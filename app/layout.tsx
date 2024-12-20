import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Nabvar from "@/components/ui/ui/navbar";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Nabvar />
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
