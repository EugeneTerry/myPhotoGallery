import { photoContent } from ".photos.js";

const mainContainer = document.querySelector("#container")

const render = () => {
  mainContainer.innerHTML = photoContent() 
}
