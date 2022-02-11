declare function func2<MyType extends number>(x: MyType): number;
declare let a: number;
interface Limited {
    length: number;
}
declare function func3<MyType extends Limited>(x: MyType): number;
declare let b: number;
interface Animal {
    name: string;
    age: number;
}
declare let data: string;
declare function func6<Animal>(data: any): any;
declare class Person<Type> {
    name: any;
    constructor(a: Type);
}
declare let c: Person<string>;
