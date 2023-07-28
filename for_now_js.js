/*  TO DO LIST
*   get the properties of the card selected to move were it is placed
//  *   fix alingment

*   check if the move is valid
//    *   find a way to acces the number with the value
//    *   compare the first num to the num being placed 
//    *   get the cards to transfer from the player array to the slot array
    
*   draw more cards from the deck 
//    *   ensure the card drawn is removed from the list 
//    *   add the new card to the correct list 
//    *   create the veiw for the cards when the player has more cards

*   check if the players hand is empty 

*   create a winnig screen 
    *   find inspiration for a winning screan 
    *   create winning screen
    *   add play again function 
     
*   create the ai to play against 
    *   ENSURE NOT TO GO INSANE AND JUMP OFF A BRIDGE BEFORE THIS PART IS DONE
    
    *   know when its your turn
//    *   find out if you have a valid move 
//    *   if not draw a card
    *   if too find the best move   _______________________     most likely wont be doing this but lets leave it in for now
//    *   make the move 


* rotate the cards after they are distributed

*/
/**********CURENTLY WORKING ON****************//*
    WORKING:    trying to add the extra card backs to the player 2 hand using the length of the 
                amount that is already in the pack

                so if there is 3 cards up there you search through the array with them until you find 
                the card back with the number 4 and then add that to the top

                print the array with the cards it should start at 4 because the original set are taken out at the start 
                so just check

    FUNCTION:   lessen_p2deck()
    
*/


// no clue what these do but cant delete 

let verpos = 0;
 
// variables that i know and are staying
var bottomtab = document.getElementById('bottomtable');
var toptab = document.getElementById('toptable');
var lefttab = document.getElementById('lefttable')

var slot1 = document.getElementById('slot1');
var slot2 = document.getElementById('slot2');
var slot3 = document.getElementById('slot3');

var startgame = document.getElementById("shuffle");
startgame.addEventListener("click",drawcard);

var startanimation = document.getElementById("stani");
startanimation.addEventListener("click",move);

let drawanothercard = document.getElementById('stack');
drawanothercard.addEventListener('click',p1drawanothercard);

var player1 = [];
var plyrid1 = [];
var player2 = [];
var p2cardback = [];
var midtable = [];

var slt1 = [];
var slt2 = [];
var slt3 = [];

let currentDraggedElementId = null;


//temp values
//var move = document.getElementById("butto");


// stack of cards
//speads
var s2 = [document.getElementById("s2"), 2];
var s3 = [document.getElementById("s3"), 3];
var s4 = [document.getElementById("s4"), 4];
var s5 = [document.getElementById("s5"), 5];
var s6 = [document.getElementById("s6"), 6];
var s7 = [document.getElementById("s7"), 7];
var s8 = [document.getElementById("s8"), 8];
var s9 = [document.getElementById("s9"), 9];
var s10 = [document.getElementById("s10"), 10];
var sJ = [document.getElementById("sJ"), 11];
var sQ = [document.getElementById("sQ"), 12];
var sK = [document.getElementById("sK"), 13];
var sA = [document.getElementById("sA"), 14];

//hearts
var h2 = [document.getElementById("h2"), 2];
var h3 = [document.getElementById("h3"), 3];
var h4 = [document.getElementById("h4"), 4];
var h5 = [document.getElementById("h5"), 5];
var h6 = [document.getElementById("h6"), 6];
var h7 = [document.getElementById("h7"), 7];
var h8 = [document.getElementById("h8"), 8];
var h9 = [document.getElementById("h9"), 9];
var h10 = [document.getElementById("h10"), 10];
var hJ = [document.getElementById("hJ"), 11];
var hQ = [document.getElementById("hQ"), 12];
var hK = [document.getElementById("hK"), 13];
var hA = [document.getElementById("hA"), 14];

//diamond
var d2 = [document.getElementById("d2"), 2];
var d3 = [document.getElementById("d3"), 3];
var d4 = [document.getElementById("d4"), 4];
var d5 = [document.getElementById("d5"), 5];
var d6 = [document.getElementById("d6"), 6];
var d7 = [document.getElementById("d7"), 7];
var d8 = [document.getElementById("d8"), 8];
var d9 = [document.getElementById("d9"), 9];
var d10 = [document.getElementById("d10"), 10];
var dJ = [document.getElementById("dJ"), 11];
var dQ = [document.getElementById("dQ"), 12];
var dK = [document.getElementById("dK"), 13];
var dA = [document.getElementById("dA"), 14];

