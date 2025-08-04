import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import EachRestaurantItem from "./components/EachRestaurantItem";
import Cartsync from "./components/Cartsync";
import PaymentSuccuess from "./components/PaymentSuccuess";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/restaurants/:id"
          element={
            <ProtectedRoute>
              <EachRestaurantItem />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentSuccuess />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Cartsync />
    </div>
  );
}

export default App;
