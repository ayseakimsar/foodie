import { Link } from "react-scroll";

export default function Nav({ setIsNavOpen }) {
  return (
    <nav className="nav">
      <Link
        to="how-it-works"
        smooth={true}
        offset={-120}
        duration={300}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        How it works
      </Link>
      <Link
        to="meal-plans"
        smooth={true}
        offset={-100}
        duration={300}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Meal Plans
      </Link>

      <Link
        to="testimonials"
        smooth={true}
        offset={-120}
        duration={300}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Testimonials
      </Link>
      <Link
        to="pricing"
        smooth={true}
        duration={300}
        offset={-120}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Pricing
      </Link>
      <Link
        to="cta"
        smooth={true}
        duration={300}
        offset={-110}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Try for free
      </Link>
    </nav>
  );
}