//club
var c2 = [document.getElementById("c2"), 2];
var c3 = [document.getElementById("c3"), 3];
var c4 = [document.getElementById("c4"), 4];
var c5 = [document.getElementById("c5"), 5];
var c6 = [document.getElementById("c6"), 6];
var c7 = [document.getElementById("c7"), 7];
var c8 = [document.getElementById("c8"), 8];
var c9 = [document.getElementById("c9"), 9];
var c10 = [document.getElementById("c10"), 10];
var cJ = [document.getElementById("cJ"), 11];
var cQ = [document.getElementById("cQ"), 12];
var cK = [document.getElementById("cK"), 13];
var cA = [document.getElementById("cA"), 14];

var stkimg1 = document.getElementById("stackmove1");
var stkimg2 = document.getElementById("stackmove2");
var stkimg3 = document.getElementById("stackmove3");
var stkimg4 = document.getElementById("stackmove4");

let topb0 = [document.getElementById("topback0"), 0];
let topb1 = [document.getElementById("topback1"), 1];
let topb2 = [document.getElementById("topback2"), 2];
let topb3 = [document.getElementById("topback3"), 3];
let topb4 = [document.getElementById("topback4"), 4];
let topb5 = [document.getElementById("topback5"), 5];
let topb6 = [document.getElementById("topback6"), 6];
let topb7 = [document.getElementById("topback7"), 7];
let topb8 = [document.getElementById("topback8"), 8];
let topb9 = [document.getElementById("topback9"), 9];
let topb10 = [document.getElementById("topback10"), 10];
let topb11 = [document.getElementById("topback11"), 11];
let topb12 = [document.getElementById("topback12"), 12];
let topb13 = [document.getElementById("topback13"), 13];
let topb14 = [document.getElementById("topback14"), 14];
let topb15 = [document.getElementById("topback15"), 15];

var ace = [document.getElementById("cardfront"), 2];

let p2cardpack = [
    topb0, topb1, topb2, topb3, topb4, topb5,
    topb6, topb7, topb8, topb9, topb10, topb11,
    topb12, topb13, topb14, topb15
]

// array of cards with the values
let cardpack =[
    s2,s3,s4,s5,s6,s7,s8,s9,s10,sJ,sQ,sK,sA,
    h2,h3,h4,h5,h6,h7,h8,h9,h10,hJ,hQ,hK,hA,
    d2,d3,d4,d5,d6,d7,d8,d9,d10,dJ,dQ,dK,dA,
    c2,c3,c4,c5,c6,c7,c8,c9,c10,cJ,cQ,cK,cA
];


// the actual working random card picker
var cardpick;


//working randpm picker 
var temprandcardpick;


var temphorpos = 1000; 
var rotate = 0;
var fspin = 90;
var bspin = 0;

// returns th e cards to the deck
function emptypack(){ 
    let whilenum = 0;
    console.log('======================================')
    console.log('======================================')
    while(whilenum < 1){
        
        const tkout = slt1[0];
            cardpack.push(tkout);
            slt1.splice(tkout, 1); // 2nd parameter means remove one item only
            console.log(cardpack);

        if(slt1.length <= 2){
            whilenum++;
        }
    }
    while(whilenum < 1){
        
        const tkout = slt2[0];
            cardpack.push(tkout);
            slt2.splice(tkout, 1); // 2nd parameter means remove one item only
            console.log(cardpack);

        if(slt2.length <= 2){
            whilenum++;
        }
    }
    while(whilenum < 1){
        
        const tkout = slt3[0];
            cardpack.push(tkout);
            slt3.splice(tkout, 1); // 2nd parameter means remove one item only
            console.log(cardpack);

        if(slt3.length <= 2){
            whilenum++;
        }
    }
    
    
}

// the positioning for player 2 after a card is drawn
function p2drawmechanics(p2newpick){
    let currentpos;

    for(i = 0; i < player2.length; i++){
        currentpos = player2[i].at(0).style.left;
        let n = currentpos[0];
        let e = currentpos[1];
        let w = currentpos[2];
        let newpositon = n+e+w;
    
        let updatenew = newpositon-0-newpositon*0.11;

        player2[i].at(0).style.left = updatenew + 'px';
       
    }

        //left
        player2[player2.length-1].at(0).style.left= "460px";
    
        //top
        player2[player2.length-1].at(0).style.top= "25px";
    
        //height
        player2[player2.length-1].at(0).style.height= "160px";
    
        //width
        player2[player2.length-1].at(0).style.width= "140px";
    
        //rotate
        player2[player2.length-1].at(0).style.transform= 'rotateY(0deg)';
}

