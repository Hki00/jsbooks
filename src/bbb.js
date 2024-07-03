// const apple = '사과';
// const orange = '오렌지';
// const pear = '배';
// const strawberry = '딸기';

const a = "ㅎㅎ";
const b = 3948;
const fruits = ['사과', '딸기', '오렌지','배'];
const arrayOfarray = [[1,3,4],[2,5,6]];
const variableArray = [a, b, 1,2,3,4,31];
c = arrayOfarray.at(1)




console.log(fruits);
// console.log(fruits.length);
//fruits[4]='용과';
// console.log(fruits);
// console.log(fruits[0]);

console.log(fruits.length);

fruits.unshift('망고');
fruits.push('바나나');
console.log(fruits);
fruits[4] = '코코아';
console.log(fruits);

console.log(fruits[fruits.length-1]);
//fruits.pop(); // 선택된 배열에 마지막 삭제
// fruits.shift(); //선택한 배열 첫번째 삭제
fruits.splice(1,4,'돈','게임', '영화');
console.log(fruits.at(0));
console.log(fruits);






