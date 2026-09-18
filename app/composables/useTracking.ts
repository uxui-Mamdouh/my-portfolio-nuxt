export const useTracking = () => {
  const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (process.client && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
    }
  };
  return { trackEvent };
};