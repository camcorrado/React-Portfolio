import React, { Component } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import ProjectGallery from "./ProjectGallery";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";
import "./fonts/Amiri-Regular.ttf";
import "./fonts/CinzelDecorative-Regular.ttf";

class App extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <Hero />
        <ProjectGallery />
        <ImageGallery />
        <Footer />
      </main>
    );
  }
}

export default App;
