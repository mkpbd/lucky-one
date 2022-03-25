import React from "react";
import { Col, Card } from "react-bootstrap";

const Product = (props) => {
  const { id, img, name, newPrice } = props.product;
  console.log(props.product);
  return (
    <>
      <Col sm={4}>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Subtitle>Price: ${newPrice}</Card.Subtitle>
          </Card.Body>

          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
