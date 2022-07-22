interface User {
  name: string;
  age: number;
}
interface Car {
  name: string;
  color: string;
}
interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: "b", color: "red" };
const book: Book = { price: 1000 };

function showName<T extends { name: string }>(data: T): string {
  console.log(data.name);
  return data.name;
}

showName<{ name: string }>(user);
showName(car);
