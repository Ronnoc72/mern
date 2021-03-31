import React from "react";
import "../styles/toolbar.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

function handleClick() {
	const doc = document.getElementById("File");
}

export default function ToolBar() {
  const listItems = menuItems.header.map(item => {
		return <div id={item} className="list-item" onClick={handleClick}>{item}</div>;
  });
  return (
    <div className="toolbar">
	  <span className="dropdown" id="dropdown"></span>
      <input type="text"></input>
      <div className="list-items">
        {listItems}
      </div>
    </div>
  );
}