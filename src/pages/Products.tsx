import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Products;