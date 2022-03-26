import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    const {img, name, id} = props.cart;
    return (
        <>
                <div className='d-flex mt-2 mx-2'>
                    <img src={img} alt="not support image" className='img-thumbnail img' />
                    <h3>{name}</h3>
                    <h6>icon not found</h6>
                </div>
          
            
      </>
    );
};

export default Cart;