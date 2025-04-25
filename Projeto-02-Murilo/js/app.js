var flag = 0;

function muda_cor(){
    let body = document.getElementById("bg");
    body.style.backgroundColor = "#e11a00";

    if(flag == 0){
        body.style.backgroundColor = "#e11a00";
        flag = 1;
    }else{
        body.style.backgroundColor = "#2a2e7d";
        flag = 0;
    }

}