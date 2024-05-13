const hour= document.getElementById("hours");
const min= document.getElementById("mins");
const sec= document.getElementById("secs");

function setTime(){
    console.log("setting Time");
    const time= new Date();
    hour.textContent=time.getHours();
    min.textContent=time.getMinutes();
    sec.textContent=time.getSeconds();
}

setInterval(()=>{setTime()}, 1000);