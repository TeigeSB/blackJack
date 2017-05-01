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
var dealerResult = 0;
var playerResult = 0;
var arr01= [];

function load() {
    shuffle();
    $("#iface").hide();
    $("#hit").hide();
}

function Card(suit, number) {
    this.suit = suit;
    this.number = number;

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
        //var yourCards2 = translate(deal());
        var dealerCards1 = translate(deal());
        //var dealerCards2 = translate(deal());
        yourCard.push(yourCards1);
        //yourCard.push(yourCards2);
        dealerCard.push(dealerCards1);
        //dealerCard.push(dealerCards2);
        console.log(dealerCard);
        console.log(yourCard);
        button++;
        document.getElementById("cards").innerHTML = yourCard + " ";
        document.getElementById("dealer").innerHTML = dealerCard + " ";
        $("#hit").show();
        scoring()
    } else if (button == 1) {
        location.reload()
    }
}

function hit () {
    var x  = translate(deal());
    console.log(yourCard);
    //yourCard.push(x);
    console.log(yourCard);
    document.getElementById("cards").innerHTML = yourCard + " ";
    scoring();
    showCard(arr01[0],arr01[1],0);
    showCard(arr01[0],arr01[1],0)
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
    var val = 0;
    for (var i = 0; i < (arr.length - 1); i++) {
        if (arr[i].number == 1) {
            val = 11;
            return val
        }
        if (arr[i].number < 10) {
            val = i;
            return val
        }
        else {
            val = 10;
            return val
        }
    }
}

function translate(input) {
    var x = "";
    var y = 0;
    if (input.suit == 1) {
        x = "H"
    }
    if (input.suit == 2) {
        x = "D"
    }
    if (input.suit == 3) {
        x = "S"
    }
    if (input.suit == 4) {
        x = "C"
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
    arr01.push(x);
    arr01.push(y);
    console.log(arr01)
    return arr01
}

function load1 () {
    console.log(yourCard[0][0]);
    console.log(yourCard[0][1]);
    console.log(yourCard[0][2]);
    console.log(yourCard[0][3]);
        showCard(arr01[0][0], arr01[0][1])
    showCard(arr01[0][2], arr01[0][3])

}

function scoring () {

    for (var i = 0; i < 52; i++)
        if (yourCard[i][1] == 1) {
            $("#iface").show();

        }
}

function eleven() {
    playerResult += 11;
    $("#iface").hide();
}

function one() {
    $("#iface").hide();
}

function showCard(suit, number, card) {
    var img1 = "https://deckofcardsapi.com/static/img/.png";
    img1 = "https://deckofcardsapi.com/static/img/" + number + suit + ".png";
            showImage(img1);
}

function showImage(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 150;
    img.height = 200;
    document.body.appendChild(img);
}