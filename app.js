const result = document.getElementById("result")
const Form = document.getElementById("form")
const Input = document.getElementById("input")
const Title = document.getElementById("title")
const tarjimonEng = (event) => {
    let word = Input.value

    switch (word) {
        case "apple":
            result.innerHTML = "olma"
            break;
        case "car":
            result.innerHTML = "mashina"
            break;
        default:
            result.innerHTML = "bu so'z serverda yo'q"
            break;
    }
}
const tarjimonUzb = (event) => {

    let word = Input.value
    switch (word) {
        case "olma":
            result.innerHTML = "apple"
            break;
        case "mashina":
            result.innerHTML = "car"
            break;
        default:
            result.innerHTML = "bu so'z serverda yo'q"
            break;
    }
}
let Switch = false
function switcher() {
    if (Switch) {
        console.log("yondi")
        Switch = false
        Title.innerHTML = "Uzbek tilidan ⬅️➡️ Ingliz tiliga"
    } else {
        console.log("o`chdi")
        Switch = true
        Title.innerHTML = "Ingliz tilidan ⬅️➡️ Uzbek tiliga"
    }
}
Form.addEventListener("submit", function (event) {
    event.preventDefault()
    if (Switch) {
        tarjimonEng()
    } else {
        tarjimonUzb()
    }
})