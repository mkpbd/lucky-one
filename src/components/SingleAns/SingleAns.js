import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";
const SingleAns = (props) => {
  const { question, answear, diff } = props.data;

  return (
    <Col sm={12} className="px-4 my-3 shadow py-3">
      <Card>
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <Card.Text>{answear}</Card.Text>
          <ListGroup variant="flush">
            {diff.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleAns;
