import "./Footer.scss";
import { ReactComponent as FooterLogo } from "../../assets/svg/footer-logo.svg";
import { ReactComponent as InstagramLogo } from "../../assets/svg/logo-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/svg/logo-twitter.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svg/logo-facebook.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="nav-col account">
        <h6>Account</h6>
        <ul>
          <li>
            <button className="footer-link">Create account</button>
          </li>
          <li>
            <button className="footer-link">Sign in</button>
          </li>
          <li>
            <button className="footer-link">iOS app</button>
          </li>
          <li>
            <button className="footer-link">Android app</button>
          </li>
        </ul>
      </div>
      <div className="nav-col company">
        <h6>Company</h6>
        <ul>
          <li>
            <button className="footer-link">About Foodie</button>
          </li>
          <li>
            <button className="footer-link">For Business</button>
          </li>
          <li>
            <button className="footer-link">Cooking partners </button>
          </li>
          <li>
            <button className="footer-link">Careers </button>
          </li>
        </ul>
      </div>
      <div className="nav-col resources">
        <h6>Resources</h6>
        <ul>
          <li>
            <button className="footer-link">Recipe directory</button>
          </li>
          <li>
            <button className="footer-link">Help center</button>
          </li>
          <li>
            <button className="footer-link">Privacy & terms</button>
          </li>
        </ul>
      </div>

      <div className="logo-and-socials">
        <div className="logo">
          <FooterLogo />
        </div>
        <div className="socials">
          <div>
            <InstagramLogo />
          </div>
          <div>
            <TwitterLogo />
          </div>
          <div>
            <FacebookLogo />
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023 by Foodie, Inc. All rights reserved.
      </div>
    </div>
  );
}
