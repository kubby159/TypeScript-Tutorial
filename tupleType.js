"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//global 변수 적용
var b = "kim";
// array 자료에 붙일 수 있는 tuple type
//데이터의 위치와 타입을 지정하고 싶을 때 사용한다.
// ? 은 옵션을 표현함. 단, 데이터의 중간부분말고 맨 끝에서 사용해야한다. 그렇지않으면 순서가 모호해짐.
var animal = ["dog", true];
//rest parameter 지정
//func, func2는 동일한 개념.
function func() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
function func2(a, b) {
    console.log([a, b]);
}
func(1, "2");
//spread 연산자 쓸 때 타입적용하는 방법
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true);
console.log(arr2);
//1.
var foodInfo = ["순대국밥", 2000, true];
//2.
var arr4 = [
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
function func5() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
func5("a", true, 6, 3, "1", 4);
//4.
function func6() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var stringArr = [];
    var numberArr = [];
    rest.forEach(function (e) {
        if (typeof e === "string") {
            stringArr.push(e);
        }
        else {
            numberArr.push(e);
        }
    });
    return [stringArr, numberArr];
}
console.log(func6("b", 5, 6, 8, "a"));
