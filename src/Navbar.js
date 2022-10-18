import { memo } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="grid">
          <div className="categories">
            <div>
              <img
                src={require("./images/download-background-logo-25.png")}
                width="400"
                height="200"
              />
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
