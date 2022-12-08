let keypad = document.querySelector(".keypad")
let puzzle1 = document.querySelector(".puzzle1")
let puzzle2 = document.querySelector(".puzzle2")
let puzzle3 = document.querySelector(".puzzle3")
let puzzle4 = document.querySelector(".puzzle4")

keypad.addEventListener("click", keypadAction)
puzzle1.addEventListener("click", puzzle1Action)
puzzle2.addEventListener("click", puzzle2Action)
puzzle3.addEventListener("click", puzzle3Action)
puzzle4.addEventListener("click", puzzle4Action)

function keypadAction() {

    let result = prompt("Fill in a code")
    result = result.toUpperCase();

    if (result == "EXIT7483A") {
        window.location.href = "exit.html"
    } else {
        alert("Wrong! Try again")
    }

}

function puzzle1Action() {

    let result = prompt("What is a door that leads to leaving a building called?")
    result = result.toUpperCase();

    if (result == "EXIT") {
        alert("Code is cracked! The answer is EXIT")
    } else {
        alert("Wrong! Try again")
    }

}

function puzzle2Action() {
    
    let result = prompt("Mahatma Gandhi was murdered in 1948. How many years ago did this happen?")

    if (result == "74") {
        alert("Code is cracked! The answer is 74")
    } else {
        alert("Wrong! Try again")
    }

}

function puzzle3Action() {
    
    let result = prompt("What is 46 + 37?")

    if (result == "83") {
        alert("Code is cracked! The answer is 83")
    } else {
        alert("Wrong! Try again")
    }

}

function puzzle4Action() {
 
    let result = prompt("Which letter can you form with 3 sticks?")
    result = result.toUpperCase();

    if (result == "A") {
        alert("Code is cracked! The answer is 83")
    } else {
        alert("Wrong! Try again")
    }

}