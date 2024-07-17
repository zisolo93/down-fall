const Gborder =document.getElementById("Gborder");
const Gcontext = Gborder.getContext("2d");
const Gacontext = Gborder.getContext("2d");
const Gbcontext = Gborder.getContext("2d");
const Gscore = document.getElementById("Gscore");
const Gover = document.getElementById("Gover");
const pause = document.getElementById("pause");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const l5 = document.getElementById("l5");

const os = document.getElementById("os");
const ohs = document.getElementById("ohs");

const optionm = document.getElementById("optionm");
const exitback = document.getElementById("exitback");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const playAG = document.getElementById("playAG");
const playg = document.getElementById("play");
const newG = document.getElementById("newg");
const option = document.getElementById("option");
const exit = document.getElementById("exit");
const home = document.getElementById("home");

const gscore = document.getElementById("score");
const ghscore = document.getElementById("hscore");
const glevel = document.getElementById("level");

pause.addEventListener("click" ,pauseFun);
playAG.addEventListener("click",newgfun);
playg.addEventListener("click",pauseFun);
newG.addEventListener("click",newgfun);
option.addEventListener("click",optionfun);
exit.addEventListener("click",exitgfun);
home.addEventListener("click",()=>{
   location.assign("E:\\this me\\java script docs\\project93.html")
});

let Gwidth = Gborder.width;
let Gheight = Gborder.height;
let gpause = 0;

let foodWidth = 30;
let foodX=Math.random()*Gwidth-40;
let foodY=0;
let foodX1=Math.random()*Gwidth-40;
let foodY1=0;
let foodX2=Math.random()*Gwidth-40;
let foodY2=0;
let hmd = 0;
let foodspeed = 1;
let eaterspeed = 10;
let foodColor = "cyan";
let level = 1;
let hscore = 53;
let background = "rgba(0, 0, 0, 0.1)";
let interval;
let moveX;

let foodHeight = 30;
let eaterColor = "darkblue";
let borderColor = "black";
let score = 0;
let eater={
    X:230,
    Y:Gheight-30,
    Width:170,
    Height:30
}
window.addEventListener("keydown" ,moveEater);

  
startGame();

function startGame(){
    //gpause=1;
    foodspeed=1;
    nextFood();
    dropFood();
    dropFood1();
    dropFood2();
   gscore.textContent = "SCORE : "+score;
   ghscore.textContent = "H SCORE : "+hscore;
   glevel.textContent = "LEVEL : "+level;
   Gover.style.visibility="hidden";
 
}

function nextFood(){      
       interval = setTimeout(()=>{
        clearBord();
       
        createFood();
        createFood1();
        createFood2();
        creatEater();
        moveFood();
        moveFood1();
        moveFood2();
        levelfun();
        nextFood();
        
        gover();
        
       } ,10);   
}

function dropFood(){
    
    let rand= Math.round(Math.random()*Gwidth);
    if(rand<=5){
        foodX=rand+foodWidth;
    }
    else if(rand>=Gwidth-5){
        foodX=rand-foodWidth;
    }
    foodY=-30;
    createFood();
    
}
function dropFood1(){
 
    foodX1= Math.round(Math.random()*Gwidth);
    
    foodY1=-200;
   
    createFood1();
}
function dropFood2(){
    foodX2= Math.round(Math.random()*Gwidth);
    
    foodY2=-500;
   
    createFood2();
   
}

