const capitalize = (value: string) =>
  value.toLowerCase().replace(/\w\S*/g, (word) => word.replace(/^\w/, (char) => char.toUpperCase()));

const StringHelper = {
  capitalize,
};

export default StringHelper;
