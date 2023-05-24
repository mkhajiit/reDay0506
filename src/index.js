const NUM_FORM = document.querySelector("#number-form");
const INPUT_MAX_NUM = document.querySelector("#max_number");
const INPUT_GUESS_NUM = document.querySelector("#guess_number");
const CONTENT = document.getElementById('content');
const CONTENT2 = document.getElementById('content2');

function EventHandler(event){
    event.preventDefault();
    const maxNum = INPUT_MAX_NUM.value;
    const guessNum = INPUT_GUESS_NUM.value;
    const MaxNumber = parseInt(maxNum);
    const GuessNumber = parseInt(guessNum);
    const RANDOM_NUMBER = Math.ceil(Math.random()*MaxNumber);
    // localStorage.setItem("MaxNumber",MaxNumber); //실시간으로 범위값 localStorage에 업데이트
    if (maxNum === "" && guessNum === "") {
        CONTENT2.innerText = "";
        CONTENT.style.color = "red";
        CONTENT.innerHTML = "<strong>Please select Number!</strong>";
        return;
    }

    CONTENT.style.color = "black";
    CONTENT.innerHTML ="You chose:"+GuessNumber+", the machine chose:"+RANDOM_NUMBER+".";

        if(GuessNumber === RANDOM_NUMBER){
            CONTENT2.innerHTML ="<strong>You won!</strong>";
        }else{
            CONTENT2.innerHTML ="<strong>You lost!</strong>";
        }
    
}   

NUM_FORM.addEventListener("submit", EventHandler);

