import { ReactComponent as Stars } from "../../assets/svg/stars.svg";
import { ReactComponent as Avatar } from "../../assets/images/avatar.svg";

import "./Testimonial.scss";

export default function Testimonial({ image, name, comment }) {
  return (
    <div className="testimonial">
      <div className="customer-image-background"></div>
      <div className="customer-image">
        <Avatar />
      </div>
      <div className="card-content">
        <div className="stars">
          <Stars />
        </div>
        <div className="customer-name">{name}</div>
        <div className="customer-comment">{comment}</div>
      </div>
    </div>
  );
}
