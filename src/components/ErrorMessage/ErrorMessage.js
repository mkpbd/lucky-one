import React, { useState } from 'react';
import {Button, Row, Col,Toast} from 'react-bootstrap'

const ErrorMessage = (props) => {

  const {isDuplicateProduct} = props.isDuplicateProduct;

    console.log(props.isDuplicateProduct, "error message");
    const [showA, setShowA] = useState(props.isDuplicateProduct);
  const toggleShowA = () => setShowA(false);
  

  //console.log(showA, 'show Value')




  return (
    <Row>
      <Col md={12} className="mb-2">
        {/* <Toast show={showA} onClose={toggleShowA}> */}
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Duplicate Found</strong>
          </Toast.Header>
          {/* <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body> */}
        </Toast>
      </Col>
     
    </Row>
  );
};

export default ErrorMessage;