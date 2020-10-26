import React, { useEffect, useState} from "react";
import { Container, Row, Col, Card, Spinner, CardColumns, ListGroup, Button} from "react-bootstrap";

import Navbar from "../../assets/components/Navbar";
import api from "../../services/api";
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
      setQtdPedidos(res.ordder.length)
    })
  }, pedidos)

  useEffect(()=>{})

  const inserirProduto = (order_order_id, product_id_product, quantity, unit_price) => {
    return api.post("/pedidos/inpedido",{
      order_order_id: order_order_id,
      product_id_product: product_id_product,
      quantity: quantity,
      unit_price: unit_price,
      total_price: quantity*unit_price
      })
      .then((response) => {});
  };
  
  

  return (
    <>
    <Navbar/>
    <Container className="mt-5 mb-5">
      <Row>
        <Col sm={8}>
          <Row>
            {quantidade > 0 ? (
              produtos.map( row => {
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
                          <Button onClick={(e)=>{inserirProduto(1, row.id_product, 2, row.price, e.preventDefault)}}>adicionar</Button>
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
            <ListGroup.Item>Carrinho de compras</ListGroup.Item>        
            
              {qtdPedidos > 0 && (pedidos.map(row => {
                console.log(row)
                return(
                  <Container>
                    <ListGroup variant="flush">
                      <ListGroup.Item>preço:{row.total_price} 
                        <Button onClick={()=>{}}>remover</Button>
                        </ListGroup.Item>
                    </ListGroup> 
                  </Container>
                );
              })
              )}
            { qtdPedidos > 0 ?<ListGroup.Item>Finalizar</ListGroup.Item>: <p>insira algo na lista primeiro </p>}        
            </Col>
          </Row>   
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;