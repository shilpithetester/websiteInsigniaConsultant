import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react";
import BookConsultant from "./BookConsultant";
import FocusScroll from "./FocusScroll";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [focus, setFocus] = useState(false)

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
    if (focus === false) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handelConsultant = () => {
    console.log(1);

    setFocus(true)
    setTimeout(() => setFocus(false), 500);
  }

  return (
    <div  >
      <div className={`header fixed w-full top-0 z-50 transition-colors duration-300 
      ${isScrolled ? "bg-customDarkblue" : "bg-transparent"}
        `}>
        <Header handelConsultant={handelConsultant} />
      </div>
      <div>
        <Outlet />
      </div>
      {/* {
        location?.pathname !== "/contact-us" && ( */}
          <div>
            {
              focus &&
              <FocusScroll focus={focus} />
            }
            <BookConsultant />
          </div>
        {/* )
      } */}
      <div >
        <Footer />
      </div>
    </div>
  )
}

export default Layout
