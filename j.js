let turn="x";
let x=document.querySelector(".x");
let y=document.querySelector(".y");
let score=document.querySelector(".score")
let title=document.querySelector(".board");
let squers=[];
let xp=0,yp=0;
function end(n1,n2,n3){
    title.innerHTML=`${squers[n1]} winner`;
    document.getElementById(`item${n1}`).style.background="black";
    document.getElementById(`item${n2}`).style.background="black";
    document.getElementById(`item${n3}`).style.background="black";
if(squers[n1]==="x"){
    xp++;
  x.innerHTML=`X : ${xp}`;
}
else{
    yp++;
    y.innerHTML=`O: ${yp}`;
}
    setInterval(()=>{title.innerHTML+="."},1000)
    setTimeout(()=>{location.reload()},4000)
}
function winner(){
    for(let i=1;i<10;i++){
squers[i]=document.getElementById('item'+i).innerHTML;
    }
    if(squers[1]===squers[2] && squers[1]===squers[3] && squers[1]!==""){
        end(1,2,3);
    }
    if(squers[4]===squers[5] && squers[4]===squers[6] && squers[4]!==""){
        end(4,5,6);
    }
    else if(squers[7]===squers[8] && squers[7]===squers[9] && squers[7]!==""){
        end(7,8,9);
    }
   else if(squers[1]===squers[4] && squers[1]===squers[7] && squers[1]!==""){
        end(1,4,7);
    }
    else if(squers[2]===squers[5] && squers[2]===squers[8] && squers[2]!==""){
        end(2,5,8);
    }
    else if(squers[3]===squers[6] && squers[3]===squers[9] && squers[3]!==""){
        end(3,6,9);
    }

   else if(squers[1]===squers[5] && squers[1]===squers[9] && squers[1]!==""){
        end(1,5,9);
    }
    else if(squers[3]===squers[5] && squers[3]===squers[7] && squers[3]!==""){
        end(3,5,7);
    }
}
function game(id){
    let item=document.getElementById(id)
    if(turn==="x" && item.innerHTML===""){
item.innerHTML="x";
turn="o";
title.innerHTML="o";
    }
    else if(turn==="o" && item.innerHTML===""){
        item.innerHTML="o";
turn="x";
title.innerHTML="x";
    }
    winner();
}
