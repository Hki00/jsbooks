// const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
// });

// const promise = setTimeoutPromise(0);
// promise.than(()=>{
// console.log('0초후 실행돰,');

// })
// .catch((err)=>{
//     console.log('에러 발생 시 실행됩낟.');
// })
// .finally((err)=> {
//     console.log('성공이든 실패든 무조건 실행됩ㄴ디ㅏ');
// });

const data = {
    setReject: false
}
const setTimeoutPromise = (ms, data) => new Promise((resolve, reject) => {
    if(data.setReject) { reject('setReject is true'); }
    setTimeout(resolve, ms);
});
const promise = setTimeoutPromise(0, data);
promise
  .then(() => {
    console.log('0초 후 실행됩니다');
  })
  .catch((err) => {
    console.log(err);
    console.log('에러발생 시 실행됩니다');
  })
  .finally((err) => {
    if(err) {
        console.log(err);
    }
    console.log('성공하든 실패하든 무조건 실행됨');
  });