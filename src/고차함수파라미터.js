const func = (msg) => {
    return () => {
        console.log(msg);

    }
}
func('hiih')();
const aa =func('hihi');
aa();