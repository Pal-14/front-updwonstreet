import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Carousel extends Component {
  componentDidMount() {
    const options = {
      dist: -100,
      shift: -50,
    };
    M.Carousel.init(this.Carousel, options);

    //Instance Plugin
    // let instance = M.Carousel.getInstance(this.Carousel);
    // instance.next(2);
  }

  Url = `https://backimmo.osc-fr1.scalingo.io/get-public-pic/`;

  render() {
    return (
      <div className="containCarousel">
        <div
          ref={(Carousel) => {
            this.Carousel = Carousel;
          }}
          className="carousel"
        >
          <a class="carousel-item" href="#one!">
            <img
              alt="img"
              className
              src={`${this.Url}${this.props?.item?.itemPublicData?.itemPicturesFromUser[0]}`}
            />
          </a>
          <a class="carousel-item" href="#two!">
            <img
              alt="img1"
              src={`${this.Url}${this.props?.item?.itemPublicData?.itemPicturesFromUser[1]}`}
            />
          </a>
          <a class="carousel-item" href="#three!">
            <img
              alt="img2"
              src={`${this.Url}${this.props?.item?.itemPublicData?.itemPicturesFromUser[2]}`}
            />
          </a>
          <a class="carousel-item" href="#four!">
            <img
              alt="img3"
              src={`${this.Url}${this.props?.item?.itemPublicData?.itemPicturesFromUser[3]}`}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
