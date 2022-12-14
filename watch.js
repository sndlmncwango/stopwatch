let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
const milisecond =document.querySelector("#milisecond");
const hour = document.querySelector("#hour");
const second = document.querySelector("#second");
const minute = document.querySelector("#minute");
const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");
//start,stop and reset buttons
startbtn.addEventListener("click",start)
stopbtn.addEventListener("click",stop)
resetbtn.addEventListener("click", ()=>{
    //reset, clears interval. sets html values back to 00. sets the variables back to 0.0
    //re-enables the start button
    clearInterval(interval);
    hour.innerText = `00`;
    minute.innerText = `:00`;
    second.innerText = `:00`; 
    milisecond.innerText = `:00`;
    seconds = 0;
    minutes = 0;
    hours = 0;
    miliseconds = 0;
    startbtn.disabled = false;
})
//clears the interval. enables the start button
function stop(){
    clearInterval(interval)
    startbtn.disabled = false;
};
//starts the interval function. Disables the start button.
//if not disbaled and button is clicked again another instance of the function runs. 
function start(){
    interval = setInterval(count,10);
    startbtn.disabled = true;   
}
function count(){
    //adds a 1 to millisecond V 
    //if statements: adds a 1 to he next level of the timer. 
    miliseconds++;
    if(miliseconds == 100){
        miliseconds = 0;
        seconds++
        if (seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours ++
            }
        }}
        //if statements: appends a 0 if number is less then 10, to have double digit effect
    if(miliseconds < 10){
        milisecond.innerHTML = `:0${miliseconds}`;
    }else{milisecond.innerText = `:${miliseconds}`; }
    if(seconds < 10){
        second.innerText = `:0${seconds}`;
    }else{second.innerText = `:${seconds}`;}
    if(minutes < 10){
        minute.innerText = `:0${minutes}`;
    }else{minute.innerText = `:${minutes}`;}
    if(hours < 10){
        hour.innerText = `0${hours}`;
    }else{hour.innerText = `${hours}`;}
}

