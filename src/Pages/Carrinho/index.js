import React from "react";
import { Container, Row, Col, Card, Spinner, CardColumns, ListGroup, ListGroupItem, Modal, Button } from "react-bootstrap";

import Api from "../../services/api";
import Navbar from "../../assets/components/Navbar";

function carrinho() {

  return (
    <Container className="mt-5 mb-5">
        <Col sm={4}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Carrinho de compras</Card.Title>
              <Card.Text>
                Lista de produtos:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {/* <ListGroupItem>Cras justo odio</ListGroupItem> */}
              {/* colocar pedidos adicionados e aumentar ou diminuir quantidade*/}
            </ListGroup>
            <Card.Body>
              {/* <ConfirmarPedido/> */}
            </Card.Body>
          </Card>
        </Col>
    </Container>
  );
}

export default carrinho;