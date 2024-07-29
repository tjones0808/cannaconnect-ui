export function getTimeDifference(targetDate) {
  if(targetDate) {
    const currentDate = new Date().getTime();
    const differenceInMilliseconds = targetDate - currentDate;

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    
    return {
        days: days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds
    };
  }
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};
}