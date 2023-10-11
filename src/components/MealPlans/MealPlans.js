import SectionHeader from "../SectionHeader/SectionHeader";
import "./MealPlans.scss";
import lowCarbImage from "../../assets/images/low-carb.jpg";

import MealPlanCard from "../MealPlanCard/MealPlanCard";
export default function MealPlans() {
  return (
    <div className="meal-plans-container">
      <div className="meal-plans">
        <div className="meal-plan-header">
          <SectionHeader
            primaryHeadingColor="#FF895A"
            primaryHeading="meal plans"
            secondaryHeadingColor="#cce8e3"
            secondaryHeading="Be your healthiest version with expertly crafted diet plans."
          />
        </div>
        <h4 className="plan-category">Popular Plans</h4>
        <div className="cards">
          <MealPlanCard planName="Low-carb" image={lowCarbImage} />
          <MealPlanCard planName="Low-carb" image={lowCarbImage} />
        </div>
        <button className="see-more-btn">See more →</button>
        <h4 className="plan-category">Family Plans</h4>
        <div className="cards">
          <MealPlanCard planName="Low-carb" image={lowCarbImage} />
          <MealPlanCard planName="Low-carb" image={lowCarbImage} />
        </div>
        <button className="see-more-btn">
          See more <span className="right-arrow">→</span>
        </button>

        <button className="see-all-btn">See all plans</button>
      </div>
    </div>
  );
}
