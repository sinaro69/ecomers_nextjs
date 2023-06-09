import "./globals.css";
import { Inter } from "next/font/google";
import ProviderRedux from "@/redux/ProviderRedux";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce Next.js",
  description:
    "Ecommerce Next.js is an example of a simple ecommerce built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-whitesmoke">
          <ProviderRedux>
          <Navbar />
          {children}
        </ProviderRedux>
        </main>
        
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
