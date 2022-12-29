import "./slider.css";
import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

function Slider() {
  const images = [image1, image2, image3, image4];
  const newArray = Array.from({ length: images.length });
  const [clickIndex, setClickIndex] = useState(0);
  const handleSlider = (val) => {
    if (val === "prev") {
      if (clickIndex === 0) {
        setClickIndex(images.length - 1);
      } else {
        setClickIndex(clickIndex - 1);
      }
    } else {
      if (clickIndex === images.length - 1) {
        setClickIndex(0);
      } else {
        setClickIndex(clickIndex + 1);
      }
    }
  };
  return (
    <div className="slidermain">
      <h1>Slider</h1>
      <div className="slider">
        <div className="image-div">
          <button onClick={() => handleSlider("prev")}>prev</button>
          <img src={images[clickIndex]} alt="sliderimages" />
          <button onClick={() => handleSlider("next")}>next</button>
        </div>
        <br />
        <div className="circle">
          {newArray.map((_, index) => (
            <span
              key={index}
              className="circles"
              onClick={() => setClickIndex(index)}
              style={{
                backgroundColor: index === clickIndex ? "gray" : "white",
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
