import "./CallToAction.scss";
import { ReactComponent as CtaSVG } from "../../assets/svg/cta-svg-tablet.svg";
import { useState } from "react";

export default function CallToAction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState();
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(e) {
    setName(e);
  }
  return (
    <div className="cta-container">
      <div className="cta-card">
        <div className="cta-illustration">
          <CtaSVG />
        </div>
        <div className="cta-content">
          <h5 className="cta-heading">Get your first meal for free!</h5>
          <p className="cta-text">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
        </div>
        <form className="cta-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="name-area">
            <label className="label">Full Name</label>
            <input
              required
              placeholder="Gregory House"
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email-area">
            <label className="label">E-mail</label>
            <input
              placeholder="me@example.com"
              className="input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="cta-form--hear-us ">
            <label className="label">Where did you hear from us?</label>
            <select
              className="input"
              value={select}
              onChange={(e) => console.log(e.target.value)}
            >
              <option value="0">Please choose an option</option>
              <option value="1">Family & friends</option>
              <option value="2">Facebook ads</option>
              <option value="3">YouTube video</option>
              <option value="4">Others</option>
            </select>
          </div>
          <button className="sign-up-now-btn" type="submit" value="Sign up now">
            Sign up now
          </button>
        </form>
      </div>
    </div>
  );
}
