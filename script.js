let distance;
let endDate;
function Start() {
    document.getElementById("Name").style.display = "none";
    document.getElementById("Countdowns").style.display = "none";
    document.getElementById("Result").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    var Name = document.getElementById("Name").value;
    var D = document.getElementById("days").value;
    var H = document.getElementById("hours").value;
    var M = document.getElementById("minutes").value;
    var S = document.getElementById("seconds").value;
    document.getElementById("title").innerHTML = "Countdown for " + Name;
    endDate = new Date();
    endDate.setUTCDate(endDate.getUTCDate() + Number(D));
    endDate.setUTCHours(endDate.getUTCHours() + Number(H));
    endDate.setUTCMinutes(endDate.getUTCMinutes() + Number(M));
    endDate.setUTCSeconds(endDate.getUTCSeconds() + Number(S));
    var x = setInterval(function() {
        distance = endDate.getTime() - Date.now();
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("Result").innerHTML = " Days: "+ days +" Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds; 
        if (Name === "") {
            document.getElementById("title").innerHTML = "Countdown for No Name";
        }
        if (distance < 250) {
            clearInterval(x);
            document.getElementById("Result").innerHTML = "Finished!"; 
            playAlarm();
        }
      }, 1000);

}
function Reset() {
    document.getElementById("title").innerHTML = "Create Your Own Countdown!";
    audio.pause();
    endDate = 0;
    distance = 0;
    document.getElementById("Countdowns").style.display = "flex";
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("Name").style.display = "inline-block";
    document.getElementById("Result").style.display = "none";
    document.getElementById("Name").value = "";
    document.getElementById("days").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}

var audio = document.getElementById("audio");
function playAlarm() {
audio.play();
}