//final output DOM component reference
const output = document.querySelector(".output")

//frag to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

//create factory function for components
const inputFieldFactory = (classList, defaultPlaceHolderText, type) => {
   const inputField = document.createElement("input")
   inputField.setAttribute("type", type)
   inputField.classList = classList
   inputField.placeholder = defaultPlaceHolderText
   return inputField
}

//create input component

//create button component
const buttonfactory = (classList, textContent) => {
   const theButton = document.createElement("button")
   theButton.classList = classList
   theButton.textContent = textContent
   return theButton
}

const createCardButton = buttonfactory("button--submit", "Create Card")
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

/*
attach event listener to button
*/
createCardButton.addEventListener("click", function(){
    // 1. get value of input field
    const userEntry = cardTextInput.value
    // 2. create card component with text inside 
})

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)



//create card component



output.appendChild(fragment)