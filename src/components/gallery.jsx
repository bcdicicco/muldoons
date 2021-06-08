import React, { Component } from "react";

import bbq from "../assets/bbqChicken.jpg";
import deluxe from "../assets/deluxe.jpg";
import panzerotti from "../assets/panzerotti.jpg";
import gbread from "../assets/gbread.jpg";
import canadian from "../assets/canadian.jpg";
import hawaiian from "../assets/hawaiian.jpg";
import mozza from"../assets/mozza.jpg";
import pepperoni from "../assets/pepperoni.jpg";

import "../css/gallery.css";
import { Container, Row, ResponsiveEmbed, Card, CardDeck } from "react-bootstrap";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <Container fluid>

        <Row className="mt-2 mr-auto ml-auto mb-1 justify-content-center">
          <CardDeck className="w-100" id="Deck1">

            <Card border="primary">
              <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={deluxe} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary">
            <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={hawaiian} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary">
            <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={canadian} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

          </CardDeck>
        </Row>

        <Row className="mt-2 mr-auto ml-auto mb-1 justify-content-center">
          <CardDeck className="w-100" id="Deck2">

            <Card border="primary">
              <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={pepperoni} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary">
            <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={gbread} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary">
            <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={mozza} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

          </CardDeck>
        </Row>

        <Row className="mt-2 mr-auto ml-auto mb-2 justify-content-center">
          <CardDeck className="w-100" id="Deck3">

            <Card border="primary">
              <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={panzerotti} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary">
            <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={panzerotti} />
              </ResponsiveEmbed>
              <Card.Body>
                <Card.Title>BBQ Chicken Pizza</Card.Title>
                <Card.Text>
                  Toppings: Chicken, Red Onions, Green Peppers, BBQ Sauce
                </Card.Text>
              </Card.Body>
            </Card>

            <Card border="primary">
            <ResponsiveEmbed aspectRatio="4by3">
                <Card.Img variant="top" src={bbq} />
              </ResponsiveEmbed>
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
