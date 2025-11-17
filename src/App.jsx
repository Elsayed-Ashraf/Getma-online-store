import "./App.css";
import "./component/header/Header.css";
import Bottomheader from "/src/component/header/Bottomheader";
import Topheader from "./component/header/Topheader";
import Home from "/src/pages/home/Home";
import { context } from "./context/Usercontext";
import { Route, Routes, useLocation } from "react-router";
import ProductDetails from "./pages/ProductPage/ProductDetails";
import CartPage from "./pages/cartpage/CartPage";
import HeartPage from "./pages/heartpage/HeartPage";
import { Toaster } from "react-hot-toast";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Searchresult from "./pages/searchresult/Searchresult";
import Footer from "./pages/footer/Footer";
import { useEffect } from "react";
// import { AnimatePresence } from "framer-motion";
// import  ProductDetails  from "/src/pages/ProductPage/ProductDetails";
function App() {
  const categories = [
    { title: "furniture", desc: "this is  furniture lab lab lab.." },
    { title: "laptops", desc: "this is  laptops lab lab lab.." },
    { title: "mens-watches", desc: "this is  mens-watches lab lab lab.." },
    {
      title: "mobile-accessories",
      desc: "this is  mobile-accessories lab lab lab..",
    },
    { title: "smartphones", desc: "this is  smartphone lab lab lab.." },
    { title: "sunglasses", desc: "this is  sunglasse lab lab lab.." },
    { title: "tablets", desc: "this is  tablets lab lab lab.." },
    { title: "womens-watches", desc: "this is  womens-watches lab lab lab.." },
    { title: "beauty", desc: "this is  womens-watches lab lab lab.." },
  ];
  const usercontext = context;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <header
        className="header"
        style={{ position: "fixed", width: "100%", zIndex: "10", top: "0" }}
      >
        <Topheader />
        <Bottomheader />
      </header>

      <usercontext.Provider value={categories}>
        {/* <AnimatePresence mode="wait"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/heartPage" element={<HeartPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />

          <Route path="/search" element={<Searchresult />} />
        </Routes>
        {/* </AnimatePresence> */}
      </usercontext.Provider>
      <Toaster position="bottom-right" reverseOrder={false} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
