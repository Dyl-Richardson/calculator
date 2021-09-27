let main = document.querySelector("main")

function createCalculator () {
    let p = document.createElement("p");
    p.className = "resultat"
    main.appendChild(p)

    let buttonCreateP = document.createElement("input");
    buttonCreateP.innerText = "("
    buttonCreateP.value = "("
    buttonCreateP.type = "button"
    buttonCreateP.addEventListener("click", e => {
        let text = document.createTextNode("(")
        p.appendChild(text)
    })
    main.appendChild(buttonCreateP)

    let buttonCreateP2 = document.createElement("input");
    buttonCreateP2.innerText = ")"
    buttonCreateP2.value = ")"
    buttonCreateP2.type = "button"
    buttonCreateP2.addEventListener("click", e => {
        let text = document.createTextNode(")")
        p.appendChild(text)
    })
    main.appendChild(buttonCreateP2)

    let buttonCreatePourcentage = document.createElement("input");
    buttonCreatePourcentage.innerText = "%"
    buttonCreatePourcentage.value = "%"
    buttonCreatePourcentage.type = "button"
    buttonCreatePourcentage.addEventListener("click", e => {
        let text = document.createTextNode("/100*")
        p.appendChild(text)
    })
    main.appendChild(buttonCreatePourcentage)
    

    let buttonCreateClear = document.createElement("input");
    buttonCreateClear.innerText = "C"
    buttonCreateClear.value = "C"
    buttonCreateClear.type = "button"
    buttonCreateClear.addEventListener("click", e => {
        let text = document.querySelector("p")
        while(text.firstChild) {
            text.removeChild(text.firstChild);
        }
    })
    main.appendChild(buttonCreateClear)

    let buttonCreate7 = document.createElement("input")
    buttonCreate7.innerText = 7
    buttonCreate7.className = "number"
    buttonCreate7.value = 7
    buttonCreate7.type = "button"
    buttonCreate7.addEventListener("click", e => {
        let text = document.createTextNode("7")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate7)

    let buttonCreate8 = document.createElement("input")
    buttonCreate8.innerText = 8
    buttonCreate8.className = "number"
    buttonCreate8.value = 8
    buttonCreate8.type = "button"
    buttonCreate8.addEventListener("click", e => {
        let text = document.createTextNode("8")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate8)

    let buttonCreate9 = document.createElement("input")
    buttonCreate9.innerText = 9
    buttonCreate9.className = "number"
    buttonCreate9.value = 9
    buttonCreate9.type = "button"
    buttonCreate9.addEventListener("click", e => {
        let text = document.createTextNode("9")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate9)

    let buttonCreateDiv = document.createElement("input")
    buttonCreateDiv.innerText = "/"
    buttonCreateDiv.value = "/"
    buttonCreateDiv.type = "button"
    buttonCreateDiv.addEventListener("click", e => {
        let text = document.createTextNode("/")
        p.appendChild(text)
    })
    main.appendChild(buttonCreateDiv)

    let buttonCreate4 = document.createElement("input")
    buttonCreate4.innerText = 4
    buttonCreate4.className = "number"
    buttonCreate4.value = 4
    buttonCreate4.type = "button"
    buttonCreate4.addEventListener("click", e => {
        let text = document.createTextNode("4")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate4)
     
    let buttonCreate5 = document.createElement("input")
    buttonCreate5.innerText = 5
    buttonCreate5.className = "number"
    buttonCreate5.value = 5
    buttonCreate5.type = "button"
    buttonCreate5.addEventListener("click", e => {
        let text = document.createTextNode("5")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate5)

    let buttonCreate6 = document.createElement("input")
    buttonCreate6.innerText = 6
    buttonCreate6.className = "number"
    buttonCreate6.value = 6
    buttonCreate6.type = "button"
    buttonCreate6.addEventListener("click", e => {
        let text = document.createTextNode("6")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate6)

    let buttonCreateX = document.createElement("input")
    buttonCreateX.innerText = "X"
    buttonCreateX.value = "x"
    buttonCreateX.type = "button"
    buttonCreateX.addEventListener("click", e => {
        let text = document.createTextNode("*")
        p.appendChild(text)
    })
    main.appendChild(buttonCreateX)

    let buttonCreate1 = document.createElement("input")
    buttonCreate1.innerText = 1
    buttonCreate1.className = "number"
    buttonCreate1.value = 1
    buttonCreate1.type = "button"
    buttonCreate1.addEventListener("click", e => {
        let text = document.createTextNode("1")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate1)

    let buttonCreate2 = document.createElement("input")
    buttonCreate2.innerText = 2
    buttonCreate2.className = "number"
    buttonCreate2.value = 2
    buttonCreate2.type = "button"
    buttonCreate2.addEventListener("click", e => {
        let text = document.createTextNode("2")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate2)

    let buttonCreate3 = document.createElement("input")
    buttonCreate3.innerText = 3
    buttonCreate3.className = "number"
    buttonCreate3.value = 3
    buttonCreate3.type = "button"
    buttonCreate3.addEventListener("click", e => {
        let text = document.createTextNode("3")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate3)

    let buttonCreateSub = document.createElement("input")
    buttonCreateSub.innerText = "-"
    buttonCreateSub.value = "-"
    buttonCreateSub.type = "button"
    buttonCreateSub.addEventListener("click", e => {
        let text = document.createTextNode("-")
        p.appendChild(text)
    })
    main.appendChild(buttonCreateSub)

    let buttonCreate0 = document.createElement("input")
    buttonCreate0.innerText = 0
    buttonCreate0.className = "number"
    buttonCreate0.value = 0
    buttonCreate0.type = "button"
    buttonCreate0.addEventListener("click", e => {
        let text = document.createTextNode("0")
        p.appendChild(text)
    })
    main.appendChild(buttonCreate0)

    let buttonCreatePoint = document.createElement("input")
    buttonCreatePoint.innerText = "."
    buttonCreatePoint.value = "."
    buttonCreatePoint.type = "button"
    buttonCreatePoint.addEventListener("click", e => {
        let text = document.createTextNode(".")
        p.appendChild(text)
    })
    main.appendChild(buttonCreatePoint)

    let buttonCreateTotal = document.createElement("input")
    buttonCreateTotal.innerText = "="
    buttonCreateTotal.className = "total"
    buttonCreateTotal.value = "="
    buttonCreateTotal.type = "button"
    buttonCreateTotal.addEventListener("click", e => {
        let value = document.querySelector("p").textContent
        let text = document.querySelector("p")
        text.innerText = computeResult(value)
    })
    main.appendChild(buttonCreateTotal)

    let buttonCreatePlus = document.createElement("input")
    buttonCreatePlus.innerText = "+"
    buttonCreatePlus.value = "+"
    buttonCreatePlus.type = "button"
    buttonCreatePlus.addEventListener("click", e => {
        let text = document.createTextNode("+")
        p.appendChild(text)
    })
    main.appendChild(buttonCreatePlus)

    function computeResult(str){
        return Function('return ' + str)()
      }
}
createCalculator()