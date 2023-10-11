import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import MealPlans from "../MealPlans/MealPlans";
import Testimonials from "../Testimonials/Testimonials";
import Pricing from "../Pricing/Pricing";
import CallToAction from "../CallToAction/CallToAction";
import Footer from "../Footer/Footer";

export default function Main() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header isSticky={isSticky} />
      <Hero isSticky={isSticky} />
      {/* <Element name="how-it-works">
        <HowItWorks />
      </Element> */}
      <Element name="meal-plans">
        <MealPlans />
      </Element>
      {/* <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="cta">
        <CallToAction />
      </Element> */}
      <Footer />
    </>
  );
}
