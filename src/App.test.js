import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./Nav";
import Hero from "./Hero";
import ProjectGallery from "./ProjectGallery";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import ImageGallery from "./ImageGallery";
import ImageCard from "./ImageCard";
import Images from "./Images";
import Footer from "./Footer";

describe("Portfolio App Components", () => {
  it("renders the App without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<App />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Nav without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Nav />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Hero without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Hero />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Projects Gallery without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ProjectGallery />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Project Card without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ProjectCard project={Projects[0]} />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Image Gallery without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ImageGallery />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Image Card without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ImageCard image={Images[0]} />, div);

    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the Footer without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Footer />, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
