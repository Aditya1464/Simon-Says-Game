let game = document.querySelector('.container');
let startBtn = game.querySelector('.start');
let yellowBtn = game.querySelector('.btn1');
let redBtn = game.querySelector('.btn2');
let blueBtn = game.querySelector('.btn3');
let greenBtn = game.querySelector('.btn4');
let h1 = game.querySelector('h1');
let heighest = game.querySelector('.heighest');
let current = game.querySelector('.curr');
let clickSound = game.querySelector('#clickSound');
let audio = game.querySelector('#audio');
let endBtn = game.querySelector('.end button');

let arrayColor = [];
let count = 0;
let heighestScore = 0;
let isStart = true;
let level = 0;


startBtn.addEventListener('click', function(){
    audio.play();
    if(isStart){
        startBtn.innerText = "QUIT";
        startGame();
        isStart = false;
    }
    else{
        h1.innerText = "Press 'Start' Button to Start";
        heighest.innerText = `Heighest Score : 0`; 
        level = 0;
        current.innerText = `Current Score : ${0}`;
        heighestScore = 0;
        startBtn.innerText = "START";
        arrayColor = [];
        isStart = true;
        count = 0;
    }
})


function blink(){
    return new Promise(resolve => setTimeout(resolve , 1000));
}


async function startGame(){
    level++;

    h1.innerText = `LEVEL : ${level}`; 

    arrayColor = [];
    count = 0;

    let guessNo = Math.floor(Math.random()*level) + 1;

    console.log(guessNo);

    for(let i=0; i<guessNo; i++){
        let guessRandomIndex = Math.floor(Math.random()*4);

        console.log(guessRandomIndex);

        if(guessRandomIndex == 0){
            console.log('yellow');
            arrayColor.push(1);
            yellowBtn.style.backgroundColor = 'black';
            setTimeout(function(){
                yellowBtn.style.backgroundColor = '#A3DB24';
            }, 80);
            await blink();
        }
        else if(guessRandomIndex == 1){
            console.log('red');
            arrayColor.push(2)
            redBtn.style.backgroundColor = 'black';
            setTimeout(function(){
                redBtn.style.backgroundColor = '#DB2447';
            }, 80)
            await blink();
            
        }
        else if(guessRandomIndex == 2){
            console.log('blue');
            arrayColor.push(3);
            blueBtn.style.backgroundColor = 'black';
            setTimeout(function(){
                blueBtn.style.backgroundColor = '#5C24DB';
            }, 80)
            await blink();
            
        }
        else{
            console.log('green');
            arrayColor.push(4);
            greenBtn.style.backgroundColor = 'black';
            setTimeout(function(){
                greenBtn.style.backgroundColor = '#24DBB8';
            }, 80)
            await blink();
            
        }

    }

    count = 0;
    current.innerText = `Current Score : ${level-1}`;
}

function endGame(){
    endBtn.parentElement.style.visibility = 'visible';
    startBtn.innerText = "RE-START";
    h1.innerText = "Press 'Re-Start' Button to Start";
    if(level-1 > heighestScore){
        heighest.innerText = `Heighest Score : ${level-1}`;
        heighestScore = level-1;
    }
    current.innerText = `Current Score : ${0}`;
    level = 1;
    isStart = true;
    console.log('endgame');
    arrayColor = [];
    count = 0;
}

yellowBtn.addEventListener('click',async function(){
    audio.play();
    yellowBtn.style.backgroundColor = 'black';
    setTimeout(function(){
        yellowBtn.style.backgroundColor = '#A3DB24';
    }, 80);
    await blink();

    if(arrayColor[count] != 1){
        endGame();
    }
    else{
        count++;

        if(count == arrayColor.length){
            // startGame();
            setTimeout(startGame, 500)
        }
    }

})

redBtn.addEventListener('click',async function(){
    audio.play();
    redBtn.style.backgroundColor = 'black';
    setTimeout(function(){
        redBtn.style.backgroundColor = '#DB2447';
    }, 80);
    await blink();

    if(arrayColor[count] != 2){
        endGame();
    }
    else{
        count++;

        if(count == arrayColor.length){
            // startGame();
            setTimeout(startGame, 500)
        }
    }
})

blueBtn.addEventListener('click',async function(){
    audio.play();
    blueBtn.style.backgroundColor = 'black';
    setTimeout(function(){
        blueBtn.style.backgroundColor = '#5C24DB';
    }, 80);
    await blink();

    if(arrayColor[count] != 3){
        endGame();
    }
    else{
        count++;

        if(count == arrayColor.length){
            // startGame();
            setTimeout(startGame, 500)
        }
    }
})

greenBtn.addEventListener('click',async function(){
    audio.play();
    greenBtn.style.backgroundColor = 'black';
    setTimeout(function(){
        greenBtn.style.backgroundColor = '#24DBB8';
    }, 80);
    await blink();

    if(arrayColor[count] != 4){
        endGame();
    }
    else{
        count++;

        if(count == arrayColor.length){
            // startGame();
            setTimeout(startGame, 500)
        }
    }
})

endBtn.addEventListener('click', function(){
    endBtn.parentElement.style.visibility = 'hidden';
})