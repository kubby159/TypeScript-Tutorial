//Generic
//MyType 자리에 number 타입이 들어간 것을 확인할 수 있다.
function func(x) {
    return x[0];
}
//unknown 타입이라 +1 이 안됨.
//해결책으로는 1. as 또는 if문(narrowing)을 이용해서 타입변환을 시도하거나 2. 재네릭을 사용한다.
console.log(func([4, 2]) + 1); //4
console.log(func(["4", "2"]) + 1); //4
//타입파라미터 제한두기. extends 이용(복사개념X)
function func2(x) {
    return x - 1;
}
var a = func2(100);
function func3(x) {
    return x.length;
}
var b = func3(["100"]);
//1.
{
    function func5(x) {
        console.log(x.length);
    }
}
func5("hello");
func5(["Kim", "park"]);
var data = '{"name" : "dog", "age" : 1 }';
function func6(data) {
    return JSON.parse(data);
}
console.log(func6(data));
//3.
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var c = new Person("어쩌구");
console.log(c.name); //any 타입이 되었넹
