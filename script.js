let distance = 0;

function Start() {
    document.getElementById("Result").style.display = "block";
    var D = document.getElementById("days").value;
    var H = document.getElementById("hours").value;
    var M = document.getElementById("minutes").value;
    var S = document.getElementById("seconds").value;
    var resultMessage = document.getElementById("result");
    let endDate = new Date();
    endDate.setUTCDate(endDate.getUTCDate() + Number(D));
    endDate.setUTCHours(endDate.getUTCHours() + Number(H));
    endDate.setUTCMinutes(endDate.getUTCMinutes() + Number(M));
    endDate.setUTCSeconds(endDate.getUTCSeconds() + Number(S));
    resultMessage.style.display = "block";
    var x = setInterval(function() {
        distance = endDate.getTime() - Date.now();
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("Result").innerHTML = " D: "+ days +" H: " + hours + " M: " + minutes + " S: " + seconds; 

        if (distance < 250) {
            clearInterval(x);
            document.getElementById("Result").innerHTML = "Now!"; 
        }
      }, 1000);

}
function Reset() {
    document.getElementById("days").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}