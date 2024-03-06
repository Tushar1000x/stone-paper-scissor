

const button1=document.getElementById('r1');
const button2=document.getElementById('s2');
const button3=document.getElementById('p3');
let v;

const mslt=document.getElementById('meSlct');
const pcslt=document.getElementById('PcSlct');
const resultwin=document.getElementById('resultWin');
 var Pcscore=document.getElementById('s12');
 var Myscore=document.getElementById('s11');
var mcr=0;
var pcr=0;
 
var rockURL = 'url("rock.png")';
var scissorURL = 'url("scissor.png")';
var paperURL='url("paper.png")';
var resultDiv = document.getElementById('result');
var h1Tag = resultDiv.querySelector('h1');

var playagain=document.getElementById('playAgain');


 console.log("1212");
//rock1 //scissor2 //paper3
playagain.onclick=function(){
resultwin.style.visibility='hidden';
keys.style.display='block';
}


button1.addEventListener('click',function(){
    v=1;
    hide(keys);
    var randm=generateRandomNumber();
    console.log(randm);
    switch (randm) {
        case 1:
mslt.style.backgroundImage = rockURL;
pcslt.style.backgroundImage=rockURL;
h1Tag.textContent ="TIE UP";
     break;


     case 2:
          mslt.style.backgroundImage = rockURL;
          pcslt.style.backgroundImage=scissorURL;
          h1Tag.textContent = "YOU WIN";
mcr++;
Myscore.innerHTML=mcr;
          // code block to execute if expression equals value2
          break;
        // Add more cases as needed
        case 3:
          mslt.style.backgroundImage = rockURL;
          pcslt.style.backgroundImage=paperURL;
h1Tag.textContent = "YOU LOSS";
pcr++;
Pcscore.innerHTML=pcr;
          break;
        }
        resultwin.style.visibility='visible';
    console.log("v");
});


//scissor
button2.addEventListener('click',function(){
    v=2;
    hide(keys);
    var randm=generateRandomNumber();
    console.log(randm);
    switch (randm) {
        case 1:
mslt.style.backgroundImage = scissorURL;
pcslt.style.backgroundImage=rockURL;
h1Tag.textContent = "YOU LOSS";

pcr++;
Pcscore.innerHTML=pcr;

break;
        case 2:
          mslt.style.backgroundImage = scissorURL;
          pcslt.style.backgroundImage=scissorURL;
          h1Tag.textContent = "TIE UP";
          // code block to execute if expression equals value2
          break;
        // Add more cases as needed
        case 3:
          mslt.style.backgroundImage = scissorURL;
pcslt.style.backgroundImage=paperURL;
h1Tag.textContent = "YOU WIN";

mcr++;
Myscore.innerHTML=mcr;


break;
        }
        resultwin.style.visibility='visible';
   
    
    console.log("2");
});
button3.addEventListener('click',function(){
    v=3;
    hide(keys);
    var randm=generateRandomNumber();
    console.log(randm);
    switch (randm) {
        case 1:
mslt.style.backgroundImage = paperURL;
pcslt.style.backgroundImage=rockURL;
h1Tag.textContent = "YOU WIN";
mcr++;
Myscore.innerHTML=mcr;


break;
        case 2:
          mslt.style.backgroundImage = paperURL;
          pcslt.style.backgroundImage=scissorURL;
          h1Tag.textContent = "YOU LOSS";
          pcr++;
          Pcscore.innerHTML=pcr;
          
          break;
        // Add more cases as needed
        case 3:
          mslt.style.backgroundImage = paperURL;
pcslt.style.backgroundImage=paperURL;
h1Tag.textContent = "TIE UP";          
break;
        }
        resultwin.style.visibility='visible';
    console.log("3");
});



const rules=document.getElementById("rules");
const overlay=document.getElementById("overlay");
const close=document.getElementById("clos");

rules.onclick=function(){
    overlay.style.display='Block';
    rules.style.display='none';
}
close.onclick=function(){
    overlay.style.display='none';
    rules.style.display='Block';

}
window.onclick=function(e){
    if(e.target==overlay){
    overlay.style.display='none';
    rules.style.display='Block';
}}


const keys=document.getElementById('abc');
const scissor=document.getElementById('s2');
const papper=document.getElementById('p3');

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}


function hide(k){
k.style.display='none';
};

var nxt=document.getElementById('next');
next.onclick=function(){
 window.location.href='hurray.html';
};



