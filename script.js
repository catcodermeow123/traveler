function showInp(){
    document.querySelector(".new-inp").style.display = "inline";
    document.querySelector(".ok").style.display = "inline";
}
function add(){
    document.querySelector(".todo").innerHTML += '<div class="box"><h2>'+ document.querySelector(".new-inp").value + '</h2></div><br>'
    document.querySelector(".new-inp").value = ""
    document.querySelector(".new-inp").style.display = "none";
    document.querySelector(".ok").style.display = "none";
}
