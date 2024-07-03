console.log('--------------');
const promise = setTimeoutPromise(0);
promise.than(()=>{
    return 'a';
})
.than((data)=>{
    console.log(data);
    return 'b';
})
.than((data)=>{
    console.log(data);
});