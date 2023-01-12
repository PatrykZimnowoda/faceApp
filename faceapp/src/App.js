import "./App.css";
import Rank from "./Components/Rank/Rank";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import "tachyons";
import ParticlesBg from "particles-bg";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognition />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
