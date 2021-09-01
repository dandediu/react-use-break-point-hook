import { useState, useEffect } from 'react';
import getDeviceWidth from '../utils/get-device-width';
import checkFrame from '../utils/check-frame';

const useBreakpoint = () => {
  const [breakPoint, setbreakPoint] = useState(() =>
    getDeviceWidth(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = checkFrame(
      () => setbreakPoint(getDeviceWidth(window.innerWidth)),
      200
    );

    window.addEventListener('resize', calcInnerWidth);

    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return breakPoint;
};
export default useBreakpoint;
