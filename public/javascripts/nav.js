(function () { 
var navList;
var navLink;
var navInfo;
var color;

navList = [
    "Maths",
    "English",
    "Chemistry",
    "Physics",
    "Account",
    "Government",
    "Biology"
];
navLink = [
    '/maths',
    "/english",
    "/chemistry",
    "/physics",
    "/account",
    "/government",
    '/biology'
];
navInfo = [
    "Practice your skills on Mathematics with a lot of questions right here for you",
    "Test your skills on English Language to be prepared for your exams",
    "Practice your skills on Chemistry with a lot of chemical equations and formulas to derive",
    "Show your skills on physics quesions and calculations",
    "Test your skills on Account to prepare you for your exams",
    "Test your knowledge on Goverment",
    "Practice your skills in biology plants and animals"
];

color = [
    "red",
    "black",
    "blue",
    "yellow",
    "green",
    "pink",
    "teal"
]

for(let i = 0; i <= navList.length - 1; i++){
   let outputs = `
                <div class="col s12 m6 l4">
                  <div class='practice-box'>
                    <div class='practice-box-title  ${color[i]} darken-4'>
                        <span><i class='fas fa-book-open'></i></span>
                        <span class='right'>60min</span>
                    </div>
                    <div class='practice-box-content'>
                            <span class='practice content title'>
                                <h4>${navList[i]}</h4>
                            </span>
                            <div>
                            <span>${navInfo[i]}</span>
                            <div class='practice-link'>
                                <a class='waves-effect waves-light btn ${color[i]} darken-4' href='/practice${navLink[i]}'>${navList[i]}</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
   document.getElementById("subject-choices").innerHTML += outputs;
}
})();