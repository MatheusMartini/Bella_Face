import React from "react";
import "./assets/styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

import Section from "./assets/components/Section";

function App() {
  return (
    <Container fluid>
      <Router> 
        <Section/>
      </Router>
    </Container>
  );
}

export default App;
