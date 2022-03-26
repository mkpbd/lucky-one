import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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


    const addToCartHeandler = (product)=>{
      const newCart = [...cart, product ];

      setCart(newCart);

      console.log(cart);
    }



  return (


    <>
      <Container fluid className="px-5">
        <Row className="mt-5">
          <Col sm={8}>
              <Row className="row-cols-1 row-cols-md-3 g-4">
                  {/* dyname data go hear */}
                    {
                        products.map(product => <Product product={product} key={product.id} addToCartHeandler={addToCartHeandler}></Product>)
                    }
                 
              </Row>
          </Col>
          <Col sm={4}>
            
                    <Card>
                    {
                      cart.map((cart) => <Cart cart={cart}></Cart>)
                    }
            </Card>
            
            </Col>
        </Row>
     
      </Container>
    </>
  );
};

export default Shop;
