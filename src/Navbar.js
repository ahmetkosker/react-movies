import { memo } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="categories">
            <div>
              <h1>MOVIE LAND</h1>
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
