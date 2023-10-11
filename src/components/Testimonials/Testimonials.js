import SectionHeader from "../SectionHeader/SectionHeader";
import Testimonial from "../Testimonial/Testimonial";

import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <div>
      <div className="container-testimonials">
        <SectionHeader
          primaryHeading="testimonials"
          secondaryHeading="What our clients say about us."
        />
        <div className="testimonials">
          <Testimonial
            name="Sophia Rodriguez"
            comment="As someone with dietary restrictions, finding a reliable food delivery service was a struggle until I discovered Foodie.. The taste and quality of the food are exceptional. "
          />
          <Testimonial
            name="Sophia Rodriguez"
            comment="As someone with dietary restrictions, finding a reliable food delivery service was a struggle until I discovered Foodie.. The taste and quality of the food are exceptional. "
          />
          <Testimonial
            name="Sophia Rodriguez"
            comment="As someone with dietary restrictions, finding a reliable food delivery service was a struggle until I discovered Foodie.. The taste and quality of the food are exceptional. "
          />
        </div>
        <button className="see-more-btn-testimonials">
          See more<span> →</span>
        </button>
      </div>
    </div>
  );
}
