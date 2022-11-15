import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { IconContext } from "react-icons";

export default function ThemeChanger() {
  const [darkTheme, setThemeDark] = useState(true);
  const change = () => {
    setThemeDark(!darkTheme);
    const ball = document.querySelector(".ball");
    if (darkTheme) {
      document.getElementsByClassName("sliderTitle")[0]
        ? (document.getElementsByClassName("sliderTitle")[0].style.color =
            "#f5c518")
        : console.log();
      document.getElementsByClassName("sub-title")[0]
        ? (document.getElementsByClassName("sub-title")[0].style.color = "red")
        : console.log();
      document.getElementsByClassName("sub-title")[1]
        ? (document.getElementsByClassName("sub-title")[1].style.color =
            "#f5c518")
        : console.log();
      document.getElementsByClassName("main-page-title")[0]
        ? (document.getElementsByClassName("main-page-title")[0].style.color =
            "#f5c518")
        : console.log();
      document.getElementsByClassName("main-page-title")[1]
        ? (document.getElementsByClassName("main-page-title")[1].style.color =
            "#f5c518")
        : console.log();
      document.body.style.background =
        "linear-gradient(90deg, orangered 0%, rgb(104, 104, 104) 5%, #333 20%, #000 50%, #333 80%, rgb(104, 104, 104) 95%, orangered 100%)";
      ball.classList.add("left");
    } else {
      document.getElementsByClassName("sliderTitle")[0]
        ? (document.getElementsByClassName("sliderTitle")[0].style.color =
            "#333")
        : console.log();
      document.getElementsByClassName("sub-title")[0]
        ? (document.getElementsByClassName("sub-title")[0].style.color = "#333")
        : console.log();
      document.getElementsByClassName("sub-title")[1]
        ? (document.getElementsByClassName("sub-title")[0].style.color = "#333")
        : console.log();
      document.getElementsByClassName("main-page-title")[0]
        ? (document.getElementsByClassName("main-page-title")[0].style.color =
            "#333")
        : console.log();
      document.getElementsByClassName("main-page-title")[1]
        ? (document.getElementsByClassName("main-page-title")[1].style.color =
            "#333")
        : console.log();
      document.body.style.background =
        "linear-gradient(90deg, #2980B9 0%, rgb(104, 104, 104) 5%, rgb(180, 180, 180) 20%, #ffffff 50%, rgb(180, 180, 180) 80%, rgb(104, 104, 104) 95%, #2980B9 100%)";
      ball.classList.remove("left");
    }
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
