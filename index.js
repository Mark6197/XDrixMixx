window.addEventListener('load', event=>{
    var x=document.getElementsByClassName("X");
    for(var i = 0; i < x.length; i++)
    {
        x[i].addEventListener("click", buttonClicked);
    }
    var o=document.getElementsByClassName("O");
    for(var i = 0; i < o.length; i++)
    {
        o[i].addEventListener("click", buttonClicked);
        // o[i].disabled=true;
    }
    });

function buttonClicked(event){
    var clickedElement = event.target;
    var td=clickedElement.parentElement;
    td.innerHTML = '';
    var label=document.createElement("Label");
    var node = document.createTextNode(clickedElement.textContent);
    if(node.textContent=="X"){
        label.className="labelX";
    }
    else{
        label.className="labelO";
    }
    buttonsEnabledSwitch(node.textContent);
    label.appendChild(node);
    td.appendChild(label);
    checkIfWin();
}

function buttonsEnabledSwitch(param){
    var x=document.getElementsByClassName("X");
    var o=document.getElementsByClassName("O");
    if(param=="X"){
        for(var i = 0; i < x.length; i++)
        {
            x[i].disabled=true;
        }
        for(var i = 0; i < o.length; i++)
        {
            o[i].disabled=false;
        }
    }
    else if(param=="O"){
        for(var i = 0; i < o.length; i++)
        {
            o[i].disabled=true;
        }
        for(var i = 0; i < x.length; i++)
        {
            x[i].disabled=false;
        }
    }
}

function checkIfWin(){
    var tds = document.getElementsByTagName("td");
    if (tds[0].childElementCount==1 && tds[1].childElementCount==1 && tds[2].childElementCount==1){
        if (tds[0].textContent==tds[1].textContent && tds[0].textContent==tds[2].textContent){
          youWon(tds[0].textContent);
        }
    }
    if (tds[3].childElementCount==1 && tds[4].childElementCount==1 && tds[5].childElementCount==1){
        if (tds[3].textContent==tds[4].textContent && tds[3].textContent==tds[5].textContent){
          youWon(tds[3].textContent);
        }
    }
    if (tds[6].childElementCount==1 && tds[7].childElementCount==1 && tds[8].childElementCount==1){
        if (tds[6].textContent==tds[7].textContent && tds[6].textContent==tds[8].textContent){
          youWon(tds[6].textContent);
        }
    }
    if (tds[0].childElementCount==1 && tds[3].childElementCount==1 && tds[6].childElementCount==1){
        if (tds[0].textContent==tds[3].textContent && tds[0].textContent==tds[6].textContent){
          youWon(tds[0].textContent);
        }
    }
    if (tds[1].childElementCount==1 && tds[4].childElementCount==1 && tds[7].childElementCount==1){
        if (tds[1].textContent==tds[4].textContent && tds[1].textContent==tds[7].textContent){
          youWon(tds[1].textContent);
        }
    }
    if (tds[2].childElementCount==1 && tds[5].childElementCount==1 && tds[8].childElementCount==1){
        if (tds[2].textContent==tds[5].textContent && tds[2].textContent==tds[8].textContent){
          youWon(tds[2].textContent);
        }
    }
    if (tds[0].childElementCount==1 && tds[4].childElementCount==1 && tds[8].childElementCount==1){
        if (tds[0].textContent==tds[4].textContent && tds[0].textContent==tds[8].textContent){
          youWon(tds[0].textContent);
        }
    }
    if (tds[2].childElementCount==1 && tds[4].childElementCount==1 && tds[6].childElementCount==1){
        if (tds[2].textContent==tds[4].textContent && tds[2].textContent==tds[6].textContent){
          youWon(tds[2].textContent);
        }
    }
}
function youWon(param){
    var winningLabel = document.createElement("label");
    winningLabel.innerHTML= param + " Won";
    if(param=="X"){
        winningLabel.className="labelX";
    }
    else if(param=="O"){
        winningLabel.className="labelO";

    }
    var div= document.getElementById("winDiv");
    div.appendChild(winningLabel);
    var btn = document.getElementsByTagName("button");
    for(var i = 0; i < btn.length-1; i++)
    {
        btn[i].disabled=true;
    }
}