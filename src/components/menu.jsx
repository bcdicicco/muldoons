import React, { Component } from "react";
import cover from "../assets/menuCover.jpg";
import appetizer from "../assets/menuAppetizers.jpg";
import dinners from "../assets/menuDinners.jpg";
import special from "../assets/menuSpecialties.jpg";
import toppings from "../assets/menuToppings.jpg";
import "../css/menu.css";
import Carousel from "react-bootstrap/Carousel";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="overrides container-fluid">
        <Carousel interval={null} fade={true} indicators={false}>
          <Carousel.Item>
            <img className="mx-auto d-block w-50" src={cover} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="mx-auto d-block w-50" src={appetizer} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="mx-auto d-block w-50" src={dinners} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="mx-auto d-block w-50" src={special} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className=" mx-auto d-block w-50" src={toppings} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Menu;