// the positioning for player 1 after a card is drawn
function p1drawmechanics(p1newpick){
    let currentpos;

    for(i = 0; i < player1.length; i++){
        currentpos = player1[i].at(0).style.left;
        let n = currentpos[0];
        let e = currentpos[1];
        let w = currentpos[2];
        let newpositon = n+e+w;
    
        let updatenew = newpositon-0-newpositon*0.11;

        player1[i].at(0).style.left = updatenew + 'px';
       
    }
    
    //left
    player1[player1.length-1].at(0).style.left=  "460px";

    //top
    player1[player1.length-1].at(0).style.top=  "25px";
   
    //height
    player1[player1.length-1].at(0).style.height= "160px";

    //width
    player1[player1.length-1].at(0).style.width= "140px";

    //transform
    player1[player1.length-1].at(0).style.transform= 'rotateY(0deg)';

}

function toptab_append(){
    let add_back;
    console.log('atleast it reaches here =')
    for(i = 0; i <= p2cardpack; i++){
        add_back = p2cardpack[i];

        if(add_back[1] == p2cardpack.lenght-1){
            console.log('on the right track')
        }

    }
}

// pulling a card from the pack for player 2
function p2anotherrandpick(){

    let randpick = cardpack[Math.floor(Math.random()*cardpack.length)];

    //toptab_append()
    toptab.appendChild(randpick.at(0));

    const tkout = cardpack.indexOf(randpick);
    if (tkout > -1) { // only splice array when item is found
        cardpack.splice(tkout, 1); // 2nd parameter means remove one item only
    }

    return randpick;
}

// pulling a card from the pack for player 1
function p1anotherrandpick(){

    let randpick = cardpack[Math.floor(Math.random()*cardpack.length)];

    bottomtab.appendChild(randpick.at(0));

    const tkout = cardpack.indexOf(randpick);
    if (tkout > -1) { // only splice array when item is found
        cardpack.splice(tkout, 1); // 2nd parameter means remove one item only
    }
    return randpick;
}

// starting function to draw a card
function p2drawanothercard(){

    let p2newpick = p2anotherrandpick();
    player2.push(p2newpick);

    p2drawmechanics(p2newpick);

}

// starting function to draw a card
function p1drawanothercard(){

    let p1newpick = p1anotherrandpick();
    player1.push(p1newpick);

    p1drawmechanics(p1newpick);
    aiplay();
};

function p2_move_back_mchanics(temp_back_move_back){
    temp_back_move_back.style.left = '25px';
};

function lessen_p2deck(){
    let val = 1
    let temp_move_back;

    temp_move_back = p2cardback[p2cardback.length-val];
    console.log(temp_move_back)


    lefttab.appendChild(temp_move_back[0]);
    p2_move_back_mchanics(temp_move_back[0]);
    p2cardback.pop();
    temp_move_back = p2cardback[p2cardback.length-val];

};                


// controls the moves the computer makes
function aiplay(slot,slotposition){
    for(i = 0; i < player2.length; i++){

        if( player2[i][1] === slt1[slt1.length-1][1]+1 ||
            player2[i][1] === slt1[slt1.length-1][1]-1 ){

                    //console.log('before the move', player2[i][1]);
                    slt1.push(player2[i]);
                    slot1.appendChild(player2[i][0]);
                    midtableformat(player2[i][0]);

                    const tkout = player2.indexOf(player2[i]);
                    if (tkout > -1) { // only splice array when item is found
                        player2.splice(tkout, 1); // 2nd parameter means remove one item only
                    }
                    
                    //console.log('after the move',player2[i][1])

                    //lessen_p2deck();                
                    checkifwin();   
                    break;                                 
            }
            else if( player2[i][1] === slt2[slt2.length-1][1]+1 ||
                player2[i][1] === slt2[slt2.length-1][1]-1 ){
            
                    //console.log('before the move', player2[i][1]);
                    slt2.push(player2[i]);
                    slot2.appendChild(player2[i][0]);
                    midtableformat(player2[i][0]);

                    const tkout = player2.indexOf(player2[i]);
                    if (tkout > -1) { // only splice array when item is found
                        player2.splice(tkout, 1); // 2nd parameter means remove one item only
                    }
                    
                    //console.log('after the move',player2[i][1])

                    //lessen_p2deck();                
                    checkifwin();
                    break;
            
                }
            else if(player2[i][1] === slt3[slt3.length-1][1]+1 ||
               player2[i][1] === slt3[slt3.length-1][1]-1){

                //console.log('before the move', player2[i][1]);
                slt3.push(player2[i]);
                slot3.appendChild(player2[i][0]);
                midtableformat(player2[i][0]);

                const tkout = player2.indexOf(player2[i]);
                if (tkout > -1) { // only splice array when item is found
                    player2.splice(tkout, 1); // 2nd parameter means remove one item only
                }

                //lessen_p2deck();                
                checkifwin();
                break; 
            }
            else{
                if(i === player2.length-1){
                    console.log('didnt find a card');
                p2drawanothercard();
                }
            }

        if(cardpack.length === 0){
            emptypack();
        };
   }
}

