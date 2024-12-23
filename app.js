let heartIcon=document.getElementById("heart")

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;

}

const iter = makeRangeIterator(1, 4, 1);

let result = iter.next();

while (!result.done) {
         let heart=document.createElement("div")
    heart.innerHTML=`<span style="color: red; font-size: 24px;">&#9829;</span>`
    
   heartIcon.appendChild(heart)
    result = iter.next();
}

let random= Math.floor(Math.random()*11)
 

 let live=3

function submit(){
       
            let guessInput = document.getElementById("guess").value;
            let dicision= document.getElementById("dicision")
         // Get user input
        if(guessInput=== ""){
            alert("Please enter a number")
        }
        else  if (guessInput === random) {
                 dicision.innerHTML=`Congratulation you win `
            } 
            else {
                live--; // Decrease lives
                heartIcon.removeChild(heartIcon.lastChild); // Remove one heart
                if (live > 0) {
                       dicision.innerHTML=`Please Try Agrain  `
                } else {
                     dicision.innerHTML=`You have no more lives....<br> The random number is:${random}`
                }

                   
            }
       guessInput.valu
       
}