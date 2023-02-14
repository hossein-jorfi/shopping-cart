import React from "react";

// Components
import Navabr from "./components/Navabr";
import Store from "./components/Store";
import Detail from "./components/Detail"
import Cart from "./components/Cart";
import Footer from "./components/Footer";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {

     return (
          <ProductContextProvider>
               <CartContextProvider>
                    <Navabr />
                    <br /><br /><br /><br />
                    <Routes>
                         <Route path='/products/:id' element={<Detail />} />
                         <Route path='/products' element={<Store />} />
                         <Route path='/cart' element={<Cart />} />
                         <Route path='/*' element={<Navigate to='/products' />} />
                    </Routes>
                    <Footer />
               </CartContextProvider>
          </ProductContextProvider>
     );
};

export default App;