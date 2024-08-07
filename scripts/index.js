let current_day = document.getElementById("currentDay");
let current_time = document.getElementById("currentTime");
let pfp_image = document.querySelector("img");

let days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function updateTime(day_node, time_node="") {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds();

    let today = days_of_the_week[date.getUTCDay()]
    let time = hour + ":" + minute + ":" + second;

    if(time_node !== "")
        time_node.innerText = time

    day_node.innerText = today;

}

setInterval(()=>{
    updateTime(current_day, current_time)
}, 1000)