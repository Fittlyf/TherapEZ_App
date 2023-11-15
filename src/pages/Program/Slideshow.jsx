import { useEffect, useRef, useState } from "react";
import First from "../../Images/slideshow_1.gif"
import Second from "../../Images/slideshow_2.gif"
import Third from "../../Images/slideshow_3.jpeg"
import Fourth from "../../Images/slideshow_4.jpeg"

import './slideshow.css'

const colors = ["#0088FE", "#00C49F", "#0088FE", "#00C49F"];
const content = [<img src={First} />, <img src={Second} />, <img src={Third} />, <img src={Fourth} />];
const delay = 5000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow w-screen">
      <div
        className="slideshowSlider w-full h-full"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide w-full h-full"
            key={index}
          >
            <div className="w-full flex justify-center h-[500px]">
              {content[index]}
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}