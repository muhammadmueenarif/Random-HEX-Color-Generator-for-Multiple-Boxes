//this is container element.
const containerEl = document.querySelector(".container");

for(let index=0; index<50; index++) {
    //this is color container element.
    const colorContainerEl = document.createElement("div");
    //now we need to add class so we will use classlist. 
    colorContainerEl.classList.add("color-container");

    //since our main element is container element so we will append other things inside it.

    const colorCodeEl= document.createElement("span"); //it will create span
    colorCodeEl.classList.add("color-code"); //it will give class to span
    colorContainerEl.appendChild(colorCodeEl); //color container will have span element with class color-code

    const copyButtonEl= document.createElement("button"); //create button
    copyButtonEl.innerText = "Copy"; // button will have text copy.
    colorContainerEl.appendChild(copyButtonEl); //color container will have button with text copy inside it.

    containerEl.appendChild(colorContainerEl);

}

//now we will create function to generate color randomly. 6 digits random color code (#A-Z, 0-9).
function randomColor() {
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let colorCode = "";
    for(let index=0; index<colorCodeLength; index++) {
        const randomNum= Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum, randomNum+1); // it will store color and initiliaze also. 
        // substring accepts two arguments. one is starting index and other is ending index.
    }
    return colorCode; //it will return color code.
}

//now we will create function to generate random colors
const colorContainerEls = document.querySelectorAll(".color-container")
generateColors();

function generateColors() {
    for (let i = 0; i < colorContainerEls.length; i++) {
        const colorContainerEl = colorContainerEls[i];
        const newColorCode= randomColor();
        const colorCodeEl = colorContainerEl.querySelector(".color-code");
        colorCodeEl.style.backgroundColor = "#" + newColorCode;
        colorCodeEl.innerText = "#" + newColorCode;
    }
}

colorContainerEls.forEach((colorContainerEl)=> {
    const copyButtonEl = colorContainerEl.querySelector("button");
    const colorCodeEl = colorContainerEl.querySelector(".color-code");
    copyButtonEl.addEventListener("click", () => {
        const colorCode = colorCodeEl.innerText;
        copytoClipBoard(colorCode);
        });
})

// now we will create function to copy the color code. 
function copytoClipBoard(text) {
    navigator.clipboard.writeText(text)
    .then(()=> {
        alert("Copied to clipboard : " + text);
    })
    .catch((error)=> {
        console.log("Failed to copy to clipboard", error);
        
    })
}