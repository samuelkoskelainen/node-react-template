export const getUTCDate = (dateString: Date) => {
  const date = new Date(dateString);

  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours() + 2,
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};