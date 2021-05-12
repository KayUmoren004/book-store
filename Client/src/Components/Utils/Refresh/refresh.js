let refreshCountdown;

//Start countdown until refresh is needed
export const createCountdown = (expiry, callback) => {
  const BUFFER = 5000; // 5 seconds
  const date = new Date();
  const currentTimestamp = date.getTime();
  const countdownTime = expiry - currentTimestamp - BUFFER;

  refreshCountdown = window.setTimeout(callback, countdownTime);
};

// Reset timer
export const clearCountdown = () => {
  if (refreshCountdown) clearTimeout(refreshCountdown);
};
