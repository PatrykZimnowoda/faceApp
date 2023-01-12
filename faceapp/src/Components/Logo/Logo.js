import "./Logo.css";
import Brain from "./Brain.png";

import Tilt from "react-parallax-tilt";
const Logo = () => {
  return (
    <div>
      <Tilt
        className="pa3 Tilt shadow-2 ma4 mt0 br1"
        style={{ max: 50, height: 150, width: 150 }}
      >
        <img alt="brain" style={{ paddingTop: " 15px" }} src={Brain} />
      </Tilt>
    </div>
  );
};

export default Logo;
