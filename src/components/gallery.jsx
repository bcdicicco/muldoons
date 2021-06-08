import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import bbq from "../assets/bbqChicken.jpg";
import meat from "../assets/meatPizza.jpg";
import "../css/gallery.css";
import { Container, Row, Col } from "react-bootstrap";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <Row className="mt-2 mr-auto ml-auto mb-1">
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
        </Row>

        <Row className="mt-2 mr-auto ml-auto mb-1">
          <CardDeck id="Deck2">
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
        </Row>

        <Row className="mt-2 mr-auto ml-auto mb-1">
          <CardDeck id="Deck3">
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
        </Row>
      </Container>
    );
  }
}

export default Gallery;
