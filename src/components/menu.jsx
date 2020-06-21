import React, { Component } from "react";
import cover from "../menuCover.jpg";
import appetizer from "../menuAppetizers.jpg";
import dinners from "../menuDinners.jpg";
import special from "../menuSpecialties.jpg";
import toppings from "../menuToppings.jpg";
import "../css/menu.css";
import Carousel from "react-bootstrap/Carousel";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="overrides">
        <Carousel interval={null} fade={true}>
          <Carousel.Item>
            <img className="d-block w-50" src={cover} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={appetizer} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={dinners} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={special} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-50" src={toppings} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Menu;
