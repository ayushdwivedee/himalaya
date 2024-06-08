import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";

import OralCare from "../Pages/OralCare";
import PersonalCare from "../Pages/PersonalCare";
import Shop from "../Pages/Shop";
import StoreLocator from "../Pages/StoreLocator";
import Supplements from "../Pages/Supplements";
import PrivateRoute from "./PrivateRoute";

const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />

      <Route path="/collections" element={<Shop />} />
      <Route path="/store-locator" element={<StoreLocator />} />
    </Routes>
  );
};

export default AllRouting;
