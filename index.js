var randomeNumber1 = Math.ceil(Math.random() * 6);
var randomeNumber2 = Math.ceil(Math.random() * 6);

document.querySelector('img').setAttribute('src',`images/dice${randomeNumber1}.png`);
document.querySelector('.dice .img2').setAttribute('src',`images/dice${randomeNumber2}.png`);

function displayWinner() {
    if(randomeNumber1 > randomeNumber2){
        return document.querySelector('h1').innerText = 'Player 1 Wins!'
    }
    if(randomeNumber2 > randomeNumber1){
        return document.querySelector('h1').innerText = 'Player 2 Wins!'
    }
    else{
        return document.querySelector('h1').innerText = 'Draw!'
    }
}

displayWinner();