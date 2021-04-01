import React from "react";
import "../styles/newfile.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

function handleInput(e) {
	const input = document.getElementById("main-doc");
	input.style.fontSize = `${e.target.value}px`;
}

export default function FontEvent() {
	const fontList = menuItems.fonts.map(item => {
		return <div id="font-id" onClick={() => {
			const input = document.getElementById("main-doc");
			const span = document.getElementById("font-window");
			input.style.fontFamily = item;
			span.style.display = "none";
		}}>{item}</div>;
	});
	return (
			<span id="font-window">
      	<input type="range" min="1" max="72" step="1" id="font-id" onInput={handleInput} />
      	<div id="font-id">
      		{fontList}
      	</div>
      </span>
		);
}