import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import bbq from "../bbqChicken.jpg";
import meat from "../meatPizza.jpg";
import "../css/gallery.css";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Gallery Page </h1>

        <CardDeck id="Deck1">
          <Card border="primary">
            <Card.Img variant="top" src={bbq} />
            <Card.Body>
              <Card.Title>BBQ Chicken Pizza</Card.Title>
              <Card.Text>
                Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={bbq} />
            <Card.Body>
              <Card.Title>BBQ Chicken Pizza</Card.Title>
              <Card.Text>
                Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={bbq} />
            <Card.Body>
              <Card.Title>BBQ Chicken Pizza</Card.Title>
              <Card.Text>
                Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Gallery;
