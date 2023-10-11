import "./Step.scss";

export default function Step({ stepNumber, stepSVG, stepHeading, stepText }) {
  return (
    <div className={`step step${stepNumber}`}>
      <div className="step-svg">{stepSVG}</div>
      <h4 className="step-heading">{stepHeading}</h4>
      <p className="step-text">{stepText}</p>
    </div>
  );
}
