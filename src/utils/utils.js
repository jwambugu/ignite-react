export const getDate = (yearsDiff) => {
  let date = new Date().toISOString().slice(0, 10);

  if (yearsDiff !== 0) {
    date = date.split("-");
    date[0] = (parseInt(date[0]) + yearsDiff).toString();
    date = date.join("-");
  }

  return date;
};

const currentDate = getDate(0);
const lastYear = getDate(-1);
const nextYear = getDate(1);

console.log(currentDate, lastYear, nextYear);
