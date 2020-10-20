import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Fotter() {
  return (
    <Jumbotron fluid className="mb-0">
      <Container>
        <span>Martini, Matheus &copy;</span>
      </Container>
    </Jumbotron>
  );
}

export default Fotter;