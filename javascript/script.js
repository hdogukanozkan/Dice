var x = ["images/dice1.png", "images/dice2.png",
    "images/dice3.png", "images/dice4.png", "images/dice5.png",
    "images/dice6.png"
];

function randomsayi() {
    var rand = Math.random();
    rand = Math.floor(rand * 6);
    return rand;
}

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

function bas() {
    var sayi1 = randomsayi();
    image1.setAttribute("src", x[sayi1]);
    var sayi2 = randomsayi();
    image2.setAttribute("src", x[sayi2]);


    var header = document.querySelector("h1");

    if (sayi1 > sayi2) {
        header.innerHTML = ("Player 1 wins!");
    } else if (sayi2 > sayi1) {
        header.innerHTML = ("Player 2 wins!");
    } else {
        header.innerHTML = ("Draw");
    }
}