import SectionHeader from "../SectionHeader/SectionHeader";
import Testimonial from "../Testimonial/Testimonial";
import { ReactComponent as Customer1 } from "../../assets/images/avatar.svg";
import { ReactComponent as Customer2 } from "../../assets/images/customer-2.svg";
import { ReactComponent as Customer3 } from "../../assets/images/customer-3.svg";

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
            image={<Customer1 />}
            name="Sophia Rodriguez"
            comment="As someone with dietary restrictions, finding a reliable food delivery service was a struggle until I discovered Foodie.. The taste and quality of the food are exceptional. "
          />
          <Testimonial
            image={<Customer2 />}
            name="Charlotte Anderson"
            comment="Foodie has made my life so much easier. Their prompt and reliable delivery service, along with their mouthwatering dishes, keeps me coming back for more. "
          />
          <Testimonial
            image={<Customer3 />}
            name="Harper Lee"
            comment="I can't get enough of Foodie! Their dishes are a culinary delight, and the delivery service is incredibly efficient. They've become my go-to for delicious meals at home."
          />
        </div>
      </div>
    </div>
  );
}
