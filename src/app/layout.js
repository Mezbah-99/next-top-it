// import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import "bootstrap/dist/css/bootstrap.css";

import "./globals.css";
// import "../css/customcss.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Top-it-institute",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{marginTop: "100px"}}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
