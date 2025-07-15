import { createContext,useContext,useRef } from "react";
import PropTypes from "prop-types";

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

 export const useScroll = () => useContext(ScrollContext);
 
ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

 export default ScrollProvider;
 