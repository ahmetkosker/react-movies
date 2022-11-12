import { memo } from "react";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="categories">
            <div className="grid">
              <ThemeChanger />
              <Link to="/">
                <h1>MOVIE LAND</h1>
              </Link>
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
