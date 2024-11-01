
// import { GoogleAnalytics } from '@next/third-parties/google'

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import "./globals.css";


export const metadata = {
  title: "MAD",
  description: "Originated as an idea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF3F3]">
        <NavBar />
        {children}
        <ScrollToTopButton />
        <Footer />        
      </body>
      {/* <GoogleAnalytics gaId="G-91W7PDV5W8" /> */}
    </html>
  );
}
