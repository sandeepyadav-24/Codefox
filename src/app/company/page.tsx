import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Company from "@/components/NewCompany";

const page = () => {
  return (
    <main>
      <Navbar />
      <Company />
      <Footer />
    </main>
  );
};

export default page;
