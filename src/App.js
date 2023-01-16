import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Nav from "./Components/nav/Nav";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import About from "./views/About/About";
import Welcome from "./views/Welcome/Welcome";
import Works from "./views/Works/Works";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <About />
        <Works />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
