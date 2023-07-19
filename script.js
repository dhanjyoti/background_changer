function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if(color == "#090909"){
        for(let elm of txt){
            elm.style.color = "#f1f1f1";
        }
    }else{
        for(let elm of txt){
            elm.style.color = "#090909";
        }
    }
}