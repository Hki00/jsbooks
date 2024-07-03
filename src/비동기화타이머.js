// console.log(1);
// setTimeout(() => {console.log(2);
// }, 2000);
// console.log(3);

// const callback = () =>{console.log('2초후에 실행됩니다.')};
// setTimeout(callback, 2000);
// console.log('hihi');

// setTimeout(() => {
//     console.log(3);
// }, 5000);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// setTimeout(() => {
//     console.log(1);
// }, 2000);
// console.log('내가 먼저');

// const callback1 = () => {
//     console.log('2초마다 실행됩니다.');
//     setTimeout(callback1, 2000);
// }
// setTimeout(callback1, 2000);

const interval2 = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

setTimeout(() => {
    clearInterval(interval2)
}, 10000);

const setintervalId = setInterval(() => {
    console.log('2초마다 실행');
}, 2000);

setTimeout(() => {
    clearInterval(setintervalId);
},10000)

