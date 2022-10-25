import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchButton from "./SearchButton";
import { Slider } from "./Slider";

function MainPage() {
  return (
    <div>
      <Navbar />
      <SearchButton />
      <Slider />
      <Link to="/movies">asd</Link>
    </div>
  );
}

export default MainPage;
