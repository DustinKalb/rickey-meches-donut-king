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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/chocoSprinkle.png"
          alt="choco"
          text="Second slide"
          height="500"
          width="700"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/donutBox.png"
          alt="box"
          text="Third slide"
          height="500"
          width="700"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;
