import React from "react";
import "../styles/toolbar.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

export default function ToolBar() {
  const listItems = menuItems.header.map(item => {
    return <div className="list-item" key={item}>{item}
    <div className="dropdown">{menuItems.dropdown[item.toLowerCase()].map(drop => {
      const padding = menuItems.dropdown[item.toLowerCase()].indexOf(drop);
      return <p style={{paddingTop: padding*10+"px"}}>{drop}</p>
    })}</div></div>;
  })
  return (
    <div className="toolbar">
      <input type="text"></input>
      <div className="list-items">
        {listItems}
      </div>
    </div>
  );
}