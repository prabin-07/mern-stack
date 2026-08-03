//1-Stone,2.Paper, 3.Scissors
let p1=1;
let p2=2;

if(p1==1 && p2==1 || p1==2 && p2==2 && p1==3 && p2==3){
    console.log("Its Draw");
}
else{
    if(p1==1 && p2==3){ //player-1
        console.log("P1 Wins");
    }
    else if(p1==2 && p2==1){
        console.log("P1 Wins");
    }
    else if(p1==3 && p2==2){
        console.log("P1 Wins");
    }
    else if(p2==1 && p1==3){ //player-2
        console.log("P2 Wins");
    }
    else if(p2==2 && p1==1){
        console.log("P2 Wins");
    }
    else if(p2==3 && p1==2){
        console.log("P2 wins");
    }
    else{
        console.log("Invalid");
    }
}