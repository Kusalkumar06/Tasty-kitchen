import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import EachRestaurantItem from "./components/EachRestaurantItem";
import Cartsync from "./components/Cartsync";
import PaymentSuccuess from "./components/PaymentSuccuess";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/restaurants/:id" element={<EachRestaurantItem />}></Route>
        <Route path="/payment" element={<PaymentSuccuess/>}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Cartsync />
    </div>
  );
}

export default App;
