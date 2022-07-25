// Literal

const userName1 = "bob";
let userName2 = "tom"; // userName2: string | number 바꿔줘야댐
userName2 = "teg"; // username2 = 3, 에러 발생 리터럴 타입 정해져있음

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "hello",
  job: "developer",
};

// Union

interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  gift.start(); // error 둘다 동시 만족해야됨
}

function getGift2(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start(); // if 걸어주면 깔끔 검사 항목 많아지면 switch
  } else {
    gift.call();
  }
}

// Intersection

interface Car2 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car2 = {
  name: "타요",
  start() {},
  color: "red",
  price: 1000, // 모든 기능이 있어야됨 여러개의 타입을 합쳐줌 (and)
};
