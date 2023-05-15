import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../style/contacto.css";

function Contacto() {
  const [regiones, setRegiones] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState({});

  useEffect(() => {
    const fetchRegiones = async () => {
      const result = await axios(
        "https://liangrandon.000webhostapp.com/src/JSONChileData"
      );
      setRegiones(result.data.RegionesColeccion.Region);
    };
    fetchRegiones();
  }, []);

  const handleRegionChange = (e) => {
    const regionIndex = e.target.value;
    setProvincias(regiones[regionIndex].Provincias.Provincia);
    setComunas([]);
  };

  const handleChange = (e) => {
    const provinciaSeleccionada = provincias.find(
      (provincia) => provincia.Nombre === e.target.value
    );
    setProvinciaSeleccionada(provinciaSeleccionada);
    setComunas(provinciaSeleccionada.Comunas.Comuna);
  };

  return (
    <Container>
      <h1 className="contacto-title">Escribenos!</h1>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text" >Nombres:</Form.Label>
              <Form.Control
                type="text"
                id="nombres"
                name="nombres"
                placeholder="Nombre"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text" >Apellidos:</Form.Label>
              <Form.Control
                type="text"
                id="apellidos"
                name="apellidos"
                placeholder="Apellidos"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text" >Teléfono:</Form.Label>
              <Form.Control
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="+569 0000 0000"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text" >Email:</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.cl"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text" >Región</Form.Label>
              <Form.Control as="select" onChange={handleRegionChange}>
                <option value="">Selecciona una región</option>
                {regiones.map((region, index) => (
                  <option key={index} value={index}>
                    {region.Nombre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="contacto-label contacto-text" >Provincia</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
                <option value="">Selecciona una provincia</option>
                {provincias.map((provincia, index) => (
                  <option key={index} value={provincia.Nombre}>
                    {provincia.Nombre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="comuna">
              <Form.Label className="contacto-label contacto-text" >Comuna:</Form.Label>
              <Form.Control as="select" required>
                <option value="">Selecciona una comuna</option>
                {comunas.map((comuna, index) => (
                  <option key={index} value={comuna.Nombre}>
                    {comuna.Nombre}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label className="contacto-label contacto-text" >Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu mensaje aquí"
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
