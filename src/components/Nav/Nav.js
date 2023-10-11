import { Link } from "react-scroll";

export default function Nav({ setIsNavOpen, className }) {
  return (
    <nav className="nav">
      <Link
        to="how-it-works"
        smooth={true}
        duration={400}
        className={className}
        onClick={() => setIsNavOpen(false)}
      >
        How it works
      </Link>
      <Link
        to="meal-plans"
        smooth={true}
        duration={400}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Meal Plans
      </Link>

      <Link
        to="testimonials"
        smooth={true}
        duration={400}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Testimonials
      </Link>
      <Link
        to="pricing"
        smooth={true}
        duration={400}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Pricing
      </Link>
      <Link
        to="cta"
        smooth={true}
        duration={400}
        className="nav-link"
        onClick={() => setIsNavOpen(false)}
      >
        Try for free
      </Link>
    </nav>
  );
}
