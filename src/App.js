import React from "react";
import Navbar from "./common/Navbar";
import Banner from "./Hero/Banner";
import Category from "./Hero/Category";
import Product from "./Hero/Product";
import Productlist from "./Hero/Productlist";
import Offer from "./Hero/Offer";
import RecentNews from "./Hero/RecentNews";
import Footer from "./Hero/Footer";

const App = () => {
  return (
    <div>
      <div className=" px-10 sm:px-8 lg:px-12  bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-200">
        <Navbar />
        <Banner />
        <Category />
        <Product />
        <Productlist />
        <Offer />
        <RecentNews />
      </div>
      <Footer />

    </div>
  );
};

export default App;
