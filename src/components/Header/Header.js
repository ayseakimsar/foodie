import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/svg/mobile-logo.svg";
import { ReactComponent as OpenMenuButtonSVG } from "../../assets/svg/mobile-nav-button.svg";
import { ReactComponent as CloseMenuButtonSVG } from "../../assets/svg/remove-close-x.svg";

import "./Header.scss";
import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";
import { Link } from "react-scroll";

export default function Header({ isSticky }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <Link to="hero" smooth={true} duration={400} offset={-50}>
        <div className="header__logo">
          <Logo />
        </div>
      </Link>

      <div className="header__mobile-nav">
        <button
          className="nav__btn"
          onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
        >
          {!isNavOpen ? <OpenMenuButtonSVG /> : <CloseMenuButtonSVG />}
        </button>
        <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
      <div className="header__desktop-nav">
        <DesktopNav />
      </div>
    </header>
  );
}
