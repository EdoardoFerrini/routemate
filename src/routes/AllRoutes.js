import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Admin,
  ProductDetail,
  ProductList,
  PageNotFound,
  Contact,
  ContactAll,
  ContactIt,
} from "../pages/index";

export const AllRoutes = () => {
  const admin = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route path="it" element={<ContactIt />}></Route>
          <Route path="*" element={<ContactAll />}></Route>
        </Route>
        <Route
          path="/admin"
          element={admin ? <Admin /> : <PageNotFound />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};
