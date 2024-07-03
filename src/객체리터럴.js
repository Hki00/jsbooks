
const jhy = {name : '조현영', year : 1994, month : 8, date : 12, gender : 'M',};
const hki = {
    name : '홍현기', year : 2000, month : 5, date : 22, gender : 'M', obj: 23
};

function getValue(objKey){
    return console.log(hki[objKey]);


}
getValue('name');



console.log(hki.gf || hki.name); // 전이 참이면 전을 띄우고 거짓이면 후를 띄워라
console.log(hki.gf ?? hki.name); //전자가 null or undefined가 뜨면 후자를 띄워라
// console.log(hki.gf);

// console.log{'obj'} = hki; //{}로 변수 선언하면 해당 변수에 맞는 객채에 키값을 가져오라는 의미
// console.log(obj.score);


// console.log(hki.name);
// console.log(hki.month);
// console.log(hki);
// console.log(delete hki.gender);
// console.log(hki); //티라미수케잌 애플망고 빙수 두바이 초콜릿 
// console.log(hki.name, hki.obj);

