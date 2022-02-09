//Generic

//MyType 자리에 number 타입이 들어간 것을 확인할 수 있다.
function func<MyType>(x: MyType[]): MyType {
  return x[0];
}

//unknown 타입이라 +1 이 안됨.
//해결책으로는 1. as 또는 if문(narrowing)을 이용해서 타입변환을 시도하거나 2. 재네릭을 사용한다.
console.log(func<number>([4, 2]) + 1); //4
console.log(func<string>(["4", "2"]) + 1); //4

//타입파라미터 제한두기. extends 이용(복사개념X)
function func2<MyType extends number>(x: MyType) {
  return x - 1;
}

let a = func2<number>(100);

//커스텀 타입으로도 타입파라미터 제한이 가능하다.

interface Limited {
  length: number;
}

function func3<MyType extends Limited>(x: MyType) {
  return x.length;
}

let b = func3<string[]>(["100"]);

//1.

{
  function func5<MyType extends string | string[]>(x: MyType) {
    console.log(x.length);
  }
}

func5<string>("hello");
func5<string[]>(["Kim", "park"]);

//2.
interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function func6<Animal>(data) {
  return JSON.parse(data);
}

console.log(func6(data));

//3.

class Person<Type> {
  name;
  constructor(a: Type) {
    this.name = a;
  }
}
let c = new Person<string>("어쩌구");
console.log(c.name); //any 타입이 되었넹
