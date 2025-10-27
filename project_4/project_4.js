
let arr3 = [];

let show = [false, false, false, false, false, false, false, false, false, false, false, false];

let arr = [];

let highscore = localStorage.getItem("highscore") || Infinity;

const clicked = document.getElementById("clicks");

// const reset = document.getElementById('reset');

// reset.querySelector('click', ()=> {
//     console.log("eds");
//     highscore = Math.min(highscore, clicks);
//     localStorage.setItem("highscore", highscore);
//     document.getElementById("highscore").innerHTML = "Best Score (Least Clicks): " + (highscore === Infinity ? "N/A" : highscore);
//     clicked.innerHTML = `clicks : 0`;
//     return;
// })

// reset = () => {
//     window.location.reload();
// }

document.getElementById("highscore").innerHTML = "Best Score (Least Clicks): " + (highscore === Infinity ? "N/A" : highscore);

for(let i = 1 ; i <= 6 ; i++){

    const num2 = Math.floor(Math.random() * 12 + 1);
    const num3 = Math.floor(Math.random() * 12 + 1);

    console.log(i + " " + num2 + " " + num3);
    
    if(arr3.includes(num2) || arr3.includes(num3) || num2 === num3){
        i--;
        continue;
    }
    
    arr3.push(num2);
    arr3.push(num3);

    document.getElementById(`${num2}`).innerHTML = `${i}`;
    document.getElementById(`${num3}`).innerHTML = `${i}`;

    arr[num2 -1] = i;
    arr[num3 -1] = i;

}

console.log(arr3);

let clicks = 0;

let pressTillNow = [];

function reveal(num){
    clicks++;

    clicked.innerHTML = `clicks : ${clicks}`;

    console.log(pressTillNow);

    let isMatched = false;

    if(pressTillNow.length % 2 === 1){
        const lastPressed = pressTillNow[pressTillNow.length - 1];
        if(arr[lastPressed] === arr[num]){
            isMatched = true;
            document.getElementById(`${lastPressed+1}`).style.backgroundColor = "lightgreen";        
            document.getElementById(`${num+1}`).style.backgroundColor = "lightgreen";
        }else{
            document.getElementById(`${lastPressed+1}`).style.backgroundColor = "black";        
            document.getElementById(`${num+1}`).style.backgroundColor = "black"; 
            show[lastPressed] = false; 
            show[num] = false; 
            pressTillNow.pop();
            return;      
        }  
    }

    if(!show[num]){
        show[num] = true;
        for(let i = 0 ; i < 12 ; i++){
            if(arr3[i] === num + 1){
                document.getElementById(`${arr3[i]}`).style.backgroundColor = "lightgreen";
            }
        }
        pressTillNow.push(num);
    }

    setTimeout(() => {},
        1000
    );  

    if(pressTillNow.length === 12){
        alert("Game Over! All blocks are revealed." + "\nTotal Clicks: " + clicks);
        highscore = Math.min(highscore, clicks);
        localStorage.setItem("highscore", highscore);
        document.getElementById("highscore").innerHTML = "Best Score (Least Clicks): " + (highscore === Infinity ? "N/A" : highscore);
        return;
    }
}