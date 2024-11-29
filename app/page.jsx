// app/page.jsx

import { Suspense } from "react";
import Home from "./products/page";

export default function Page() {
  return (
    <>
      <Suspense>
        <div>
          <Home />
        </div>
      </Suspense>
    </>
  );
}
