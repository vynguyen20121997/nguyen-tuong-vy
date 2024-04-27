var sum_to_n_a = function (n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

var sum_to_n_b = function (n) {
  let result = 0;

  return -result;
};

var sum_to_n_c = function (n) {
  let k = (n - 0) / 1 + 1;
  return ((0 + n) * k) / 2;
};

let sum1 = sum_to_n_a(4);
let sum2 = sum_to_n_b(4);
let sum3 = sum_to_n_c(4);
console.log(sum1, sum2, sum3);
