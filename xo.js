function init (){
const v1 = document.getElementById('v1')
const v2 = document.getElementById('v2')
const v22 = document.getElementById('v2').id
const v3 = document.getElementById('v3')
const v33 = document.getElementById('v3').id
const v4 = document.getElementById('v4')
const v44 = document.getElementById('v4').id
const v5= document.getElementById('v5')
const v55 = document.getElementById('v5').id
const v6 = document.getElementById('v6')
const v66 = document.getElementById('v6').id










st = true;

function xz (ids){
    ids = v1
    if(st === true ){
        ids.innerHTML= "X";
        winc[0]=0
        st = !st;
    } else{
        ids.innerHTML="O"
        winc[0]=1
        st=!st;
    }

}


function xz2 (ids){
    ids = v22
    if(st === true){
        document.getElementById(ids).innerHTML= "X";
        winc2[1]=0
        st = !st;
    } else{
        document.getElementById(ids).innerHTML="O"
        winc2[1]=1
        st=!st;
    }

}


function xz3 (ids){
    ids = v33
    if(st === true){
        document.getElementById(ids).innerHTML= "X";
        winc3[2]=0
        st = !st;
    } else{
        document.getElementById(ids).innerHTML="O"
        winc3[2]=1
        st=!st;
        
        

    }

}







v1.addEventListener('click', xz)
v2.addEventListener('click', xz2)
v3.addEventListener('click', xz3)

}



window.addEventListener("DOMContentLoaded", init)