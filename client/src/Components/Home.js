import React, { Component } from "react";
import FileSection from "./FileSelection";
import '../styles/index.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    callAPI() {
        fetch("http://localhost:9000/newfile")
            .then(res => res.text())
            .then(res => console.log(res))
            .catch(err => err);
    }
    render() {
        return (
            <div className="home-page">
                <FileSection />
            </div>
        );
    }
}

export default Home;
