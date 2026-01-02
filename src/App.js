import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FooterMain from "./Components/FooterMain";
import NavbarMain from "./Components/NavbarMain";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import Pages from "./Pages";

function App() {
  return (
    <div className="container-fluid p-0" id="banner">
      <BrowserRouter>
        <NavbarMain />
        <a href="#banner" className="btt">
          <AiOutlineArrowUp />
        </a>
        <div className="main-sec">
          <Pages />
        </div>
        <FooterMain />
      </BrowserRouter>
    </div>
  );
}

export default App;
