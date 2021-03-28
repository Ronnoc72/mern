import React from "react";
import "../styles/toolbar.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

export default function ToolBar() {
  const listItems = menuItems.header.map(item => {
    return <div className="list-item" key={item}>{item}
      <div className="dropdown">
        <div className="dropdown-item">{menuItems.dropdown[item.toLowerCase()].map(drop => {
          return <div>{drop}</div>
      })}</div></div></div>;
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