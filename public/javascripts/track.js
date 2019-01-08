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
        "Goverment",
        "Goverment",
    ];
    navLink = [
        '/math',
        "/english",
        "/chemistry",
        "/physics",
        "/account",
        "/goverment",
    ];
    navInfo = [
        "Practice your skills on Mathematics with a lot of questions right here for you",
        "Test your skills on English Language to be prepared for your exams",
        "Practice your skills on Chemistry with a lot of chemical equations and formulas to derive",
        "Show your skills on physics quesions and calculations",
        "Test your skills on Account to prepare you for your exams",
        "Test your knowledge on Goverment",
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

    for (var i = 0, j = navInfo.length; i <= j - 1; i++) {
        var outButtons = `
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
                                    <a class='waves-effect waves-light btn ${color[i]} darken-4' href='/track${navLink[i]}'>${navList[i]}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    `
        document.getElementById("track-choices").innerHTML += outButtons;
    }
})();