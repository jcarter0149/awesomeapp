/* Modules
    1. Creating fragments
    2. Creating components with factories
    3. Adding event listeners to components
    4. Adding components to DOM
    5. Clearing fields
*/
const DomBuilder = require("./DOMbuilder")
const CardFactory = require("./cardFactory")
const ButtonFactory = require("./buttonFactory")
const InputFieldFactory = require ("./inputFactory")

// Final output DOM component reference
const output = document.querySelector(".output")

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

const createCardButton = ButtonFactory("button--submit", "Create Card", function () {
    // 1. Get value of input field
    const userEntry = cardTextInput.value

    // 2. Create card component with text inside
    output.appendChild(CardFactory("card", userEntry))

    cardTextInput.value = ""
})

const cardTextInput = InputFieldFactory("input--text", "Enter card text here", "text")

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)

DomBuilder(fragment, ".output")
// output.appendChild(fragment)