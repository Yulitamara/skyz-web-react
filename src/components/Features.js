import imge from "../assets/imgs/level2-image2.png";
import Para from "./Para";

const Features = () => {
  return (
    <div className="features">
      <div className="right">
        <h1>Maximize your selling potential</h1>
        <Para />
        <Para />
        <Para />
      </div>
      <div className="left">
        <img src={imge} />
      </div>
    </div>
  );
};

export default Features;
