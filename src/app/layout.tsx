

import type { Metadata } from "next";

import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Golden Haze",
  description: "A midterm project for Digital Markerting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Sidebar/>
        </body>
    </html> 
  );
}
