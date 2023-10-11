import "./MobileNav.scss";
import { ReactComponent as CloseButton } from "../../assets/svg/remove-close-x.svg";
import Nav from "../Nav/Nav";

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
  return (
    <div className={`nav-container ${isNavOpen ? "visible" : ""}`}>
      <div className="nav-overlay"></div>
      <button className="nav-button" onClick={() => setIsNavOpen(false)}>
        <CloseButton />
      </button>
      <Nav setIsNavOpen={setIsNavOpen} className="nav-link" />
    </div>
  );
}
