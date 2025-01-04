import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import { ProductListing } from "../components/ProductListing";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductListing />} />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
