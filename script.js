

document.getElementById("b1").onclick = function(){
    document.getElementById("input").value += "1";
}
document.getElementById("b2").onclick = function(){
    document.getElementById("input").value += "2";
    }
document.getElementById("b3").onclick = function(){
    document.getElementById("input").value += "3";
    }
document.getElementById("b4").onclick = function(){
    document.getElementById("input").value += "4";
    }
document.getElementById("b5").onclick = function(){
    document.getElementById("input").value += "5";
        }
document.getElementById("b6").onclick = function(){
    document.getElementById("input").value += "6";
    }
document.getElementById("b7").onclick = function(){
    document.getElementById("input").value += "7";
    }
document.getElementById("b8").onclick = function(){
    document.getElementById("input").value += "8";
    }
document.getElementById("b9").onclick = function(){
    document.getElementById("input").value += "9";
                    }
document.getElementById("b0").onclick = function(){
    document.getElementById("input").value += "0";
    }
document.getElementById("ac").onclick = function(){
    document.getElementById("input").value = "";
    }
document.getElementById("del").onclick = function(){
    document.getElementById("input").value = document.getElementById("input").value.slice(0, "-1");
    }
document.getElementById("b+").onclick = function(){
    document.getElementById("input").value += "+";
    }
document.getElementById("b-").onclick = function(){
    document.getElementById("input").value += "-";
    }
document.getElementById("b*").onclick = function(){
    document.getElementById("input").value += "*";
    }
document.getElementById("b/").onclick = function(){
    document.getElementById("input").value += "/";
    }
document.getElementById("b.").onclick = function(){
    document.getElementById("input").value += ".";
    }
document.getElementById("bresult").onclick = function(){
    document.getElementById("input").value = eval(document.getElementById("input").value);
    }