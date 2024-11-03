import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/app/components/sections/Navbar";
import Footer from "@/app/components/sections/Footer";


export const metadata: Metadata = {
  title: "Café Com Leide",
  description: "Café Com Leide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
