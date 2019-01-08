function call(question, options, info, answer){
    return new Question(question, options, info, answer);
}

function randomIndexes(){
    return  Math.floor(Math.random() * 6)+1;
}

function totalQuestion(){
    return questions.length;
}


var questions = [
    new Question("Chemistry ?", ["PHP", "Python", "Javascript", "All"], "All"),
];