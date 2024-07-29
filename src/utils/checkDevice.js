export const checkMobile = () => {
  //check if the device is a mobile device or not
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    return mobile;
  }
};
