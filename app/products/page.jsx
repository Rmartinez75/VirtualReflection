//products/page.jsx

import { Suspense } from 'react';

import ProdTree from "@/components/ProdTree";
import ProductList from "@/components/ProductList";


export default function Home() {
  return (
    <>     
      <Suspense>
        <ProdTree />
        <ProductList />
      </Suspense>
    </>
  );
}
