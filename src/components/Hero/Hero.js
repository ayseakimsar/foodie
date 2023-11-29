import { ReactComponent as HeroSVGMobile } from "../../assets/svg/hero-svg.svg";
import { ReactComponent as HeroSVGDesktop } from "../../assets/svg/hero.svg";
import "./Hero.scss";
import { Link } from "react-scroll";

export default function Hero({ isSticky }) {
  return (
    <div className={`hero ${isSticky ? "hero-padding" : ""}`}>
      <div className="hero-content">
        <h1 className="hero-heading">
          <span>Guilt-Free Goodness,</span> <span>Right to Your Address</span>
        </h1>
        <p className="hero-text">
          This personalized 365-day food subscription is designed to help you
          regain your healthy eating habits, catering to your unique taste
          preferences and nutritional requirements.
        </p>
        <div className="hero-btns">
          <Link
            to="how-it-works"
            smooth={true}
            duration={300}
            offset={-120}
            className="hero-btn hero__learn-more-btn"
          >
            Learn More
          </Link>

          <Link
            to="cta"
            smooth={true}
            duration={300}
            offset={-110}
            className="hero-btn hero__start-btn"
          >
            Start Eating Well
          </Link>
        </div>
      </div>

      <div className="hero-svg-mobile">
        <HeroSVGMobile />
      </div>

      <div className="hero-svg-desktop">
        <HeroSVGDesktop />
      </div>
    </div>
  );
}
