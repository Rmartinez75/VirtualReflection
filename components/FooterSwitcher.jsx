// components/FooterSwitcher.jsx
'use client';  // Mark this file as a client-side component

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import ProductDetailsFooter from '@/components/ProductDetailsFooter';

const FooterSwitcher = () => {
  const pathname = usePathname();
  const isProductDetailPage = pathname.startsWith('/products/');

  return isProductDetailPage ? <ProductDetailsFooter /> : <Footer />;
};

export default FooterSwitcher;
