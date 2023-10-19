import "./MobileNav.scss";
import Nav from "../Nav/Nav";

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
  return (
    <div className={`nav-container ${isNavOpen ? "visible" : ""}`}>
      <div className="nav-overlay"></div>

      <Nav setIsNavOpen={setIsNavOpen} className="nav-link" />
    </div>
  );
}
