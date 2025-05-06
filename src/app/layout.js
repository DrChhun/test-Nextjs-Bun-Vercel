import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import TransitionProvider from "../providers/TransitionProvider";
import PageTransition from "../components/PageTransition";
import TransitionController from "../components/TransitionController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Your Company | Modern Solutions",
  description: "The modern platform for building beautiful, responsive websites with the latest technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TransitionProvider>
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <TransitionController />
        </TransitionProvider>
      </body>
    </html>
  );
}
