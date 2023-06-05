
// no clue but cant delete 
var click = document.getElementById("butto").addEventListener("click",move );
var move = document.getElementById("butto");
var stkimg = document.getElementById("stackmove"), horpos = 0;
horpos = 1;
let verpos = 0;

var clickstack = document.getElementById("stackmove").addEventListener("click",drawcard);
var player1 = [];

// stack of cards
//speads
var s2 = [document.getElementById("sp2"), 2];
var s3 = [document.getElementById("sp3"), 3];
var s4 = [document.getElementById("sp4"), 4];
var s5 = [document.getElementById("sp5"), 5];
var s6 = [document.getElementById("sp6"), 6];
var s7 = [document.getElementById("sp7"), 7];
var s8 = [document.getElementById("sp8"), 8];
var s9 = [document.getElementById("sp9"), 9];
var s10 = [document.getElementById("sp10"), 10];
var sJ = [document.getElementById("spJ"), 11];
var sQ = [document.getElementById("spQ"), 12];
var sK = [document.getElementById("spK"), 13];
var sA = [document.getElementById("stack"), 14];

//hearts
var h2 = [document.getElementById("ha2"), 2];
var h3 = [document.getElementById("ha3"), 3];
var h4 = [document.getElementById("ha4"), 4];
var h5 = [document.getElementById("ha5"), 5];
var h6 = [document.getElementById("ha6"), 6];
var h7 = [document.getElementById("ha7"), 7];
var h8 = [document.getElementById("ha8"), 8];
var h9 = [document.getElementById("ha9"), 9];
var h10 = [document.getElementById("ha10"), 10];
var hJ = [document.getElementById("haJ"), 11];
var hQ = [document.getElementById("haQ"), 12];
var hK = [document.getElementById("haK"), 13];
var hA = [document.getElementById("haA"), 14];

//diamond
var d2 = [document.getElementById("di2"), 2];
var d3 = [document.getElementById("di3"), 3];
var d4 = [document.getElementById("di4"), 4];
var d5 = [document.getElementById("di5"), 5];
var d6 = [document.getElementById("di6"), 6];
var d7 = [document.getElementById("di7"), 7];
var d8 = [document.getElementById("di8"), 8];
var d9 = [document.getElementById("di9"), 9];
var d10 = [document.getElementById("di10"), 10];
var dJ = [document.getElementById("diJ"), 11];
var dQ = [document.getElementById("diQ"), 12];
var dK = [document.getElementById("diK"), 13];
var dA = [document.getElementById("diA"), 14];

//club
var c2 = [document.getElementById("cl2"), 2];
var c3 = [document.getElementById("cl3"), 3];
var c4 = [document.getElementById("cl4"), 4];
var c5 = [document.getElementById("cl5"), 5];
var c6 = [document.getElementById("cl6"), 6];
var c7 = [document.getElementById("cl7"), 7];
var c8 = [document.getElementById("cl8"), 8];
var c9 = [document.getElementById("cl9"), 9];
var c10 = [document.getElementById("cl10"), 10];
var cJ = [document.getElementById("clJ"), 11];
var cQ = [document.getElementById("clQ"), 12];
var cK = [document.getElementById("clK"), 13];
var cA = [document.getElementById("clA"), 14];

var ace = [document.getElementById("cardfront"), 2];

// array with temp cards 
let tempcards = [s2,s3];
/*
    
*/

// array of cards
let cardpack =[
    s2,s3,s4,s5,s6,s7,s8,s9,s10,sJ,sQ,sK,sA,
    h2,h3,h4,h5,h6,h7,h8,h9,h10,hJ,hQ,hK,hA,
    d2,d3,d4,d5,d6,d7,d8,d9,d10,dJ,dQ,dK,dA,
    c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,cA
];

let stack = 
[1,2,3,4,5,6,7,8,9];

// the actual working random card picker
var cardpick;


//working randpm picker 
var temprandcardpick;


var temphorpos = 1000; 
var rotate = 0;
var fspin = 90;
var bspin = 0;

 function cardDistribute() {

    var i = 0;
    while(i <= 4){
        
        var randpick = cardpack[Math.floor(Math.random()*cardpack.length)];
        console.log(randpick);

        const tkout = stack.indexOf(randpick);
        if (tkout > -1) { // only splice array when item is found
            stack.splice(tkout, 1); // 2nd parameter means remove one item only
        }

        var mytimer = setInterval(function()
        {
            horpos++;
            verpos++;
            if(horpos <= 400){
                player1[0].at(0).style.left= horpos + "px";
                player1[0].at(0).style.top= verpos + "px";
            }
            else if(horpos >= 400){

                clearInterval(mytimer);
                var mybspin = setInterval(function()
                {
                    bspin++;
                    stkimg.style.transform = 'rotateY('+ bspin +'deg)';
                    if(bspin >= 89){
                        clearInterval(mybspin);
                        bspin = 89;  
            
                        var myfspin = setInterval(function()
                        {
                            fspin--;
                            randpick.at(0).style.transform = 'rotateY('+ fspin +'deg)';
                            randpick.at(0).style.left= horpos + "px";
                            if(fspin <= 0){
                                clearInterval(myfspin);
                                fspin = 0;  
        
                                if (fspin <= 2){
                                    horpos = 1;
                                    stkimg.style.left = horpos + "px";
                                    stkimg.style.transform = 'rotateY(0deg)';
                                }
                            };
                        },2);
                    };        
                },2);
            }           
        },4);
        
        
        return randpick
    }
};

