const setTimeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(); // then과 연결된다.
    }, 1000);
});
setTimeoutPromise.then(() =>{
    console.log('1000ms 뒤에 실행됩니다.');
});