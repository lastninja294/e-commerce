import moment from "moment";

export const getBreakPointsValue = (valueSet, breakpoint) => {
  if (typeof valueSet === "number") return valueSet;
  switch (breakpoint) {
    case "xs":
      return valueSet.xs;
    case "sm":
      return valueSet.sm || valueSet.xs;
    case "md":
      return valueSet.md || valueSet.sm || valueSet.xs;
    case "lg":
      return valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs;
    default:
      return (
        valueSet.xl || valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs
      );
  }
};

export const multiPropsFilter = (products, filters, stringKey = "title") => {
  const filterKeys = Object.keys(filters);
  return products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;
      // Loops again if product[key] is an array (for material attribute).
      if (Array.isArray(product[key])) {
        return product[key].some((keyEle) => filters[key].includes(keyEle));
      }
      if (key === stringKey) {
        return product[key].toLowerCase().includes(filters[key].toLowerCase());
      }
      return filters[key].includes(product[key]);
    });
  });
};

export const getCustomDateTime = (
  value = 0,
  unit = "days",
  format = "YYYY-MM-DD"
) => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};

export const timeFromNow = (date) => {
  const timestamp = moment(date).format("X");
  const newDate = moment.unix(timestamp);
  return moment(newDate).fromNow();
};

export const generateUniqueID = () => {
  return `v1-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};
