const mainRemove = document.getElementById("main").remove()

const newHeader = document.createElement("h1");

newHeader.setAttribute('id', 'victory')

const headerText = document.getElementById("victory");

newHeader.textContent = "Big Bill is the champion"

document.body.append(newHeader);

/*
const mainRemove = document.querySelector("main").remove();
*/