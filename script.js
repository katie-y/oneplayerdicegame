const rollDie = document.querySelector(".roll"); // roll button
let sum = 0; // on going score 
let startingImg = document.querySelector("img");
let rollBtn= document.querySelector("#rollBtn");
let startBtn= document.querySelector("#startBtn");

startingImg.style.visibility = "hidden"; // open page to no image
startBtn.style.display = "none"; // display instead of visibilty to not mess up format


document.querySelector("#name").innerHTML = prompt("What's your name?");



rollDie.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 6 + 1); // generate random num
    let image = document.querySelector("img"); // define image to change
    image.setAttribute("src", `./img/dice${num}.png`); // change image source
    startingImg.style.visibility = "visible"; // show image
    sum += num; // sum up the die scores

    if (num == 1){
        document.getElementById("score").innerHTML = "Sorry you lose"; // losing message if the random num = 1
        document.querySelector("h2").style.visibility = "hidden"; // hides the word score
        sum = 0;
        startBtn.style.display = "block";
        rollBtn.style.display = "none";
    }
    else if (sum > 20){
        document.getElementById("score").innerHTML = `Yay ${sum}! You win!`; // winning message if sum is more than or equal to 20
        document.querySelector("h2").style.visibility = "hidden"; // hides the word score
        sum = 0;
        startBtn.style.display = "block";
        rollBtn.style.display = "none";
    } 
    else {
        document.getElementById("score").innerHTML = sum;  // writes the sum variable inside the score id
    }

})

startBtn.addEventListener("click", () => {
    startBtn.style.display = "none"; // once start again is pressed hides it and shows roll btn
    rollBtn.style.display = "block";
    document.querySelector("h2").style.visibility = "visible"; // shows the word score
}) 
    
