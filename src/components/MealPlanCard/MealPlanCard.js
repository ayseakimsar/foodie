import "./MealPlanCard.scss";

export default function MealPlanCard({ planName, image }) {
  return (
    <div className="card">
      <div className="card-heading">{planName}</div>
      <img className="card-image" src={image} alt={planName} />
      <div className="btns">
        <button className="learn-more-btn">Learn More</button>
        <button className="start-plan-btn">Start Plan</button>
      </div>
    </div>
  );
}
