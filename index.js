function showWinner(){
    document.querySelector('.roll-button').addEventListener('click', function(){
        
        var randomeNumber1 = Math.ceil(Math.random() * 6);
        var randomeNumber2 = Math.ceil(Math.random() * 6);

        document.querySelector('.dice .img1').setAttribute('src',`images/dice/dice${randomeNumber1}.png`);
        document.querySelector('.dice .img2').setAttribute('src',`images/dice/dice${randomeNumber2}.png`);

        if(randomeNumber1 > randomeNumber2){
            document.querySelector('.face-container1 img').setAttribute('src', 'images/faces/face2.png');
            document.querySelector('.face-container2 img').setAttribute('src', 'images/faces/face3.png');
            return document.querySelector('h1').innerText = 'Player 1 Wins!'
        }
        if(randomeNumber2 > randomeNumber1){
            document.querySelector('.face-container1 img').setAttribute('src', 'images/faces/face3.png');
            document.querySelector('.face-container2 img').setAttribute('src', 'images/faces/face2.png');
            return document.querySelector('h1').innerText = 'Player 2 Wins!'
        }
        else{
            document.querySelector('.face-container1 img').setAttribute('src', 'images/faces/face4.png');
            document.querySelector('.face-container2 img').setAttribute('src', 'images/faces/face4.png');
            return document.querySelector('h1').innerText = 'Draw!'
        }
    })
}

showWinner();