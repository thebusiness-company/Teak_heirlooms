import { useEffect } from "react";
import { useScroll } from "../context/ScrollContext";

import Feedback from "./Feedback";
import NewsSection from "./News";
import StoreLocator from "./StoreLocator";
import SustainabilitySection from "./Sustainability";
import TermsAndConditions from "./TermsAndConditions";
import AboutUs from "./AboutUs";
// import Contact from "./ContactForm";
import { useLocation } from "react-router-dom";

const Page = () => {
  const location = useLocation();
 const {
    storeRef,
    feedbackRef,
    termsRef,
    sustainabilityRef,
    aboutusRef,
    newsRef,
    contactRef,
  } = useScroll();


  useEffect(() => {

    const sectionMap = {
    storeRef,
    feedbackRef,
    termsRef,
    sustainabilityRef,
    aboutusRef,
    newsRef,
    contactRef,
  };

  const scrollTarget = location.state?.scrollTo;
  const targetRef = sectionMap[scrollTarget];

  
  if(targetRef?.current){
    targetRef?.current.scrollIntoView({behavior:"smooth"});
  }
  }, [
    location.state,
    storeRef,
    feedbackRef,
    termsRef,
    sustainabilityRef,
    aboutusRef,
    newsRef,
    contactRef,
  ]);

  return (
      <>
       {/* Navigation Links */}

       {/* Sections with IDs and refs*/}
       <div ref={storeRef} id="store-locator">
         <StoreLocator />
       </div>
       <div ref={feedbackRef} id="feedback">
         <Feedback />
       </div>
       <div ref={termsRef} id="terms">
         <TermsAndConditions />
       </div>
       <div ref={sustainabilityRef} id="sustainability">
        <SustainabilitySection />
       </div>
       <div ref={aboutusRef} id="aboutus">
         <AboutUs />
       </div>
       <div ref={newsRef} id="news">
         <NewsSection />
       </div>
       {/* <div ref={contactRef} id="contact">
         <Contact />
       </div> */}
     </>
  );
};

export default Page;

