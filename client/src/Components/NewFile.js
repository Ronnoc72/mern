import React from "react";
import ToolBar from "./ToolBar";
import FontEvent from "./FontEvent";
import ImageEvent from "./ImageEvent";
import ZoomEvent from "./ZoomEvent";
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
	const paper = document.getElementById("paper");
	const title = document.getElementById("title").value;
	const inputStyles = input.style;
	const paperStyles = paper.style;
	fetch(`http://localhost:9000/save/${inputStyles}/${paperStyles}/${title}`);
}

function homeEvent() {
  console.log("Home");
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
  const span = document.getElementById("zoom-window");
  span.style.display = "block";
}

function insertEvent() {
  return;
}

export default function NewFile() {
	const functionDataBase = {}
  	menuItems.dropdown.forEach(obj => {
			const arr = Object.values(obj);
			arr[0].forEach(element => {
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
			});
  	});
    return (
        <div className="newfile" id="newfile">
            <ToolBar functionDataBase={functionDataBase} />
            <br />
            <div className="paper" id="paper">
              <textarea id="main-doc"></textarea>
            </div>
            <FontEvent />
            <ImageEvent />
						<ZoomEvent />
        </div>
    );
}
