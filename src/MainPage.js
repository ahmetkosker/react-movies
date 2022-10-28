import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchButton from "./SearchButton";
import { Slider } from "./Slider";
import { MainContext, useContext } from "./context";

function MainPage() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Link to="/movies">asd</Link>
    </div>
  );
}

export default MainPage;
