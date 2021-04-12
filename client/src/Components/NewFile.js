import React from "react";
import ToolBar from "./ToolBar";
import FontEvent from "./FontEvent";
import ImageEvent from "./ImageEvent";
import "../styles/newfile.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

function handleClick(e) {
	console.log(e);
}
// all event functions for the functionDataBase variable.
function clearEvent() {
  const input = document.getElementById("main-doc");
  input.value = "";
}

function saveEvent() {
  const input = document.getElementById("main-doc");
}

function homeEvent() {
  return;
}

function fontEvent() {
  const span = document.getElementById("font-window");
  span.style.display = "block";
}

function imageEvent() {
  const span = document.getElementById("image-window");
  span.style.display = "block";
}

function zoomEvent() {
  return;
}

function insertEvent() {
  return;
}

export default function NewFile() {
	const functionDataBase = {}
  	menuItems.dropdown.forEach(obj => {
  	  obj.content.forEach(element => {
  	    switch (element) {
  	      case "Clear":
  	        functionDataBase[element] = clearEvent;
  	        break;
  	      case "Save":
  	        functionDataBase[element] = saveEvent;
  	        break;
  	      case "Home":
  	        functionDataBase[element] = homeEvent;
  	        break;
  	      case "Font":
  	        functionDataBase[element] = fontEvent;
  	        break;
  	      case "Image":
  	        functionDataBase[element] = imageEvent;
  	        break;
  	      case "Zoom":
  	        functionDataBase[element] = zoomEvent;
  	        break;
  	      case "Insert":
  	        functionDataBase[element] = insertEvent;
  	        break;
  	    }
  	  })
  	})
    return (
        <div className="newfile" id="newfile">
            <ToolBar functionDataBase={functionDataBase} />
            <br />
            <div className="paper">
              <textarea id="main-doc"></textarea>
            </div>
            <FontEvent />
            <ImageEvent />
        </div>
    );
}
