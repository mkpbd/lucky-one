import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
const ChoiseForMe = (props) => {

    //console.log(props);

     const {img, name, newPrice} = props.choise;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Choise For Me
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product Name: {name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img className='thambnail' src={img} alt="image not found" />

              <h4 className='my-4'>Price: {newPrice}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ChoiseForMe;