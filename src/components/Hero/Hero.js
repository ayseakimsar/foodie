import { ReactComponent as HeroSVGMobile } from "../../assets/svg/hero-svg.svg";
import { ReactComponent as HeroSVGDesktop } from "../../assets/svg/hero.svg";
import "./Hero.scss";

export default function Hero({ isSticky }) {
  console.log(window.innerWidth);
  return (
    <div className={`hero ${isSticky ? "hero-padding" : ""}`}>
      <div className="hero-content">
        <h1 className="hero-heading">
          Guilt-Free Goodness, Right to Your Address
        </h1>
        <p className="hero-text">
          This personalized 365-day food subscription is designed to help you
          regain your healthy eating habits, catering to your unique taste
          preferences and nutritional requirements.
        </p>
        <div className="hero-btns">
          <button className="hero-btn learn-more-btn">Learn More</button>
          <button className="hero-btn start-btn">Start Eating Well</button>
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
