function addZero(date) {
  return date < 10 ? `0${date}` : `${date}`;
}

export default function dateFormatter(unixDate) {
  const rawDate = new Date(unixDate * 1000);
  return `${addZero(rawDate.getDate())}.${addZero(
    rawDate.getMonth() + 1
  )}.${rawDate.getFullYear()} в ${rawDate.getHours()}:${addZero(rawDate.getMinutes())}`;
}
