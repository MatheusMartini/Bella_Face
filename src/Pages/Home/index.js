import React, { useEffect, useState} from "react";
import { Container, Row, Col, Card, Spinner, CardColumns, ListGroup, Button} from "react-bootstrap";

import Navbar from "../../assets/components/Navbar";
import AuthService from "../../services/auth.service";

function Home() {

  const[produtos, setProdutos] = useState([]);
  const[quantidade, setQuantidade] = useState();

  const[pedidos, setPedidos] = useState([]);
  const[qtdPedidos, setQtdPedidos] = useState(1);

  useEffect(() => {
    AuthService.produtos()
    .then(res =>{
      setProdutos(res.product)
      setQuantidade(res.quantity)
    })
  }, produtos);

  useEffect(()=>{
    AuthService.pedidos()
    .then(res =>{
      setPedidos(res.ordder)
    })
  }, pedidos)
  
  return (
    <>
    <Navbar/>
    <Container className="mt-5 mb-5">
      <Row>
        <Col sm={8}>
          <Row>
            {quantidade > 0 ? (
              produtos.map((row, index) => {
                return (
                  <Col sm={4} key={row.id_product}>
                    <CardColumns>
                      <Card style={{ width: "14rem" }}>
                        <Card.Body>
                          <Card.Title>{row.name}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            Preço: R${row.price}
                          </Card.Subtitle>
                          <Card.Text>
                            {row.description}
                          </Card.Text>
                          <Button onClick={() =>{}}>Adicionar ao carrinho</Button>
                        </Card.Body>
                      </Card>
                    </CardColumns>      
                  </Col>
                );
              })
            ) : (
              <Row>
                <h6>Carregando produtos </h6>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Row>
          )}
          </Row>   
        </Col>
       
        <Col Col sm={4}>
          <Row>
            <Col>
              {qtdPedidos > 0 && (pedidos.map((row, index) => {
                console.log(row)
                return(
                  <Container>
                  <ListGroup.Item>Carrinho de compras</ListGroup.Item>        
                    <ListGroup variant="flush">

                      <ListGroup.Item>preço:{row.total_price}</ListGroup.Item>
                    </ListGroup> 
                  </Container>
                );
              })
              )}
            </Col>
          </Row>   
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;