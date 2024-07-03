let a= [1,2,3,4,5].reduce((a,c) => {
    a[c] = c*10;
    return a;
},{});
console.log(a);