import SectionHeader from "../SectionHeader/SectionHeader";
import Step from "../Step/Step";
import "./HowItWorks.scss";
import { ReactComponent as PathSVG } from "../../assets/svg/path.svg";
import { ReactComponent as PathSVGMobile } from "../../assets/svg/path-mobile.svg";
import { ReactComponent as Step1SVG } from "../../assets/svg/step1.svg";
import { ReactComponent as Step2SVG } from "../../assets/svg/step2.svg";
import { ReactComponent as Step3SVG } from "../../assets/svg/step3.svg";

export default function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="how-it-works__background"></div>
      <SectionHeader
        primaryHeading="how it works"
        secondaryHeading="Get your daily health boost with just three easy steps."
      />

      <div className="steps">
        <div className="path">
          <PathSVG />
        </div>
        <div className="path-mobile">
          <PathSVGMobile />
        </div>
        <Step
          stepNumber={1}
          stepSVG={<Step1SVG />}
          stepHeading="Choose Your Diet"
          stepText="Explore our diverse range of diet options, including keto, paleo,
          low-carb, gluten-free, and more."
        />

        <Step
          stepNumber={2}
          stepSVG={<Step2SVG />}
          stepHeading="Customize Your Meals"
          stepText="Customize your daily meals to match your chosen diet and portion requirements."
        />

        <Step
          stepNumber={3}
          stepSVG={<Step3SVG />}
          stepHeading="Enjoy Daily Delivery"
          stepText="Enjoy the ease of daily meal preparation as we deliver your diet-conscious dishes right to your doorstep."
        />
      </div>
    </div>
  );
}
