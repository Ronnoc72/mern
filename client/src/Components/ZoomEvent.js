import React from "react";
import "../styles/toolbar.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

function handleInput(e) {
  const input = document.querySelector("#main-doc");
  const paper = document.querySelectorAll(".paper")[0];
  paper.style.width = parseInt(e.target.value)*5+40+'%';
}

export default function ZoomEvent() {
	return (
			<span id="zoom-window">
				<div>
          <input type="range" min="1" max="5" step="1" id="zoom-id" onInput={handleInput} />
        </div>
			</span>
		);
}