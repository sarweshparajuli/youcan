import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle.js';


const getDeviceConfig = (width) => {
    if (width < 600) {
        return 'xs';
    } else if (width >= 600 && width < 900) {
        return 'sm';
    } else if (width >= 900 && width < 1200) {
        return 'md';
    } else if (width >= 1200 && width < 1536) {
        return 'md';
    } else if (width >= 1536) {
        return 'lg';
    }
};

const useBreakpoint = () => {
    
    const [brkPnt, setBrkPnt] = useState();
    
    useEffect(() => {
      const calcInnerWidth = throttle(function() {
        setBrkPnt(getDeviceConfig(window.innerWidth))
      }, 200); 
      window.addEventListener('resize', calcInnerWidth);
      return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);
  
    return brkPnt;
  }
  export default useBreakpoint;
