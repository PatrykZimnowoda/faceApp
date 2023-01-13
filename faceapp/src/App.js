import "./App.css";
import Rank from "./Components/Rank/Rank";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import "tachyons";
import Clarifai from "clarifai";
import ParticlesBg from "particles-bg";
import { Component } from "react";

const app = new Clarifai.App({
  apiKey: "235a898551764318bc27a47adf82a0e3",
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }
  OnInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  OnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log("click");
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      });
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          OnInputChange={this.OnInputChange}
          OnSubmit={this.OnSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
        <ParticlesBg type="cobweb" bg={true} />
      </div>
    );
  }
}
export default App;
