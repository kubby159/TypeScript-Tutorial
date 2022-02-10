//ambient
//Ts 파일에 있는 모든 데이터를 가져옴.
import { arr4 } from "./tupleType";

console.log(arr4);

//로컬 모듈 만드는 방법
//상단에 import {} or export{} 만 적어주면 됨.

//글로벌 변수를 만드는 방법

declare global {
  type Dog = string;
}
