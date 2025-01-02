function getdiv(code) {
    var x = document.getElementsByClassName("c-div");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (code===1){
        document.getElementById('i-div-LPO').style.display = "block";
    }
    else if(code===2){
        document.getElementById('i-div-Delivery').style.display = "block";
    }
}