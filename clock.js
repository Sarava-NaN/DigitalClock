const hourEl=document.getElementById("hour");
const minEl=document.getElementById("minutes");
const secEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");


function $clock(){
    let hour= new Date().getHours();
    let minute= new Date().getMinutes();
    let sec= new Date().getSeconds();
    let ampm=hour>=12&&hour<24?"PM":"AM"
    // if (hour<12){
    //     hour= hour-12;
    //     ampm="PM"
    // }
    hour=hour<10? "0"+hour :hour; 
    minute=minute<10? "0"+minute :minute; 
    sec=sec<10? "0"+sec :sec; 

    hourEl.innerText=hour;
    minEl.innerText=minute;
    secEl.innerText=sec;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
    $clock()
    },1000)
}
$clock()