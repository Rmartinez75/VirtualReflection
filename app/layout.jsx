
// app/layout.jsx (RootLayout)
import NavBar from '@/components/NavBar';
import FooterSwitcher from '@/components/FooterSwitcher';  // Import the FooterSwitcher
import ScrollToTopButton from '@/components/ScrollToTopButton';

// import { GoogleAnalytics } from '@next/third-parties/google'

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
        <FooterSwitcher />  {/* Footer logic is handled by FooterSwitcher */}
      </body>
       {/* <GoogleAnalytics gaId="G-91W7PDV5W8" /> */}
    </html>
  );
}
