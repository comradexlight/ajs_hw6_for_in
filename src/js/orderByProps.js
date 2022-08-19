export default function orderByProps(object, fisrtPropsArray) {
  const order = [];
  const sortedPropsArray = [];
  fisrtPropsArray.forEach((element) => {
    order.push(element);
  });
  const keys = Object.keys(object).sort();
  keys.forEach((element) => {
    order.push(element);
  });
  const uniqueOrder = Array.from(new Set(order));
  uniqueOrder.forEach((element) => {
    sortedPropsArray.push({ key: element, value: object[element] });
  });
  return sortedPropsArray;
}
