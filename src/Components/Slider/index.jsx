import React from "react";
import { Carousel } from "antd";

import SliderItem from "./SliderItem";

import { sliderItems } from "@/shared/constants/AppConst";

// import styles from "./Slider.module.scss"
import Img from "@/assets/img3.webp";

function Slider() {
  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
    paddingBottom: "23%",
    height: "100%",
    position: "absolute",
    width: "100%",
  };
  return (
    <>
      <Carousel autoplay>
        {sliderItems.map((e) => {
          const { caption, key } = e;
          return (
            <div key={key}>
              <SliderItem img={Img} caption={caption} style={contentStyle}>
                1
              </SliderItem>
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default Slider;
