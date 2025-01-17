import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if the page has scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div  >
      <div className={`header fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? "bg-white text-black" : "bg-transparent"
        }`}>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  )
}

export default Layout
