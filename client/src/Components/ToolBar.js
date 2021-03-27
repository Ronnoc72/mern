import React from "react";
import "../styles/toolbar.css";

export default function ToolBar() {
  const MenuItems = ["File", "Edit", "View"];
  const fileDropDown = ["Clear Text", "Save", "Home"];
  const fileDropDownItems = fileDropDown.map(item => {
    return <div className="dropdown" key={item}>{item}</div>;
  })
  const listItems = MenuItems.map(item => {
    return <li key={item}>{item}</li>;
  })
  return (
    <div className="toolbar">
      <input type="text"></input>
      <ul>
        {listItems}
        {fileDropDownItems}
      </ul>
    </div>
  );
}