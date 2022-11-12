import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { IconContext } from "react-icons";

export default function ThemeChanger() {
  const [darkTheme, setThemeDark] = useState(true);
  const change = () => {
    setThemeDark(!darkTheme);
    const ball = document.querySelector(".ball");
    const light = document.querySelector(".light");
    const dark = document.querySelector(".dark");
    if (darkTheme) {
      document.body.style.backgroundColor = "#333";
      ball.classList.add("left");
    } else {
      document.body.style.backgroundColor = "rgb(139, 139, 139)";
      ball.classList.remove("left");
    }
    // darkTheme
    //   ? (document.body.style.backgroundColor = "#333")
    //   : (document.body.style.backgroundColor = "rgb(139, 139, 139)");
  };

  return (
    <div>
      <div onClick={change} className="changer">
        <IconContext.Provider value={{ className: "light" }}>
          <CiLight size={36} />
        </IconContext.Provider>
        <button className="ball"></button>
        <IconContext.Provider value={{ className: "dark" }}>
          <MdNightlight size={36} />
        </IconContext.Provider>
      </div>
    </div>
  );
}
