var cards =[
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage:  "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage:"images/king-of-diamonds.png"
}
];





var cardsInPlay = [];


var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src',cards[cardId].cardImage);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    checkForMatch();
};

var checkForMatch = function(){
	if(cardsInPlay.length ===2) {
	  if (cardsInPlay[0]===cardsInPlay[1]) {
	  	setTimeout(function(){ alert("You found a match!"); }, 100);
	  } else
	     setTimeout(function(){ alert("Sorry, try again"); }, 100);
	}
};

//function to create game board
var createBoard = function(){
	for (var i = 0; i <cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

//reset game
var restart =function() {
	location.href = ""
}


createBoard();

