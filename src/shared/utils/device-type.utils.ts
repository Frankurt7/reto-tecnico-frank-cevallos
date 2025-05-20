type TDeviceType = 'tablet' | 'desktop' | 'mobile';

export const getDeviceType: () => TDeviceType = () => {
  const device = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(device)) {
    return 'tablet';
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(device)
  ) {
    return 'mobile';
  }
  return 'desktop';
};
