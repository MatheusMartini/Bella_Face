import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Row, Col, Table } from "react-bootstrap";

function ContactsView() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/product").then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <Row>
      <Col />
      <Col md={10}>
        <h1>View</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
      <Col />
    </Row>
  );
}

export default ContactsView;
