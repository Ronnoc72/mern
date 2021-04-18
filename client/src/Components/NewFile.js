import React, {useEffect} from "react";
import ToolBar from "./ToolBar";
import FontEvent from "./FontEvent";
import ImageEvent from "./ImageEvent";
import ZoomEvent from "./ZoomEvent";
import "../styles/newfile.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

// all event functions for the functionDataBase variable.
function clearEvent() {
  const input = document.getElementById("main-doc");
  input.value = "";
}

function saveEvent() {
  	const input = document.getElementById("main-doc");
	let title = document.getElementById("title").value;
	if (!title) {
		title = "Untitled Doc";
	}
	let styles = {};
	const styleKeys = Object.values(input.style);
	for (let key in styleKeys) {
		styles[styleKeys[key]] = input.style[styleKeys[key]]
	}
	fetch(`http://localhost:9000/save/${title}/${input.value}/${JSON.stringify(styles)}/${localStorage.username}`);
}

function homeEvent() {
  window.location.href = `http://localhost:3000/home`;
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

export default function NewFile({match}) {
	useEffect(() => {
		if (match.params.open) {
			loadInfo();
		}
	})
	const loadInfo = async () => {
		const info = await fetch(`http://localhost:9000/openfile/${localStorage.username}/${localStorage.fileID}`)
		.then(res => res.json()).then(res => console.log(res))
		.catch(err => console.log(err));
		document.getElementById('main-doc').value = info.text;
	}
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
