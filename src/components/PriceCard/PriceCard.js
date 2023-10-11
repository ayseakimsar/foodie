import "./PriceCard.scss";
import { ReactComponent as CheckIcon } from "../../assets/svg/check-ok.svg";
import { ReactComponent as CrossIcon } from "../../assets/svg/remove-close-x.svg";

export default function PriceCard({ plan, price, perMeal, lastBulletIcon }) {
  return (
    <div className={`price-card ${plan}`}>
      <div className="pricing-plan">{plan}</div>
      <div className="price">
        <span>$</span>
        {price}
      </div>
      <div className="price-info">
        per month. That's just ${perMeal} per meal!
      </div>
      <div className="services">
        <div className="service">
          <span>
            <CheckIcon />
          </span>
          Get the latest recipe
        </div>
        <div className="service">
          <span>
            <CheckIcon />
          </span>
          Order from 24/7
        </div>
        <div className="service">
          <span>
            <CheckIcon />
          </span>
          Delivery is free
        </div>
        <div className="service">
          <span>
            {lastBulletIcon === "check" ? <CheckIcon /> : <CrossIcon />}
          </span>
          Get the latest recipe
        </div>
      </div>
      <button className={`start-today-btn ${plan}`}>Start today</button>
    </div>
  );
}
