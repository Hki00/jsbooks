// const setTimeoutPromise = (ms) => new Promise((resolve,reject)=>{
//     setTimeout(resolve,ms); // ms를 가지고 있다가 resolve와 reject 중 조건부합시 실행
// });

// setTimeoutPromise(1000).then(()=>{
//     console.log('1초 뒤에 실행');
// });
// console.log('내가 먼저');

// const setTimeoutPromise = (ms) => new Promise((resolve,reject)=>{
//     setTimeout(resolve,ms);
// });

// async function main(){ 
//     //await: async안에 선언된 함수안에 대기 태우고싶은 명령을 완룐지 실팬지
//     //기다린다음 실행해라
//     await setTimeoutPromise(1000).then(()=>{
//         console.log('성공');
//     });
//     console.log('1초 뒤에 실행됩니다.');
//     console.log('난 나중에');
// }

// main();

const main = async() =>{ 
    await setTimeoutPromise(1000).then(()=>{
        console.log('성공');
    });
    console.log('await 실행이후 로그');
    console.log('난 나중에');
}

main();
