import React from "react";
import ToolBar from "./ToolBar";
import "../styles/newfile.css";

export default function NewFile() {
    return (
        <div className="newfile">
            <ToolBar />
            <br />
            <div className="paper">
              <textarea></textarea>
            </div>
        </div>
    );
}

