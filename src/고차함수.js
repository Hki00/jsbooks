const funk = () =>{  // => 펑크는 함수다
    return () =>{
        console.log('hello');
    }
}

funk()();
console.log(funk);
const aa= funk();
aa();