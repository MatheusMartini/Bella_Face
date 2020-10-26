import React, { useEffect, useState} from "react";
import { Container, Row, Col, Card, Spinner, CardColumns, ListGroup, Button} from "react-bootstrap";

import Api from "../../services/api";
import Navbar from "../../assets/components/Navbar";

function Home() {

  const[dados, setDados] = useState([]);
  const[quantidade, setQuantidade] = useState();

  const[pedidos, setPedidos] = useState();
  const[qtdPedidos, setQtdPedidos] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token")
    Api
    .get('/produtos', {headers:{"Authorization": `Bearer ${token}`}} )
    .then(response => {
      setDados(response.data.product)
      setQuantidade(response.data.quantity);
      console.log(response.data.product)
    })
    .catch(error => {
      console.log(error);
    })
  },dados);

  useEffect(()=>{
    const token = localStorage.getItem("token")
    Api.get("/pedidos",{headers:{"Authorization": `Bearer ${token}`}})
    .then(response =>{
      setPedidos(response.data.ordder)
      setQtdPedidos(response.data.ordder.length)
      console.log(response.data.ordder)
    })
    .catch(error => {
      console.log(error);
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
              dados.map((row, index) => {
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