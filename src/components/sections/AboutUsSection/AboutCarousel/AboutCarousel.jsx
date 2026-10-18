"use client";

import "./AboutCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function AboutCarousel() {
  return (
    <Carousel fade className="aboutCarousel">
      <Carousel.Item>
        <Image
          src="/rickster.jpg"
          alt="rickey"
          text="First slide"
          height="500"
          width="700"
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/chocoSprinkle.png"
          alt="choco"
          text="Second slide"
          height="500"
          width="700"
        />
        <Carousel.Caption />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/donutBox.png"
          alt="box"
          text="Third slide"
          height="500"
          width="700"
        />
        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
