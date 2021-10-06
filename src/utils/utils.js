export const getDate = (yearsDiff) => {
  let date = new Date().toISOString().slice(0, 10);

  if (yearsDiff !== 0) {
    date = date.split("-");
    date[0] = (parseInt(date[0]) + yearsDiff).toString();
    date = date.join("-");
  }

  return date;
};

export const resizeImage = (url, size) => {
  return url.match(/media\/(screenshots|games)/)
    ? url.replace("/media/", `/media/resize/${size}/-/`)
    : url;
};
