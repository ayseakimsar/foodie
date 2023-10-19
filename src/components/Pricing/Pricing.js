import SectionHeader from "../SectionHeader/SectionHeader";
import PriceCard from "../PriceCard/PriceCard";
import "./Pricing.scss";

export default function Pricing() {
  return (
    <div className="pricing-container">
      <SectionHeader
        primaryHeading="pricing"
        secondaryHeading="Explore our wallet-friendly solutions for a healthier lifestyle"
      />{" "}
      <div className="price-cards">
        <PriceCard
          plan="starter"
          price={399}
          perMeal={13}
          lastBulletIcon="cross"
        />
        <PriceCard
          plan="complete"
          price={649}
          perMeal={11}
          lastBulletIcon="check"
        />
      </div>
    </div>
  );
}
