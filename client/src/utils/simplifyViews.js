export const simplifyViews = (viewCount) => {
  if (viewCount >= 1000000) {
    return (viewCount / 1000000).toFixed(0) + "M";
  } else if (viewCount >= 1000) {
    return (viewCount / 1000).toFixed(0) + "k";
  } else {
    return viewCount.toString();
  }
};
