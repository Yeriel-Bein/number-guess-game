// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 랜덤번호가 < 유저번호 Down!!
// 랜던번호가 > 유저번호 up!!
// reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼이 disable)
// 유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.

let couputerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetbutton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chancesArea = document.getElementById("chances-area");
let history = [];

playButton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ""})

function pickRandomNum(){
    couputerNum = Math.floor(Math.random()*100)+1;
    console.log("정답!", couputerNum);
}

function play(){
    let userValue = userInput.value;

    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요.";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다시 입력해주세요."
        return;
    }

    chances -- ;
    chancesArea.textContent = `남은 기회 : ${chances}번`;
    console.log("chances : ", chances);


    if(couputerNum<userValue){
        resultArea.textContent = "Down!!!";
    }else if(couputerNum>userValue){
        resultArea.textContent = "Up!!!";
    }else{
        resultArea.textContent = "맞추셨습니다!!!";
        gameOver = true;
    }

    history .push(userValue);
    console.log(history);

    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    // user input 창이 깨끗하게 정리가 되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();
    // resultArea 값이 리셋되도록 하는 것
    resultArea.textContent = "결과값이 여기 나옵니다.";
    // go버튼이 활성화 되게
    playButton.disabled = false;
}



pickRandomNum()