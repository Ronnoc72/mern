import React, { Component } from "react";
import FileSection from "./FileSelection";
import '../styles/index.css';

export default function Home() {
  return (
    <div>
      <h1>Welcome Back <span id="username">{localStorage.username}</span>!</h1>
      <div className="home-page">
        <FileSection />
      </div>
    </div>
  );
}
