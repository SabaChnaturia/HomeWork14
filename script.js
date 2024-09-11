let score = prompt("ჩაწერეთ თქვენს მიერ აღებული ქულა");
let name = prompt("მიუთითეთ თქვენი სახელი");

function getFeedback(score, name){
    if (score < 51){
        console.log(`სამწუხარდ ${name}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვემ დაგაკლდათ ${51-score} ქულა, უკეთესად მოემზადეთ,`);
    }
    else if(score>=51 && score<=90){
        console.log(`გილოცავთ ${name}, თქვენ ${score-51} ქულით მეტი აიღეთ ბარიერზე,`);
    }
    else if(score>90){
        console.log(`გილოცავთ, ძალიან კარგი ქულა აიღეთ,`);
    }
}

getFeedback(score, name);