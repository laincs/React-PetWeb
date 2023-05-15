import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/contacto.css";

function Contacto() {
  return (
    <div className="main-contacto">
      <Row>
        <Container className="formulary">
          <br/>
          <h2 className="contacto-title contacto-text">Formulario de contacto</h2>
          <Form action="/enviar-formulario" method="post">
            <Form.Group>
              <Form.Label className="contacto-label contacto-text">Nombres:</Form.Label>
              <Form.Control
                type="text"
                id="nombres"
                name="nombres"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text">Apellidos:</Form.Label>
              <Form.Control
                type="text"
                id="apellidos"
                name="apellidos"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text">Teléfono:</Form.Label>
              <Form.Control
                type="tel"
                id="telefono"
                name="telefono"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text">Email:</Form.Label>
              <Form.Control type="email" id="email" name="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text">Ciudad:</Form.Label>
              <Form.Control type="text" id="ciudad" name="ciudad" required />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text">Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                id="mensaje"
                name="mensaje"
                rows="5"
                required
              />
            </Form.Group>
            <br/>
            <Button type="submit" className="btn btn-primary">
              Enviar
            </Button>
          </Form>
        </Container>
      </Row>
    </div>
  );
}

export default Contacto;