function createFood(){
   
    
    Gcontext.fillStyle = "cyan";
    Gcontext.strokeStyle = borderColor;
    
    Gcontext.fillRect(foodX,foodY,foodWidth,foodHeight);
    Gcontext.strokeRect(foodX,foodY,foodWidth,foodHeight);
  
         
}
function createFood1(){
   
    
    Gcontext.fillStyle = "red";
    Gcontext.strokeStyle = borderColor;
    
    Gcontext.fillRect(foodX1,foodY1,foodWidth,foodHeight);
    Gcontext.strokeRect(foodX1,foodY1,foodWidth,foodHeight);
  
         
}
function createFood2(){ 
    Gcontext.fillStyle = "green";
    Gcontext.strokeStyle = borderColor;
    Gcontext.fillRect(foodX2,foodY2,foodWidth,foodHeight);
    Gcontext.strokeRect(foodX2,foodY2,foodWidth,foodHeight);        
}
function creatEater(){
    Gcontext.fillStyle = eaterColor;
    Gcontext.strokeStyle = borderColor;
    Gcontext.fillRect(eater.X,eater.Y,eater.Width,eater.Height);
    Gcontext.strokeRect(eater.X,eater.Y,eater.Width,eater.Height);
}
function moveEater(event){
      const keys = event.keyCode;
     const left = 37;
     const right = 39;
     const kpause = 32;
if(gpause==1){
    switch(keys){
        case(left):
                if(eater.X>=0){
                    eater.X-=eaterspeed;
                }
            break;
        case(right):
                if(eater.X<=Gwidth-eater.Width){
                     eater.X+=eaterspeed;
                }
             break;
        
   
      }
}
if(keys==kpause){
      pauseFun();
}
   
}
function clearBord(){
      Gcontext.fillStyle = background;
      Gcontext.fillRect(0,0,Gwidth,Gheight);
      
}
function moveFood(){
    if(gpause==1){
        
        foodY+=foodspeed;  
            if(foodY>Gheight){
                
                dropFood();
                hmd+=1;
                hmdfun();
            }
      
        
            if(foodY==eater.Y+eater.Height){
                console.log("gate");
                if(foodX>=eater.X&&foodX<=eater.X+eater.Width){
                    score+=1;
                    gscore.textContent = "SCORE : "+score;
                    
                 dropFood();
                }
            
        
       }
    }
}
function moveFood1(){
  if(gpause==1){  
    foodY1+=foodspeed;  
   if(foodY1>Gheight){
    
    dropFood1(); 
    hmd+=1;
    hmdfun();
   }
  
    
        if(foodY1==eater.Y+eater.Height){
            console.log("gate");
            if(foodX1>=eater.X&&foodX1<=eater.X+eater.Width){
                score+=1;
                gscore.textContent = "SCORE : "+score;                
             dropFood1();
            }
        
    
   }
}
else{
    Gcontext.font="50px MV Boli";
            Gcontext.fillStyle="yellow";
            Gcontext.textAlign="center";
            Gcontext.fillText("GAME PAUSED!!!" ,Gwidth/2 , Gheight/2);
}
}
function moveFood2(){
  if(gpause==1){  
    foodY2+=foodspeed;  
   if(foodY2>Gheight){
    
    dropFood2(); 
    hmd+=1;
    hmdfun();
   
   }
  
    
        if(foodY2==eater.Y+eater.Height){
            console.log("gate");
            if(foodX2>=eater.X&&foodX2<=eater.X+eater.Width){
                score+=1;
                gscore.textContent = "SCORE : "+score;            
                 dropFood2();
            }
        
    
   }
}
}

function pauseFun(){
    switch (gpause){
        case 0:
            gpause=1;
            moveFood();
            moveFood1();
            moveFood2();
            pause.style.visibility="visible";
            playg.style.visibility="hidden";
            
          
            break;
        case 1:
            gpause=0;
            moveFood();
            moveFood1();
            moveFood2();
            pause.style.visibility="hidden";
            playg.style.visibility="visible";
           
           

            break;
    }
}
function hmdfun(){
    switch(hmd){
        case 1:
            l1.style.visibility="hidden";
            break;
         
         case 2:
            l2.style.visibility="hidden";
            break;
         
         case 3:
            l3.style.visibility="hidden";
            break;
         
         case 4:
            l4.style.visibility="hidden";
            break;
         
         case 5:
            l5.style.visibility="hidden";
            break;
        case 6:
            gover;
            break;
        
         } 
}
function newgfun(){
    score=0;
    level=1;
    foodspeed=1;
    foodX=Math.random()*Gwidth-40;
   
     foodY=0;
     foodX1=Math.random()*Gwidth-40;
     foodY1=0;
     foodX2=Math.random()*Gwidth-40;
     foodY2=0;
     hmd = 0;
     
     l1.style.visibility="visible";
     l2.style.visibility="visible";
     l3.style.visibility="visible";
     l4.style.visibility="visible";
     l5.style.visibility="visible";
    
    dropFood();
    dropFood1();
    dropFood2();
   gscore.textContent = "SCORE : "+score;
   ghscore.textContent = "H SCORE : "+hscore;
   glevel.textContent = "LEVEL : "+level;
   Gover.style.visibility="hidden";
   pause=0;
   pauseFun();

     
}

function optionfun(){

}

function exitgfun(){
    
}
function levelfun(){
    if(score>10){
        foodspeed=1.5;
        eaterspeed=6;
        level=2;
        glevel.textContent = "LEVEL : "+level;

    }
    if(score>20){
        foodspeed=2;
        eaterspeed=7;
        level=3;
        glevel.textContent = "LEVEL : "+level;

    }
    if(score>30){
        foodspeed=2.5;
        eaterspeed=8;
        level=4;
        glevel.textContent = "LEVEL : "+level;


    }
    if(score>40){
        foodspeed=5;
        eaterspeed=9;
        level=5;
        glevel.textContent = "LEVEL : "+level;


    }
    if(score>50){
        foodspeed=6;
        eaterspeed=10;
        level=6;
        glevel.textContent = "LEVEL : "+level;


    }
    
}
function gover(){
    if(hmd>5){
    gpause=0;
    Gover.style.visibility="visible";
    os.textContent =score;
    ohs.textContent = hscore;
    
    }
}

exit.addEventListener("click",exitgfun);
yes.addEventListener("click",()=>{
    window.close();
});
no.addEventListener("click",()=>{
    exitback.style.display="none";
});
option.addEventListener("click",()=>{
    gpause=0;
    optionm.style.display="block";
});

optionm.addEventListener("dblclick",()=>{
    optionm.style.display="none";
});
function exitgfun(){
    gpause=0;
    exitback.style.display="block";
}