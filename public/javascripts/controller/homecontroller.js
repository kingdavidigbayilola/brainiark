let greetCard = document.getElementById('greet');

let greetMesg;

let timeGreet = new Date().getHours();
let timeHour = new Date().getMinutes();
// getMinutes();

if(timeGreet == 00 || timeGreet <= 12){
    greetMesg = "Good Morning"
}else if(timeGreet > 12 || timeGreet <= 18){
    greetMesg = "Good Afternoon"
}else if(timeGreet > 18 || timeGreet <= 24){
    greetMesg = "Good Evening"
}else{
    greetMesg = "Hello There !"
}



greetCard.innerHTML = 
`
    <b>${greetMesg}</b>  ${timeGreet}:${timeHour}

`;



