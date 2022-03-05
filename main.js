alert("welcome to my workspace")



let operate;
let num1;
let num2;
let e = document.getElementById("display")
function  display(val){
    function choose(el) { el.classList.add("selected"); }
    let show = document.getElementById("display")
    show.innerHTML += val   
}


function sign(val){
    operate = val

    num1 = document.getElementById("display").innerHTML
    
    let show = document.getElementById("display").innerHTML =""
    
}

function result(){
    num2 = document.getElementById("display").innerHTML
    if(operate == ""){
        alert("No operator entered !")
    }
    
    
    switch(operate) {
      case "+":
        answer = parseFloat(num1) + parseFloat(num2)
        document.getElementById("display").innerHTML = answer
        break;
      case "-":
        answer = parseFloat(num1) - parseFloat(num2)
        document.getElementById("display").innerHTML = answer
        break;
      case "*":
        answer = parseFloat(num1) * parseFloat(num2)
        document.getElementById("display").innerHTML = answer
        break;
      case "÷":
        answer = parseFloat(num1) / parseFloat(num2)
        document.getElementById("display").innerHTML = answer
        break;
      default:
        document.getElementById("display").innerHTML = ""
}    
}


function cancel(){
    document.getElementById("display").innerHTML = ""
    num1 = 0
    num2 = 0
}

function deleteval(){
    let val = document.getElementById("display").innerHTML
    
    val = val.substring(0, val.length -1)
    
    document.getElementById("display").innerHTML = val
    
}