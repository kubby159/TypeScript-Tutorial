// array 자료에 붙일 수 있는 tuple type
//데이터의 위치와 타입을 지정하고 싶을 때 사용한다.
// ? 은 옵션을 표현함. 단, 데이터의 중간부분말고 맨 끝에서 사용해야한다. 그렇지않으면 순서가 모호해짐.
let animal: [string, boolean, number?] = ["dog", true];

//rest parameter 지정
//func, func2는 동일한 개념.
function func(...x: [number, string]) {
  console.log(x);
}

function func2(a: number, b: string) {
  console.log([a, b]);
}

func(1, "2");

//spread 연산자 쓸 때 타입적용하는 방법
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

console.log(arr2);

//1.

let foodInfo: [string, number, boolean] = ["순대국밥", 2000, true];

//2.
let arr4: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

//3. 함수에 타입지정하기
function func5(...rest: [string, boolean, ...(number | string)[]]) {
  console.log(rest);
}

func5("a", true, 6, 3, "1", 4);

//4.

function func6(...rest: (string | number)[]): [string[], number[]] {
  let stringArr = [];
  let numberArr = [];
  rest.forEach((e) => {
    if (typeof e === "string") {
      stringArr.push(e);
    } else {
      numberArr.push(e);
    }
  });

  return [stringArr, numberArr];
}

console.log(func6("b", 5, 6, 8, "a"));
