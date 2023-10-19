import "./DesktopNav.scss";
import { Link } from "react-scroll";

export default function DesktopNav() {
  return (
    <nav className="desktop-nav">
      <div className="desktop-nav__nav-link">
        <Link to="how-it-works" smooth={true} offset={-80} duration={400}>
          How it works
        </Link>
      </div>
      <div className="desktop-nav__nav-link">
        <Link to="meal-plans" smooth={true} offset={-100} duration={400}>
          Meals
        </Link>
      </div>
      <div className="desktop-nav__nav-link">
        <Link to="testimonials" smooth={true} duration={400} offset={-120}>
          Testimonials
        </Link>
      </div>
      <div className="desktop-nav__nav-link">
        <Link to="pricing" smooth={true} duration={400} offset={-120}>
          Pricing
        </Link>
      </div>

      <div className="desktop-nav__nav-link desktop-nav__nav-link--try-for-free">
        <Link to="cta" smooth={true} duration={400} offset={-110}>
          Try for free
        </Link>
      </div>
    </nav>
  );
}
