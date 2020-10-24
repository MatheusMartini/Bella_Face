import React, { useEffect, useState} from "react";
import { Container, Row, Col, Card, Spinner, CardColumns, ListGroup, ListGroupItem, Modal, Button, InputGroup, FormControl } from "react-bootstrap";

import Api from "../../services/api";
import Navbar from "../../assets/components/Navbar";
import { useHistory } from "react-router-dom";

function Home() {

  const[dados, setDados] = useState([]);
  const[quantidade, setQuantidade] = useState();

  useEffect(() => {
    Api
      .get('/produtos')
      .then(response => {
        setDados(response.data.product)
        setQuantidade(response.data.quantity);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

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
                            {row.price}
                          </Card.Subtitle>
                          <Card.Text>
                            {row.description}
                          </Card.Text>
                          <Card.Link><ConfirmarPedido nomeProduto={row.name} preco={row.price}/></Card.Link>
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
      </Row>
    </Container>
    </>
  );
}

function ConfirmarPedido({nomeProduto,precoProduto}) {
 let history = useHistory();
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quantidadeProduto, setQuantidadeProduto] = useState(1);


  function handleClick() {
    const data = {
      preco: quantidadeProduto*precoProduto,
      nome: nomeProduto
    }
    history.push("/carrinho",{data});
  }

  console.log(quantidadeProduto)
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{nomeProduto}</Modal.Title>
        </Modal.Header>
        <form>
          <label>
            quantidade do produto: 
            <input min="1"type="number" name="name" value={quantidadeProduto} onChange={(event)=>setQuantidadeProduto(event.target.value)} />
          </label>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            voltar
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Adicionar ao carrinho
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;