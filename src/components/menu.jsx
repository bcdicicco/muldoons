import React, { Component } from "react";
import cover from "../menuCover.jpg";
import appetizer from "../menuAppetizers.jpg";
import dinners from "../menuDinners.jpg";
import special from "../menuSpecialties.jpg";
import toppings from "../menuToppings.jpg";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Menu Page</h1>
        <img src={cover}></img>
        <img src={appetizer}></img>
        <img src={dinners}></img>
        <img src={special}></img>
        <img src={toppings}></img>
      </div>
    );
  }
}

export default Menu;