// screen for the winner 
function winscreen(){
    window.location.href = "/dummy files/dumy.html"

};

// checking if anyone has won 
function checkifwin(){
    if(player1.length === 0){
        winscreen();
    }

    if(player2.length === 0){
        winscreen();
    }
};

// controls the players move 
function isvalidmove(slot, draggedImage, slotposition){
    let cardId = draggedImage.id;
    let q;
  
  for (let i = 0; i < player1.length; i++) {
    if (player1[i][0].id === cardId) {

        if (player1[i][1] == slot[slot.length-1][1]-1 ||
            player1[i][1] == slot[slot.length-1][1]+1) {
            if(slotposition == 1){
                slt1.push(player1[i]);

                const tkout = player1.indexOf(player1[i]);
                if (tkout > -1) { // only splice array when item is found
                    player1.splice(tkout, 1); // 2nd parameter means remove one item only
                }
                slot1.appendChild(draggedImage);
                //console.log(draggedImage.id)

                checkifwin();
                aiplay(slot,slotposition);
            }
            else if(slotposition == 2){
                slt2.push(player1[i]);

                const tkout = player1.indexOf(player1[i]);
                if (tkout > -1) { // only splice array when item is found
                    player1.splice(tkout, 1); // 2nd parameter means remove one item only
                }
                slot2.appendChild(draggedImage);
                //console.log(draggedImage.id)

                checkifwin();
                aiplay(slot,slotposition);

            }
            else if(slotposition == 3){
                slt3.push(player1[i]);

                const tkout = player1.indexOf(player1[i]);
                if (tkout > -1) { // only splice array when item is found
                    player1.splice(tkout, 1); // 2nd parameter means remove one item only
                }
                slot3.appendChild(draggedImage);
                //console.log(draggedImage.id)

                checkifwin();
                aiplay(slot,slotposition);
            }
            midtableformat(draggedImage);        
       }
       else{
        console.log('it doesnt work');    
       }

       if(cardpack.length === 0){
        emptypack();
    };

    }
  }

}

