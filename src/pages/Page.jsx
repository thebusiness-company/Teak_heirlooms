import { useEffect } from "react";

import Feedback from "./Feedback";
import NewsSection from "./News";
import StoreLocator from "./StoreLocator";
import SustainabilitySection from "./Sustainability";
import TermsAndConditions from "./TermsAndConditions";
import AboutUs from "./AboutUs";
import Contect from "./ContectForm";

const Page = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      {/* Navigation Links */}
      

      {/* Sections with IDs */}
      <div id="store-locator">
        <StoreLocator />
      </div>
      <div id="feedback">
        <Feedback />
      </div>
      <div id="terms">
        <TermsAndConditions />
      </div>
      <div id="sustainability">
        <SustainabilitySection />
      </div>
      <div id="news">
        <NewsSection />
      </div>
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="contect">
        <Contect />
      </div>
    </>
  );
};

export default Page;
