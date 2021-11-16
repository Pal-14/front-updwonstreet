import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Carousel extends Component  {
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
  
  Url = `http://localhost:5000/get-public-pic/`;

  render() {
    return (
        <div className="containCarousel">
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >
            <a  href={() => false} class="carousel-item" href="#one!"><img className src={`${this.Url}${this.props.item?.itemPublicData?.itemPicturesFromUser[0]}`}/></a>
            <a  href={() => false} class="carousel-item" href="#two!"><img src={`${this.Url}${this.props.item?.itemPublicData?.itemPicturesFromUser[1]}`}/></a>
            <a  href={() => false} class="carousel-item" href="#three!"><img src={`${this.Url}${this.props.item?.itemPublicData?.itemPicturesFromUser[2]}`}/></a>
            <a  href={() => false} class="carousel-item" href="#four!"><img src={`${this.Url}${this.props.item?.itemPublicData?.itemPicturesFromUser[3]}`}/></a>
  
      </div>
      </div>
    );
  }
}

export default Carousel;
