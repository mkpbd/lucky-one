
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from '../Product/Product';
const Shop = () => {
    // set shopping data 
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    // use effet  for fetch data json files 
    
    useEffect(()=>{
        fetch('data.json')
        .then(data => data.json())
        .then(data => setProducts(data));
    } , [])

// product add to Cart
    const addToCartHeandler = (product)=>{
      const newCart = [...cart, product ];

      setCart(newCart);

      //console.log(cart);
    }

    // product Remove form Cart


    const removeProductFormCart = (productId) => {

      const proId =   cart.find(c => c.id === productId);

        delete cart[proId];

        console.log(cart, "delete prodid")

        setCart(cart);



    }


  return (


    <>
      <Container fluid className="px-5">
        <Row className="mt-5">
          <Col sm={8}>
              <Row className="row-cols-1 row-cols-md-3 g-4">
                  {/* dyname data go hear */}
                    {
                        products.map(product => <Product product={product} key={product.id} addToCartHeandler={addToCartHeandler} ></Product>)
                    }
                 
              </Row>
          </Col>
          <Col sm={4}>
            
                    <Card className="px-2">
                    {
                      cart.map((cart) => <Cart cart={cart} key={cart.id} removeProductFormCart={removeProductFormCart}></Cart>)
                    }
                  
            </Card>
            
                <Row className="py-5">
                    <Col className="col-sm-4 offset-4">
                    <Button className='btn btn-md btn-suscess'>Choise For Me</Button>
           
                    </Col>
                    <Col className="col-sm-4 offset-4 mt-3">
                    <Button className='btn btn-md btn-warning'>Change Agin</Button>
                    </Col>
                </Row>
            
            </Col>
        </Row>
     
      </Container>
    </>
  );
};

export default Shop;
