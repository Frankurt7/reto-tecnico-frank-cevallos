import { MOBILE_BREAKPOINT_SIZE } from 'core/constants/size.constants';
import { useEffect, useState } from 'react';
import { getDeviceType } from 'shared/utils/device-type.utils';
import { debounce } from 'shared/utils/function.utils';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const deviceType = getDeviceType();

  useEffect(() => {
    let isMounted = true;

    const handleSize = debounce(() => {
      if (isMounted) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }, 50);

    handleSize();

    window.addEventListener('resize', handleSize);
    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return {
    ...windowSize,
    isMobile: deviceType === 'mobile' || deviceType === 'tablet' || windowSize.width <= MOBILE_BREAKPOINT_SIZE,
  };
};

export default useWindowSize;
