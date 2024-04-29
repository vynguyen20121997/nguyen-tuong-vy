var sum_to_n_a = function (n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

var sum_to_n_b = function (n) {
  const result = new Array(n + 1)
    .fill(0)
    .map((e, index) => index)
    .reduce((a, b) => a + b);
  return result;
};

var sum_to_n_c = function (n) {
  let k = (n - 0) / 1 + 1;
  return ((0 + n) * k) / 2;
};
