const NUM_FORM = document.querySelector("#number-form");
const INPUT_MAX_NUM = document.querySelector("#max_number");
const INPUT_GUESS_NUM = document.querySelector("#guess_number");
const CONTENT = document.getElementById('content');
const CONTENT2 = document.getElementById('content2');

function EventHandler(event){
    event.preventDefault();
    const MaxNumber = parseInt(INPUT_MAX_NUM.value);
    localStorage.setItem("MaxNumber",MaxNumber); //실시간으로 범위값 localStorage에 업데이트

    const GuessNumber = parseInt(INPUT_GUESS_NUM.value);
    const RANDOM_NUMBER = Math.ceil(Math.random()*MaxNumber);

    console.log("You chose:"+GuessNumber);
    console.log("machine chose:"+RANDOM_NUMBER);

    CONTENT.innerHTML ="You chose:"+GuessNumber+", the machine chose:"+RANDOM_NUMBER+".";

    if(GuessNumber === RANDOM_NUMBER){
        CONTENT2.innerHTML ="You won!";
    }else{
        CONTENT2.innerHTML ="You lost!";
    }
    
}   

NUM_FORM.addEventListener("submit", EventHandler);

