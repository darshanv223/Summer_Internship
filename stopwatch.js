let time = document.getElementById("time");
let [second,minute,hour]=[0,0,0];
let timerr=null;
function stopWatch(){
    second++;
    if(second==60){
        second=0;
        minute++
        if(minute==60){
            minute=0;
            hour++;
        }
    }
    let h = hour<10 ?"0"+hour:hour;
    let m = minute<10 ?"0"+minute:minute;
    let s = second<10 ?"0"+second:second;
    time.innerHTML=h+":"+m+":"+s;
}
function timer(){
    if(timerr!==null){
        clearInterval(timerr);
    }
    timerr=setInterval(stopWatch,1000);

}
function reset(){
    clearInterval(timerr);
    [second,minute,hour]=[0,0,0];
    time.innerHTML="00:00:00"
}
function stop(){
    clearInterval(timerr);
}