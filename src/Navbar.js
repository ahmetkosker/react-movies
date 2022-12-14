import { memo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";
import { MainSearch } from "./MainSearch";

const Navbar = () => {
  const nav = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0
        ? nav.current.classList.add("opacitiy5")
        : nav.current.classList.remove("opacitiy5");
    });
  }, []);

  return (
    <nav className="navo" ref={nav}>
      <div className="container">
        <div className="grid">
          <div className="categories">
            <div className="grid">
              <MainSearch />
              <Link to="/">
                <h1 className="main-title blue">MOVIE LAND</h1>
              </Link>
              <ThemeChanger />
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
