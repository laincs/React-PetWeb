import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "../style/tienda.css";

function Tienda() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const Inventario = [
    {
      imageUrl: "./images/tienda/collar1.jpg",
      name: "Collar Perro",
      price: "$1000",
    },
    {
      imageUrl: "./images/tienda/comida1.jpg",
      name: "Alimento Gato Biofresh",
      price: "$1000",
    },
    {
      imageUrl: "./images/tienda/comida2.jpg",
      name: "Alimento Gato Test of The Wild",
      price: "$1000",
    },
    {
      imageUrl: "./images/tienda/comida3.jpg",
      name: "Alimento Gato Test of The Wild",
      price: "$1000",
    },
  ];

  return (
    <div className="color_fondo">
      <Container>
        <Row>
          <Col xs={12}>
            <br />
            <h1 className="nosotros-title">Tienda</h1>
            <p className="nosotros-text">
              Encuentra aqui los productos para tus regalones!
            </p>
            <br />
            <br />
            <h1 className="nosotros-title2">Productos</h1>

            <Row>
              {Inventario.map((org, index) => (
                <Col key={index} xs={4}>
                  <div className="image-container">
                    <Image
                      className="Imagedon"
                      src={org.imageUrl}
                      alt="Imagen Clickeable"
                      onClick={() => handleImageClick(org.imageUrl)}
                    />
                    <div className="overlay">
                      <div className="text">{org.name}</div>
                      <div className="text">{org.price}</div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>ImageUrl.name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="Imagedonpop" src={selectedImageUrl} alt="Imagen Popup" />
          <p>Contenido adicional del popup</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <footer className="footer top-bar footer-css"></footer>
</div>
);
}

export default Tienda;
