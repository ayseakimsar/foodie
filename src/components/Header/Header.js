import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/svg/mobile-logo.svg";
import { ReactComponent as OpenMenuSVG } from "../../assets/svg/mobile-nav-button.svg";
import "./Header.scss";
import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";

export default function Header({ isSticky }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <Logo />
      <div className="header__mobile-nav">
        <button className="open-nav-btn" onClick={() => setIsNavOpen(true)}>
          <OpenMenuSVG />
        </button>
        <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
      <div className="header__desktop-nav">
        <DesktopNav />
      </div>
    </header>
  );
}
