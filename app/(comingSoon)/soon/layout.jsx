// import HeadNav from '@components/HeadNav'
// import ProductPageFooter from "/components/ProductPageFooter";
// import Footer from '@/components/Footer';
// import Footer from '@components/Footer'

// import '@styles/globals.css'


// const Layout = ({ children }) => {
//   return (       
//     <>
//       <HeadNav />
//       <main>
//         {children}
//       </main>
//       <Footer />
//       <ProductPageFooter />
//     </>
//     )
// }

// export default Layout


const Layout = ({ children }) => {
    return (       
      <>
        <main>
          {children}
        </main>
      </>
      )
  }
  
  export default Layout
