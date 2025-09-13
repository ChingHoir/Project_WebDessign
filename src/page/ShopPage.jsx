import React from "react";
import Navigation from "../components/layout/Navigation";
import Shop from "../components/sections/Shop";
import {  Navigation as NavigationIcon } from "lucide-react";

const ShopPage = () => {
  return (
    <div>
      <Navigation />
      <Shop />
    </div>
  );
}

export default ShopPage;