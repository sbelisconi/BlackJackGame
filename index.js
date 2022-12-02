let player = {
    name: "Sylvester",
    chip: 150
}
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
console.log(cardEl)
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
//console.log(message)
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    //CashOut
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        console.log("Drawing a new card from the deck")
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
