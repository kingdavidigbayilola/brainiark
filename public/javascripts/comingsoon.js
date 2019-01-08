(function(window, document) {
    var countDownDate = new Date("Sept 15, 2019 15:37:25");

    var countdownfunction = setInterval(() => {
         var now = new Date().getTime();

         var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `

        if(distance < 0){
            clearInterval(countdownfunction);

            document.getElementById("countdown").innerHTML = "READY"
        }        
    }, 1000);
})(window, document);