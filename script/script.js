let main = document.querySelector("main")

function createCalculator () {
    let p = document.createElement("p");
    p.className = "resultat"
    main.appendChild(p)

    let buttonCreateP = document.createElement("button");
    buttonCreateP.innerText = "("
    main.appendChild(buttonCreateP)

    let buttonCreateP2 = document.createElement("button");
    buttonCreateP2.innerText = ")"
    main.appendChild(buttonCreateP2)

    let buttonCreatePourcentage = document.createElement("button");
    buttonCreatePourcentage.innerText = "%"
    main.appendChild(buttonCreatePourcentage)

    let buttonCreateClear = document.createElement("button");
    buttonCreateClear.innerText = "C"
    main.appendChild(buttonCreateClear)

    let buttonCreate7 = document.createElement("button")
    buttonCreate7.innerText = 7
    buttonCreate7.className = "number"
    main.appendChild(buttonCreate7)

    let buttonCreate8 = document.createElement("button")
    buttonCreate8.innerText = 8
    buttonCreate8.className = "number"
    main.appendChild(buttonCreate8)

    let buttonCreate9 = document.createElement("button")
    buttonCreate9.innerText = 9
    buttonCreate9.className = "number"
    main.appendChild(buttonCreate9)

    let buttonCreateDiv = document.createElement("button")
    buttonCreateDiv.innerText = "/"
    main.appendChild(buttonCreateDiv)

    let buttonCreate4 = document.createElement("button")
    buttonCreate4.innerText = 4
    buttonCreate4.className = "number"
    main.appendChild(buttonCreate4)
     
    let buttonCreate5 = document.createElement("button")
    buttonCreate5.innerText = 5
    buttonCreate5.className = "number"
    main.appendChild(buttonCreate5)

    let buttonCreate6 = document.createElement("button")
    buttonCreate6.innerText = 6
    buttonCreate6.className = "number"
    main.appendChild(buttonCreate6)

    let buttonCreateX = document.createElement("button")
    buttonCreateX.innerText = "X"
    main.appendChild(buttonCreateX)

    let buttonCreate1 = document.createElement("button")
    buttonCreate1.innerText = 1
    buttonCreate1.className = "number"
    main.appendChild(buttonCreate1)

    let buttonCreate2 = document.createElement("button")
    buttonCreate2.innerText = 2
    buttonCreate2.className = "number"
    main.appendChild(buttonCreate2)

    let buttonCreate3 = document.createElement("button")
    buttonCreate3.innerText = 3
    buttonCreate3.className = "number"
    main.appendChild(buttonCreate3)

    let buttonCreateSub = document.createElement("button")
    buttonCreateSub.innerText = "-"
    main.appendChild(buttonCreateSub)

    let buttonCreate0 = document.createElement("button")
    buttonCreate0.innerText = 0
    buttonCreate0.className = "number"
    main.appendChild(buttonCreate0)

    let buttonCreatePoint = document.createElement("button")
    buttonCreatePoint.innerText = "."
    main.appendChild(buttonCreatePoint)

    let buttonCreateTotal = document.createElement("button")
    buttonCreateTotal.innerText = "="
    main.appendChild(buttonCreateTotal)

    let buttonCreatePlus = document.createElement("button")
    buttonCreatePlus.innerText = "+"
    main.appendChild(buttonCreatePlus)
}
createCalculator()

let button = document.querySelectorAll("button");
let total = 0;

let resultat = document.querySelector(".resultat")
resultat.innerText = total

let test = document.getElementsByTagName("button")[5].value

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", e => {
        resultat.innerText = this.value
    })
}