function changeText(){
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"]
    var colourArray = ["red-text", "green-text", "blue-text", "white-text", "black-text"]
    var alignArray = ["right-align","center-align","left-align"]
    var number = getRandomNumberBetween(0,textsArray.length - 1)
    var alignNum = getRandomNumberBetween(0,alignArray.length - 1)
    console.log("Index: ",number)
    document.getElementById("heading").innerHTML = 'SIT725 ' + textsArray[number] + " number=" + number
    //Change the elements colour and alignment based on random number chose above
    document.getElementById("heading").setAttribute("class",alignArray[alignNum] + " " + colourArray[number])
    //Enable the "change background" number when number is even, disable when odd
    if (number%2!=0){
        document.getElementById("btn2").setAttribute("class","btn disabled");
    } else {
        document.getElementById("btn2").setAttribute("class","waves-effect waves-light btn pulse");
    };
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function changeBackground(){
    //This function will change the card panel colour and then call the changeText function
    var bgArray = ["card-panel purple darken-3","card-panel green darken-3","card-panel grey darken-3"]
    var bgNum = getRandomNumberBetween(0,bgArray.length-1)
    document.getElementById("cardPanel1").setAttribute("class",bgArray[bgNum])
    changeText();
}