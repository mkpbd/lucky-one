import React, { useEffect, useState } from "react";
import { Row,Container } from "react-bootstrap";
import SingleAns from '../../components/SingleAns/SingleAns'

const Question = () => {

    const [answear, setAnswear]= useState([]);

    useEffect(()=>{
        fetch('react-question.json')
        .then(data => data.json())
        .then(data => setAnswear(data));

    },[]);

  return (
       <Container>
            <Row>
            {answear.map(items => <SingleAns data={items} key={items.question}></SingleAns>)}
        </Row>
       </Container>
  );
};

export default Question;
