import React, { Component } from "react";
import ToolBar from "./ToolBar";
import "../styles/newfile.css";

class NewFile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
}

export default NewFile;
