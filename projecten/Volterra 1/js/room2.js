console.log ('Hello');
const letterR = 'puzzle2';
const letterO = 'puzzle1';
const letterOO = 'puzzle3';
const letterM = 'puzzle4';

let homeScreen = document.querySelector('.homescreen')
homeScreen.addEventListener('click', returnHomeScreen)

let insertCode = document.querySelector('.insertcode')
insertCode.addEventListener('click',enterTheCode)



function returnHomeScreen () {
    window.location.href = 'index.html'
}

function enterTheCode () {
    enterCode = prompt('Enter your code.');

    if (enterCode == "Room 4004") {
        alert("Correct answer! You have unlocked the door to room 3")
        window.location.href = "room3.html"
    } else {
        alert("Wrong code")
    }
}




