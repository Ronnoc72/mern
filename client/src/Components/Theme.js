import React from "react";
import "../styles/theme.css";
import menu from "../text.json";
const menuItems = menu.menuItems;

export default function Theme() {
	const themeList = menuItems.themes.map(item => {
		return <div key={item.name} className="theme-doc" onClick={() => {
			return;
		}}><p>{item.name}</p></div>
	});
  return (
    <div>
			<button onClick={() => {
				window.location.href = `http://localhost:3000/home`;
			}}>HOME</button>
      <div className="theme-docs">
				{themeList}
			</div>
    </div>
  );
}