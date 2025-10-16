let isRed = true;
let act = null;
export function blink(){
    if(!act){
    act = setInterval(()=>{
    document.body.style.background = isRed ? 'blue' : 'red';
    isRed = !isRed;
    },1000)}
}

export function end(){
    if(act){
        clearInterval(act)
        act = null;
        document.body.style.background = 'none';
    }
}