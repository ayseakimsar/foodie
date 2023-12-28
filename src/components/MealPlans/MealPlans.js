import SectionHeader from "../SectionHeader/SectionHeader";
import "./MealPlans.scss";
import lowCarbImage from "../../assets/images/low-carb.jpg";
import mediterraneanImage from "../../assets/images/ca-creative-bpPTlXWTOvg-unsplash.jpg";
import veganImage from "../../assets/images/vegan.jpg";
import pescatarianImage from "../../assets/images/pescatarian.jpg";
import allergenFreeImage from "../../assets/images/allergen-free.jpg";

import MealPlanCard from "../MealPlanCard/MealPlanCard";
export default function MealPlans() {
  console.log(window.innerWidth);
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
          <MealPlanCard planName="High-protein" image={mediterraneanImage} />
          <MealPlanCard planName="Vegan" image={veganImage} />
          <MealPlanCard planName="Allergen-Free" image={allergenFreeImage} />
          <div className="last-meal-card">
            <MealPlanCard planName="Low-fat" image={lowCarbImage} />
          </div>
        </div>

        <h4 className="plan-category">Family Plans</h4>
        <div className="cards">
          <MealPlanCard planName="Allergen-Free" image={allergenFreeImage} />
          <MealPlanCard planName="High-protein" image={mediterraneanImage} />
          <MealPlanCard planName="Pescatarian" image={pescatarianImage} />
          <div className="last-meal-card">
            <MealPlanCard planName="Low-fat" image={lowCarbImage} />
          </div>
        </div>

        <button className="see-all-btn">See all plans</button>
      </div>
    </div>
  );
}
