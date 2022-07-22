interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

// 혹은 Moble<{color: string, coupon: boolean}>
const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};
const m2: Mobile<string> = {
  name: "s22",
  price: 1200,
  option: "good",
};
