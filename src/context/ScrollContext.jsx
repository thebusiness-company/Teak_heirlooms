import React from 'react'
import { createContext,useContext,useRef } from "react";


const ScrollContext = createContext();
 
const ScrollProvider = ({ children }) => {
  const storeRef = useRef(null);
  const feedbackRef = useRef(null);
  const termsRef = useRef(null);
  const sustainabilityRef = useRef(null);
  const aboutusRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);

  // ✅ Now the return is inside the function — CORRECT
  return (
    <ScrollContext.Provider
      value={{
        storeRef,
        feedbackRef,
        termsRef,
        sustainabilityRef,
        aboutusRef,
        newsRef,
        contactRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

 const useScroll = () => useContext(ScrollContext);
 
 export default ScrollProvider;
 export {useScroll};
 