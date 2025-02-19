document.querySelector("h1").style.color = "red"

const outerDiv = document.querySelector('div')
outerDiv.style.backgroundColor = "blue"

const divChildren= Array.from(outerDiv.children) 
divChildren.forEach((elem) => {
    elem.style.backgroundColor = "yellow"
});

const mappings = {
    Invitation: "You are invited for event",
    Reminder: "You are reminded for task",
    Notice: "You have a notice from College",
    Message: "You have 7 messages",
}

divChildren.forEach((elem) => {
    const key = elem.children[0].innerText.trim(); 
    if (mappings[key]) {
        elem.children[1].innerText = mappings[key]; 
    }
});


const newElement = document.createElement("div")
const rootElement = document.querySelector("body")
rootElement.appendChild(newElement)

Object.entries(mappings).forEach((elem) => {
    const newChildDiv = document.createElement("div")
    newChildDiv.innerHTML = `
        <h4 style = "color: orange">${elem[0]}</h4>
        <p>${elem[1]}</p>
    `
    rootElement.appendChild(newChildDiv)
})

