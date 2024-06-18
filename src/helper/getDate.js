export const getDate = (dateX) => {
  const date = new Date(dateX);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formatedDate = `${year}-${month}-${day}`;
  return formatedDate;
};
