import React from 'react';
import {Card,Button, Row, Col} from 'react-bootstrap';
import './Cart.css'
import {FaTrashAlt} from 'react-icons/fa'

const Cart = (props) => {
    const {img, name, id} = props.cart;
  //  const {removeProductFormCart} = props.removeProductFormCart;
    return (
        <>
                <Row className='my-2'>
                    <Col sm={4}>
                      <img src={img} alt="not support image" className='img-thumbnail img' />
                    </Col>
                    <Col sm={6}>
                        <h3 className='h-100'>{name}</h3>
                    </Col>
                    <Col sm={2}>
                        <Button className='btn btn-md btn-danger' onClick={()=> props.removeProductFormCart(id)}>
                            <FaTrashAlt></FaTrashAlt>
                        </Button>
                    </Col>
                </Row>
                
          
            
      </>
    );
};

export default Cart;