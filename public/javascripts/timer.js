(function(window, document) {
     var mille = 60 * 10; //600
     var min = parseInt(mille / 60); // 600 / 60 = 10 minutes;
     var sec = parseInt(mille % 60); // 0 seconds;

     function checkTime() {
         document.getElementById("timeLeft").innerHTML = `Time Left: ${min} min ${sec} sec`;
         if (mille <= 0) {
             quizFinished()
         } else {
             mille = mille - 1;
             min = parseInt(mille / 60);
             sec = parseInt(mille % 60);
             setTimeout(function () {
                 checkTime();
             }, 1000);

         }
     }
     setTimeout(function () {
         checkTime();
     }, 500);
})(window, document);