import React from "react";
import "../styles/toolbar.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

function handleClick(e) {
  if (document.getElementById("dropdown")) {
    if (e.path[0].id === "dropitem") return;
    const toolbar = document.getElementById("toolbar");
    toolbar.removeChild(document.getElementById("dropdown"));
  }
  if (document.getElementById("font-window").style.display === "block") {
    if (e.path[0].id === "font-window" || e.path[0].id === "font-id") return;
    document.getElementById("font-window").style.display = "none";
  }
  if (document.getElementById("image-window").style.display === "block") {
    if (e.path[0].id === "image-window" || e.path[0].id === "image-id") return;
    document.getElementById("image-window").style.display = "none";
  }
}

export default function ToolBar(props) {
  document.onclick = handleClick;
  const listItems = menuItems.header.map(item => {
		return <div id={item} className="list-item" onClick={() => {
      const toolbar = document.getElementById("toolbar");
      const doc = document.getElementById(item);
      const rect = doc.getBoundingClientRect();
      if (document.getElementById("dropdown")) {
        toolbar.removeChild(document.getElementById("dropdown"));
      }
      const spanElm = document.createElement("span");
      spanElm.classList.add("dropdown");
      spanElm.id = "dropdown";
      spanElm.style.top = `${rect.top}px`;
      spanElm.style.left = `${rect.x}px`;
      spanElm.style.width = `${rect.width}px`;
      let objIndex = 0;
      menuItems.dropdown.map(obj => {
        if (obj.name == item.toLowerCase()) {
          objIndex = menuItems.dropdown.indexOf(obj);
        }
      });
      menuItems.dropdown[objIndex].content.map(drop => {
        let p = document.createElement('p');
        p.onclick = props.functionDataBase[drop];
        p.id = "dropitem"
        p.style.width = `${rect.width}px`;
        let br = document.createElement("br");
        p.innerHTML = drop;
        spanElm.appendChild(p);
        spanElm.appendChild(br);
      });
      toolbar.appendChild(spanElm);
    }}>{item}</div>;
  });
  return (
    <div className="toolbar" id="toolbar">
	  <span className="dropdown" id="dropdown"></span>
      <input type="text"></input>
      <div className="list-items">
        {listItems}
      </div>
    </div>
  );
}
