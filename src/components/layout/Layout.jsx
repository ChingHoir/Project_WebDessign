import Navigation from "./Navigation";

import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Categories from "../sections/Categories";
    

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-500 " >
      <Navigation /> 
      <main className="flex-1">
        <Hero />
        <Features />
        <Categories />
      </main>
     
    </div>
  );
}

export default Layout;