function mechanics(){
    let now1 = 200, now2 = 400, now3 = 600, now4 = 800;
    let toppos = 300;
    //left
    player1[0].at(0).style.left= now1 + "px";
    player1[1].at(0).style.left= now2 + "px";
    player1[2].at(0).style.left= now3 + "px";
    player1[3].at(0).style.left= now4 + "px";

    //top
    player1[0].at(0).style.top= toppos + "px";
    player1[1].at(0).style.top= toppos + "px";
    player1[2].at(0).style.top= toppos + "px";
    player1[3].at(0).style.top= toppos + "px";

    //height
    player1[0].at(0).style.height= "160px";
    player1[1].at(0).style.height= "160px";
    player1[2].at(0).style.height= "160px";
    player1[3].at(0).style.height= "160px";

    //width
    player1[0].at(0).style.width= "140px";
    player1[1].at(0).style.width= "140px";
    player1[2].at(0).style.width= "140px";
    player1[3].at(0).style.width= "140px";

    //rotate
    player1[0].at(0).style.transform= 'rotateY(0deg)';
    player1[1].at(0).style.transform= 'rotateY(0deg)';
    player1[2].at(0).style.transform= 'rotateY(0deg)';
    player1[3].at(0).style.transform= 'rotateY(0deg)';
   
};

function tempcardDistribute(){
    
    var i = 0;
    while(i <= 4){
        
        var randpick = cardpack[Math.floor(Math.random()*cardpack.length)];
        console.log(randpick);

        const tkout = stack.indexOf(randpick);
        if (tkout > -1) { // only splice array when item is found
            stack.splice(tkout, 1); // 2nd parameter means remove one item only
        }
        return randpick
    }
}


/********** DRAW ************/
function drawcard(){
    var q = 0, x;

    while(player1.length < 4){
        player1[q] = tempcardDistribute();
        q++;
        if(q >= 4){
            break;
        }
    }
    for(x = 0; x <= q; x++){
        console.log(player1[x]?.at(1));
    }

    mechanics();
    
    /*while(player1.length < 4){
        player1[q] = cardDistribute();
        q++;
        if(q >= 4){
            break;
        }
    }
    for(x = 0; x <= q; x++){
        console.log(player1[x]?.at(1));
    }
    
    player1[0].at(0).style.left= now1 + "px";
    player1[1].at(0).style.left= now2 + "px";
    player1[2].at(0).style.left= now3 + "px";
    player1[3].at(0).style.left= now4 + "px";
*/    
/*
    temprandcardpick = cardpack[Math.floor(Math.random()*cardpack.length)];
    console.log(temprandcardpick.at(1));*/
}

/*********  MOVE ********** */
function move(){
    
//working animation 
    var mytimer = setInterval(function()
        {
            horpos++;
            stkimg.style.left = horpos + "px";
            if(horpos == 500){
                clearInterval(mytimer);
                var mybspin = setInterval(function()
                {
                    bspin++;
                    stkimg.style.transform = 'rotateY('+ bspin +'deg)';
                    if(bspin == 90){
                        clearInterval(mybspin);
                        bspin = 90;  
            
                        var myfspin = setInterval(function()
                        {
                            console.log("LETS GET THIS WORKING")
                            fspin--;
                            c2.at(0).style.transform = 'rotateY('+ fspin +'deg)';
                            c2.at(0).style.left= horpos + "px";
                            if(fspin == 0){
                                clearInterval(myfspin);
                                fspin = 0;  
                            };
                        },2);
                    };        
                },2);
            }           
        },4);

       
    tempcards[Math.floor(Math.random()*tempcards.length)].style.left = temphorpos + "px";

    let stack = ["h2", "h3","h4","h5","h6","h7","h8","h9","h10","hj","hq","hk","ha",
    "d2","d3","d4","d5","d6","d7","d8","d9","d10","dj","dq","dk","da",
    "s2","s3","s4","s5","s6","s7","s8","s9","s10","sj","sq","sk","sa",
    "c2","c3","c4","c5","c6","c7","c8","c9","c10","cj","cq","ck","ca"];
    
    function cardDistribute() {
        var i = 0;
        let plyr = [];
        while(i < 4) {
            var randpick = stack[Math.floor(Math.random()*stack.length)];
            
            plyr.push(randpick)
            i++;
        };
        return plyr;
        
    };


}


 





