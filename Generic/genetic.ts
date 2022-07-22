function getSize(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
console.log(getSize(arr1)); // 3

const arr2 = ["1", "2", "3"];
console.log(getSize(arr2)); // 3

const arr3 = [false, true, true];
console.log(getSize(arr3)); // 3

// generic 사용 시,
function getSize2<T>(arr: T[]): number {
  return arr.length;
}

const arr4 = [1, 2, 3];
console.log(getSize2<number>(arr4)); // 3

const arr5 = ["1", "2", "3"];
console.log(getSize2<string>(arr5)); // 3

const arr6 = [false, true, true];
console.log(getSize2<boolean>(arr6)); // 3

// 전달 안해도 되긴 함
// 강제 하고 싶을 떄 입력도 가능
