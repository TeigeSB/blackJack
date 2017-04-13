/**
 * Created by h205p3 on 3/30/17.
 */

/** change here
 * Created by h205p3 on 3/8/17.
 */
var button = 0;
var deck = [];
var yourCard = [];
var dealerCard = [];
var dealerResult = "";
var playerResult = "";

function load() {
    shuffle();
    $("#iface").hide();
}

function Card(suit, number) {
    this.suit = suit;
    this.number = number;
    this.isAce = function() {
        // ask user
        // if(answer==1 {
        //     this.number = 1;
        // }
        // this.number = 11;
    }
}

function shuffle() {
    if (deck.length == 0) {
        for (var i = 1; i <= 4; i++) {
            for (var j = 1; j <= 13; j++) {
                deck.push(new Card(i, j));
            }
        }
    }
    //console.log(deck + "deck");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function initialCards() {
    if (button == 0) {
        var yourCards1 = translate(deal());
        var yourCards2 = translate(deal());
        var dealerCards1 = translate(deal());
        var dealerCards2 = translate(deal());
        yourCard.push(yourCards1);
        yourCard.push(yourCards2);
        dealerCard.push(dealerCards1);
        dealerCard.push(dealerCards2);
        console.log(dealerCard);
        console.log(yourCard);
        button++;
        document.getElementById("cards").innerHTML = yourCard + " ";
        document.getElementById("dealer").innerHTML = dealerCard + " ";
    }
}

function hit () {
    var x  = translate(deal());
    console.log(yourCard);
    yourCard.push(x);
    document.getElementById("cards").innerHTML = yourCard + " "
}

function dealerHit() {

}

function deal() {
    var val = getRandomInt(0, (deck.length-1));
    var x = deck[val];
    deck.splice(val, 1);
    return x
}

function check(arr) {
    var val = 0
    for (var i = 0; i < (arr.length - 1); i++) {
        if (arr[i].number == 1) {
            val = 11
            return val
        }
        if (arr[i].number < 10) {
            val = i
            return val
        }
        else {
            val = 10
            return val
        }
    }
}

function translate(input) {
    var x = "";
    var y = 0;
    var arr = [];
    if (input.suit == 1) {
        x = "hearts"
    }
    if (input.suit == 2) {
        x = "diamonds"
    }
    if (input.suit == 3) {
        x = "spades"
    }
    if (input.suit == 4) {
        x = "clubs"
    }
    if (input.number <= 13) {
        y = input.number
    }
    if (input.number <= 26 && input.number > 13) {
        y = (input.number - 13)
    }
    if (input.number <= 39 && input.number > 26) {
        y = (input.number - 26)
    }
    if (input.number <= 52 && input.number > 39) {
        y = (input.number - 39)
    }
    arr.push(x);
    arr.push(y);
    return arr
}

function scoring () {
    console.log(yourCard[0][1]);
    console.log(yourCard[1][1]);
    for (var i = 0; i < 52; i++)
    if (yourCard[i][1] == 1) {
        $("#iface").show();

    }
}

function eleven() {

}