export default function sum(a) {
  return function (b) {
    return !isNaN(b) ? sum(a + b) : a;
  };
}