// distributes the cards
 function cardDistribute() {

    var i = 0;
    while(i <= 4){
        
        var randpick = cardpack[Math.floor(Math.random()*cardpack.length)];
        console.log(randpick);

        const tkout = cardpack.indexOf(randpick);
        if (tkout > -1) { // only splice array when item is found
            cardpack.splice(tkout, 1); // 2nd parameter means remove one item only
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
                    stkimg1.style.transform = 'rotateY('+ bspin +'deg)';
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
                                    stkimg1.style.left = horpos + "px";
                                    stkimg1.style.transform = 'rotateY(0deg)';
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

function rotatep2(){
    let rotp2s2 = 90;
    let rotp2back = 0;

    var p2_start_back_rotate = setInterval(function(){
        rotp2back++;

        stkimg1.style.transform = 'rotateY(' + rotp2back + 'deg)'
        stkimg2.style.transform = 'rotateY(' + rotp2back + 'deg)'
        stkimg3.style.transform = 'rotateY(' + rotp2back + 'deg)'
        stkimg4.style.transform = 'rotateY(' + rotp2back + 'deg)'

        if(rotp2back === 90){
            clearInterval(p2_start_back_rotate);

            var reveal_p2_start_cards = setInterval(function(){
                rotp2s2--;

                player2[0][0].style.transform = 'rotateY(' + rotp2s2 + 'deg)'
                player2[1][0].style.transform = 'rotateY(' + rotp2s2 + 'deg)'
                player2[2][0].style.transform = 'rotateY(' + rotp2s2 + 'deg)'
                player2[3][0].style.transform = 'rotateY(' + rotp2s2 + 'deg)'

                if(rotp2s2 === 0){
                    clearInterval(reveal_p2_start_cards);
                }
            },1)
        }
    },1)
}

// rotates the cards in player 1's hand 
function rotatep1(){
    let rotp1s1 = 90;
    let rotp1back = 0;

    var p1_start_back_rotate = setInterval(function(){
        rotp1back++;

        stkimg1.style.transform = 'rotateY(' + rotp1back + 'deg)'
        stkimg2.style.transform = 'rotateY(' + rotp1back + 'deg)'
        stkimg3.style.transform = 'rotateY(' + rotp1back + 'deg)'
        stkimg4.style.transform = 'rotateY(' + rotp1back + 'deg)'

        if(rotp1back === 90){
            clearInterval(p1_start_back_rotate);

            var reveal_p1_start_cards = setInterval(function(){
                rotp1s1--;
        
                player1[0][0].style.transform = 'rotateY(' + rotp1s1 + 'deg)'
                player1[1][0].style.transform = 'rotateY(' + rotp1s1 + 'deg)'
                player1[2][0].style.transform = 'rotateY(' + rotp1s1 + 'deg)'
                player1[3][0].style.transform = 'rotateY(' + rotp1s1 + 'deg)'
        
                if(rotp1s1 === 0){
                    clearInterval(reveal_p1_start_cards);
                }
                
            },1)
        }
    },1)
}

// the positioning of the cards after shuffle
function mechanics(plyrnum){
    
    let bot1 = 10, bot2 = 160, bot3 = 310, bot4 = 460;
    let top1 = 10, top2 = 160, top3 = 310, top4 = 460;
    let toppos = 25;
    
    if(plyrnum == 1){
        positioning1();
    }
    else if (plyrnum == 2){
        positioning2();
    }
    else if (plyrnum == 3){
        positioning3();
    }

    function positioning1(){
    //left
    player1[0].at(0).style.left= bot1 + "px";
    player1[1].at(0).style.left= bot2 + "px";
    player1[2].at(0).style.left= bot3 + "px";
    player1[3].at(0).style.left= bot4 + "px";

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
    rotatep1();
    /*
    player1[0].at(0).style.transform= 'rotateY(0deg)';
    player1[1].at(0).style.transform= 'rotateY(0deg)';
    player1[2].at(0).style.transform= 'rotateY(0deg)';
    player1[3].at(0).style.transform= 'rotateY(0deg)';*/
    };

    function positioning2(){
    //left
    player2[0].at(0).style.left= top1 + "px";
    player2[1].at(0).style.left= top2 + "px";
    player2[2].at(0).style.left= top3 + "px";
    player2[3].at(0).style.left= top4 + "px";

    //top
    player2[0].at(0).style.top= toppos + "px";
    player2[1].at(0).style.top= toppos + "px";
    player2[2].at(0).style.top= toppos + "px";
    player2[3].at(0).style.top= toppos + "px";

    //height
    player2[0].at(0).style.height= "160px";
    player2[1].at(0).style.height= "160px";
    player2[2].at(0).style.height= "160px";
    player2[3].at(0).style.height= "160px";

    //width
    player2[0].at(0).style.width= "140px";
    player2[1].at(0).style.width= "140px";
    player2[2].at(0).style.width= "140px";
    player2[3].at(0).style.width= "140px";

    //rotate
    rotatep2();
   /* player2[0].at(0).style.transform= 'rotateY(0deg)';
    player2[1].at(0).style.transform= 'rotateY(0deg)';
    player2[2].at(0).style.transform= 'rotateY(0deg)';
    player2[3].at(0).style.transform= 'rotateY(0deg)';*/
};

    function positioning3(){
        //transform
        midtable[0].at(0).style.transform= 'rotateY(0deg)';
        midtable[1].at(0).style.transform= 'rotateY(0deg)';
        midtable[2].at(0).style.transform= 'rotateY(0deg)';

        //width
        midtable[0].at(0).style.width = '120px';
        midtable[1].at(0).style.width = '120px';
        midtable[2].at(0).style.width = '120px';

        //lenght
        midtable[0].at(0).style.height = '160px';
        midtable[1].at(0).style.height = '160px';
        midtable[2].at(0).style.height = '160px';
        
        //top
        midtable[0].at(0).style.top = '13px';
        midtable[1].at(0).style.top = '13px';
        midtable[2].at(0).style.top = '13px';

        //left
        midtable[0].at(0).style.left = '25px';
        midtable[1].at(0).style.left = '25px';
        midtable[2].at(0).style.left = '25px';
    }

    if (plyrnum == 3){
    moving_mechanics();}
   
};

// position of the card on the mid table 
function midtableformat(draggedImage){
    draggedImage.removeAttribute('style');

    draggedImage.style.transform= 'rotateY(0deg)';
    draggedImage.style.width = '120px';
    draggedImage.style.height = '160px';
    draggedImage.style.top = '13px';
    draggedImage.style.left = '25px';}

function moving_mechanics(){
    //player1[0].at(0).addEventListener("drag",move);
    let slotposition;

    const images = document.querySelectorAll(".allcards");
      images.forEach(function(image) {
        image.addEventListener("dragstart", function(event) {
            // Set the data that will be transferred during the drag
            event.dataTransfer.setData("text/plain", event.target.id);
            // Add a CSS class to the dragged image for styling
            event.target.classList.add("dragging");
            // Set the current dragged element ID
            currentDraggedElementId = event.target.id;
            console.log(currentDraggedElementId)
        });

        image.addEventListener("dragend", function(event) {
          // Remove the CSS class from the dragged image
          event.target.classList.remove("dragging");
          // Reset the current dragged element ID
          currentDraggedElementId = null;
        });
      });


            // Add event listeners to the drop target
        slot1.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
        slot1.addEventListener("drop", function(event) {
            event.preventDefault();

            // Get the ID of the dragged image from the data transfer
            const imageId = event.dataTransfer.getData("text/plain");

            // Append the dragged image to the target div
            const draggedImage = document.getElementById(imageId);
            
            slotposition = 1;
            isvalidmove(slt1, draggedImage, slotposition);
        });

        // Add event listener to track the current dragged element
        document.addEventListener("drag", function(event) {
            if (currentDraggedElementId) {
            //console.log("Currently dragging:", currentDraggedElementId);
            }
        });
    

             // Add event listeners to the drop target
             slot2.addEventListener("dragover", function(event) {
                event.preventDefault();
            });
            slot2.addEventListener("drop", function(event) {
                event.preventDefault();

                // Get the ID of the dragged image from the data transfer
                const imageId = event.dataTransfer.getData("text/plain");

                // Append the dragged image to the target div
                const draggedImage = document.getElementById(imageId);
                
                slotposition = 2;
                isvalidmove(slt2, draggedImage, slotposition);
            });
    
            // Add event listener to track the current dragged element
            document.addEventListener("drag", function(event) {
                if (currentDraggedElementId) {
                //console.log("Currently dragging:", currentDraggedElementId);
                }
            });

                 // Add event listeners to the drop target
        slot3.addEventListener("dragover", function(event) {
            event.preventDefault();
        });
        slot3.addEventListener("drop", function(event) {
            event.preventDefault();

            // Get the ID of the dragged image from the data transfer
            const imageId = event.dataTransfer.getData("text/plain");

            // Append the dragged image to the target div
            const draggedImage = document.getElementById(imageId);

            slotposition = 3;
            isvalidmove(slt3, draggedImage, slotposition);
        });

        // Add event listener to track the current dragged element
        document.addEventListener("drag", function(event) {
            if (currentDraggedElementId) {
            //console.log("Currently dragging:", currentDraggedElementId);
            };
        });

}

// puts the cards in the correct slot on the table 
function slotdistribute(randpick,slotnumber) {

    if(slotnumber == 1){
        slot1.appendChild(randpick.at(0));
        slt1[0] = randpick;
    }
    else if(slotnumber == 2) {
        slot2.appendChild(randpick.at(0));
        slt2[0] = randpick;
    }
    else if (slotnumber == 3) {
        slot3.appendChild(randpick.at(0));
        slt3[0] = randpick;
    }
};

// this function works but without the animation
// that is why it is temp
function tempcardDistribute(plyrnum,slotnumber){
    var i = 0;
    while(i <= 4){
        
        let randpick = cardpack[Math.floor(Math.random()*cardpack.length)];
        
        randpick.at(0).style.transform = 'rotateY(90deg)';
        if(plyrnum == 1){
            bottomtab.appendChild(randpick.at(0));
        }
        else if (plyrnum == 2){
            toptab.appendChild(randpick.at(0));
        }
        else if (plyrnum == 3){
            slotdistribute(randpick,slotnumber);
            return randpick;
        }

        const tkout = cardpack.indexOf(randpick);
        if (tkout > -1) { // only splice array when item is found
            cardpack.splice(tkout, 1); // 2nd parameter means remove one item only
        }
        return randpick;
    }
};

/********** DRAW ************/
function drawcard(){
    let plyrnum = 1;
    let slotnumber = 1;
    var p1 = 0, p2 = 0, p3 = 0, x;
    let p2i;

    while(player1.length < 4){
        player1[p1] = tempcardDistribute(plyrnum);

        p1++;
        if(p1 >= 4){
            break;
        }
    };
    mechanics(plyrnum);
console.log(player1)
    plyrnum = 2;

    while(player2.length < 4){
        player2[p2] = tempcardDistribute(plyrnum);
        p2++;
        if(p2 >= 4){
            break;
        }
    };
    mechanics(plyrnum);
    for(p2i = 0; p2i < player2.length; p2i++){
        console.log(player2[p2i]);
    }

    plyrnum = 3;
    
    while(midtable.length < 3){
        midtable[p3] = tempcardDistribute(plyrnum,slotnumber);
        p3++;
        if(p3 >= 4){
            break;
        }
        slotnumber++;
    };
    mechanics(plyrnum);
    
}

// 
function p1_start_move_back_spin(bspin,p1horpos,p1verpos){
    var mybspin = setInterval(function()
                    {
                        bspin++;
                        stkimg1.style.transform = 'rotateY('+ bspin +'deg)';
                        stkimg2.style.transform = 'rotateY('+ bspin +'deg)';
                        stkimg3.style.transform = 'rotateY('+ bspin +'deg)';
                        stkimg4.style.transform = 'rotateY('+ bspin +'deg)';
                        if(bspin == 90){
                            clearInterval(mybspin);
                            bspin = 90;  
                
                            
                        };        
                    },2);
    
    
};

function p2_spread_back_imgs(){
    let top_bmove1 = 0, top_bmove2 = 0, top_bmove3 = 0, top_bmove4 = 0;

    var spread_cards_2 = setInterval(function(){
        top_bmove1++;
        top_bmove2++;
        top_bmove3++;
        top_bmove4++;

        stkimg1.style.left = top_bmove1 + 'px';
        stkimg2.style.left = top_bmove2 + 'px';
        stkimg3.style.left = top_bmove3 + 'px';
        stkimg4.style.left = top_bmove4 + 'px';
        
        stkimg1.style.top = '25px';
        stkimg2.style.top = '25px';
        stkimg3.style.top = '25px';
        stkimg4.style.top = '25px';

        if(top_bmove1 === 10){
            clearInterval(spread_cards_2);

            var spread_cards_3 = setInterval(() => {
                top_bmove2++;
                top_bmove3++;
                top_bmove4++;

                stkimg2.style.left = top_bmove2 + 'px';
                stkimg3.style.left = top_bmove3 + 'px';
                stkimg4.style.left = top_bmove4 + 'px';

                if(top_bmove2 === 160){
                    clearInterval(spread_cards_3)

                    var spread_cards_4 = setInterval(function(){
                        top_bmove3++;
                        top_bmove4++;

                        stkimg3.style.left = top_bmove3 + 'px';
                        stkimg4.style.left = top_bmove4 + 'px';

                        if(top_bmove3 === 310){
                            clearInterval(spread_cards_4)

                            var spread_cards_5 = setInterval(function(){
                                top_bmove4++;

                                stkimg4.style.left = top_bmove4 + 'px';

                                if(top_bmove4 === 460){
                                    clearInterval(spread_cards_5)
                                    }
                            },1)
                                
                        }
                    })
                }
        }, 1);}

    },1)

    drawcard();
}

function p2_shrink_moving_start_img(){
    let p2_strt_move_height = 230;
    let p2_strt_move_width = 160;

    var p2_shrink_card = setInterval(function(){
        p2_strt_move_height--;
        p2_strt_move_width--;

        stkimg1.style.height = p2_strt_move_height + 'px';
        stkimg2.style.height = p2_strt_move_height + 'px';
        stkimg3.style.height = p2_strt_move_height + 'px';
        stkimg4.style.height = p2_strt_move_height + 'px';

        stkimg1.style.width = p2_strt_move_width + 'px';
        stkimg2.style.width = p2_strt_move_width + 'px';
        stkimg3.style.width = p2_strt_move_width + 'px';
        stkimg4.style.width = p2_strt_move_width + 'px';

        if (p2_strt_move_width == 135){
            clearInterval(p2_shrink_card);
            p2_strt_move_height = 165;
            stkimg1.style.height = p2_strt_move_height + 'PX';
            stkimg2.style.height = p2_strt_move_height + 'PX';
            stkimg3.style.height = p2_strt_move_height + 'PX';
            stkimg4.style.height = p2_strt_move_height + 'PX';

            p2_spread_back_imgs();
        }
},1)
}

function top_back_distribution(){

    let topb_hor = 0,topb_ver = 0;

    var spread_topb = setInterval(function(){
        topb_hor--;
        topb_ver++;
        topb_ver++;

        stkimg1.style.top = topb_hor + 'px';
        stkimg2.style.top = topb_hor + 'px';
        stkimg3.style.top = topb_hor + 'px';
        stkimg4.style.top = topb_hor + 'px';

        stkimg1.style.left = topb_ver + 'px';
        stkimg2.style.left = topb_ver + 'px';
        stkimg3.style.left = topb_ver + 'px';
        stkimg4.style.left = topb_ver + 'px';

        if(topb_hor === - 181){
            clearInterval(spread_topb);
            let left_top_adjust = setInterval(function(){
                topb_ver--;

                stkimg1.style.left = topb_ver + 'px';
                stkimg2.style.left = topb_ver + 'px';
                stkimg3.style.left = topb_ver + 'px';
                stkimg4.style.left = topb_ver + 'px';

                if(topb_ver = 375){
                    clearInterval(left_top_adjust)

                    p2cardback[0] = topb0
                    p2cardback[1] = topb1
                    p2cardback[2] = topb2
                    p2cardback[3] = topb3

                    toptab.appendChild(stkimg1);
                    toptab.appendChild(stkimg2);
                    toptab.appendChild(stkimg3);
                    toptab.appendChild(stkimg4);

                    topb_hor = 0,topb_ver = 0;

                    stkimg1.style.top = topb_hor + 'px';
                    stkimg2.style.top = topb_hor + 'px';
                    stkimg3.style.top = topb_hor + 'px';
                    stkimg4.style.top = topb_hor + 'px';
            
                    stkimg1.style.left = topb_ver + 'px';
                    stkimg2.style.left = topb_ver + 'px';
                    stkimg3.style.left = topb_ver + 'px';
                    stkimg4.style.left = topb_ver + 'px';

                    p2_shrink_moving_start_img();
                }
            },1)

        }

    },1)
}

function spread_back_imgs(){
    let stm2 = 0, stm3 = 0, stm4 = 0;
    var spread_cards_2 = setInterval(function(){
        stm2++;
        stm3++;
        stm4++;

        stkimg2.style.left = stm2 + 'px';
        stkimg3.style.left = stm3 + 'px';
        stkimg4.style.left = stm4 + 'px';

        stkimg1.style.top = "25px";
        stkimg2.style.top = "25px";
        stkimg3.style.top = "25px";
        stkimg4.style.top = "25px";


        if(stm2 === 160){
            clearInterval(spread_cards_2);

            var spread_cards_3 = setInterval(() => {
                stm3++;
                stm4++;

                stkimg3.style.left = stm3 + 'px';
                stkimg4.style.left = stm4 + 'px';

                if(stm3 === 310){
                    clearInterval(spread_cards_3)

                    var spread_cards_4 = setInterval(function(){
                        stm4++;

                        stkimg4.style.left = stm4 + 'px';

                        if(stm4 === 460){
                            clearInterval(spread_cards_4)
                            top_back_distribution();
                        }
                    })
                }
        }, 1);}

    },1)

    
}

function p1_shrink_moving_start_img(){
    let p1_strt_move_height = 230;
    let p1_strt_move_width = 160;

    var shrink_card = setInterval(function(){
        p1_strt_move_height--;
        p1_strt_move_width--;

        stkimg1.style.height = p1_strt_move_height + 'px';
        stkimg1.style.width = p1_strt_move_width + 'PX';

        stkimg2.style.height = p1_strt_move_height + 'px';
        stkimg2.style.width = p1_strt_move_width + 'PX';

        stkimg3.style.height = p1_strt_move_height + 'px';
        stkimg3.style.width = p1_strt_move_width + 'PX';

        stkimg4.style.height = p1_strt_move_height + 'px';
        stkimg4.style.width = p1_strt_move_width + 'PX';

        if (p1_strt_move_width == 135){
            clearInterval(shrink_card);
            p1_strt_move_height = 165;
            stkimg1.style.height = p1_strt_move_height + 'PX';
            stkimg2.style.height = p1_strt_move_height + 'PX';
            stkimg3.style.height = p1_strt_move_height + 'PX';
            stkimg4.style.height = p1_strt_move_height + 'PX';

            bottomtab.appendChild(stkimg1);
            bottomtab.appendChild(stkimg2);
            bottomtab.appendChild(stkimg3);
            bottomtab.appendChild(stkimg4);

            stkimg1.style.left = '10px';
            spread_back_imgs();

        }
    },2)
}

function p1deckmovedown(){

    let p1horpos = 1;
    let p1verpos = 1;
    var mytimer = setInterval(function()
    {
        p1horpos++;
        p1verpos++;
        stkimg1.style.top = p1verpos + "px";
        stkimg1.style.left = p1horpos + "px";

        stkimg2.style.top = p1verpos + "px";
        stkimg2.style.left = p1horpos + "px";

        stkimg3.style.top = p1verpos + "px";
        stkimg3.style.left = p1horpos + "px";

        stkimg4.style.top = p1verpos + "px";
        stkimg4.style.left = p1horpos + "px";

        if(p1verpos == 300){

            clearInterval(mytimer);

            let leftaftermove = setInterval(function()
            {
                p1horpos++;
                stkimg1.style.left = p1horpos + "px";
                stkimg2.style.left = p1horpos + "px";
                stkimg3.style.left = p1horpos + "px";
                stkimg4.style.left = p1horpos + "px";

                if(p1horpos == 420){
                    clearInterval(leftaftermove);
                    p1_shrink_moving_start_img();
                    
                   // p1_start_move_back_spin(bspin,p1horpos,p1verpos);           
                }
            })

            
        }           
    },4);
}

/*********  MOVE ********** */

function move(){
    
//working animation 

    p1deckmovedown();


/*
       
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
        
    };*/


}






