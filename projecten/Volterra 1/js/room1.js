function puzzleOneAction() {
    alert("Je hebt de letter 'D' gevonden! ... D.")

}

function puzzleTwoAction() {
    alert("Je hebt de letter 'B' gevonden. .... .B")

}
function puzzleThreeAction() {
    alert("Je hebt '2' gevonden. 2... ..")

}
function puzzleFourAction() {
    alert("Je hebt '5' gevonden. .5. ..")

}
function puzzleFiveAction() {
    alert("Je hebt '2' gevonden. ..2. ..")

}
function puzzleSixAction() {
    alert("Je hebt '1' gevonden. ...1 ..")

}

function codeInvoeren() {
    let codeKraken = prompt("Fill in the letters and numbers you have found")
    codeKraken = codeKraken.toUpperCase();

    if (codeKraken === "2521 DB") {
        alert("Code is cracked! Room 2 unlocked")
        window.location.href = "room2.html"
    } else {
        alert("Fout antwoord, probeer opnieuw!")
    }
}

function homeScreen() {
    window.location.href = "index.html"
}