const createCalculator = ["(", ")", "%", "C", 7, 8, 9, "/", 4, 5, 6, "X", 1, 2, 3, "-", 0, ".", "=", "+"];

// Egal
function computeResult(str){
  return Function('return ' + str)()
}

// Creation ecran
let main = document.querySelector("main");
let ecran = document.createElement("p");
ecran.className = "ecran";
main.appendChild(ecran);

// Creation calcul log
let log = document.createElement("h4")
log.innerText = "Resultat log :"
document.getElementsByTagName("section")[0].appendChild(log)

// Creation button
for (let i =0; i < createCalculator.length; i++) {
  let button = document.createElement("button");
  button.innerText = createCalculator[i]

  button.addEventListener("click", e => {
    if (createCalculator[i] === "=") {
        let log2 = document.createElement("p")
        log2.innerText = ecran.innerText
        let resultfinal = Math.round((computeResult(ecran.innerText) + Number.EPSILON) * 100) / 100
        document.getElementsByTagName("section")[0].appendChild(log2)
        ecran.innerText = resultfinal
        log2.textContent += " = "+ resultfinal
    }
    else if (createCalculator[i] === "%") {
        let text = document.createTextNode(" /100*");
        text.textContent += "  ";
        ecran.appendChild(text);
    }
    else if (createCalculator[i] === "C") {
        ecran.innerText = "";
    }
    else if (createCalculator[i] === "X") {
        let text = document.createTextNode(" *");
        text.textContent += "  ";
        ecran.appendChild(text);
    }
    else if (createCalculator[i] === "+") {
        let text = document.createTextNode(" +");
        text.textContent += "  ";
        ecran.appendChild(text);
    }
    else if (createCalculator[i] === "-"){
        let text = document.createTextNode(" -");
        text.textContent += "  ";
        ecran.appendChild(text);
    }
    else if (createCalculator[i] === "/") {
        let text = document.createTextNode(" /");
        text.textContent += "  ";
        ecran.appendChild(text);
    }
    else {
        let text = document.createTextNode(createCalculator[i])
        ecran.appendChild(text);
    }
  })
  main.appendChild(button);
}

// Event clavier

document.addEventListener('keydown', function(event) {
    if (event.key == "(") {
        let text = document.createTextNode("(");
        ecran.appendChild(text);
    }

    else if (event.key == ")") {
        let text = document.createTextNode(")");
        ecran.appendChild(text);
    }

    else if (event.key == "%") {
        let text = document.createTextNode(" /100*");
        text.textContent += "  ";
        ecran.appendChild(text);
    }

    else if (event.key == "c") {
        ecran.innerText = "";
    }

    else if (event.key == "0") {
        let text = document.createTextNode("0");
        ecran.appendChild(text);
    }

    else if (event.key == "1") {
        let text = document.createTextNode("1");
        ecran.appendChild(text);
    }

    else if (event.key == "2") {
        let text = document.createTextNode("2");
        ecran.appendChild(text);
    }

    else if (event.key == "3") {
        let text = document.createTextNode("3");
        ecran.appendChild(text);
    }

    else if (event.key == "4") {
        let text = document.createTextNode("4");
        ecran.appendChild(text);
    }

    else if (event.key == "5") {
        let text = document.createTextNode("5");
        ecran.appendChild(text);
    }

    else if (event.key == "6") {
        let text = document.createTextNode("6");
        ecran.appendChild(text);
    }

    else if (event.key == "7") {
        let text = document.createTextNode("7");
        ecran.appendChild(text);
    }

    else if (event.key == "8") {
        let text = document.createTextNode("8");
        ecran.appendChild(text);
    }

    else if (event.key == "9") {
        let text = document.createTextNode("9");
        ecran.appendChild(text);
    }

    else if (event.key == "+") {
        let text = document.createTextNode(" +");
        text.textContent += "  ";
        ecran.appendChild(text);
    }

    else if (event.key == "-") {
        let text = document.createTextNode(" -");
        text.textContent += "  ";
        ecran.appendChild(text);
    }

    else if ((event.key == "*")
            || (event.key == "x")
            || (event.key == "X")) {
        let text = document.createTextNode(" *");
        text.textContent += "  ";
        ecran.appendChild(text);
    }

    else if ((event.key == "=") 
            ||(event.key == "Enter")){
        let log2 = document.createElement("li")
        log2.innerText = ecran.innerText
        let resultfinal = Math.round((computeResult(ecran.innerText) + Number.EPSILON) * 100) / 100
        document.getElementsByTagName("ul")[0].appendChild(log2)
        ecran.innerText = resultfinal
        log2.textContent += " = "+ resultfinal
    }

    else if (event.key == "/") {
        let text = document.createTextNode(" /");
        text.textContent += "  ";
        ecran.appendChild(text);
    }

    else if (event.key == ".") {
        let text = document.createTextNode(".");
        ecran.appendChild(text);
    }
})