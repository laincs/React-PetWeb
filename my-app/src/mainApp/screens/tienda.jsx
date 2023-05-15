import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "../style/tienda.css";

function Tienda() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
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
      description: "Un collar resistente y elegante para tu perro.",
    },
    {
      imageUrl: "./images/tienda/comida1.jpg",
      name: "Alimento Gato Biofresh",
      price: "$1000",
      description: "Alimento premium para gatos, rico en nutrientes y sabores.",
    },
    {
      imageUrl: "./images/tienda/comida2.jpg",
      name: "Alimento Gato Test of The Wild",
      price: "$1000",
      description: "Una dieta natural y saludable para tu gato aventurero.",
    },
    {
      imageUrl: "./images/tienda/comida3.jpg",
      name: "Alimento Gato Test of The Wild",
      price: "$1000",
      description: "Una dieta natural y saludable para tu gato aventurero.",
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
              Encuentra aquí los productos para tus regalones!
            </p>
            <br />
            <br />
            <h1 className="nosotros-title2">Productos</h1>

            <Row>
              {Inventario.map((product, index) => (
                <Col key={index} xs={4}>
                  <div className="image-container">
                    <Image
                      className="Imagedon"
                      src={product.imageUrl}
                      alt="Imagen Clickeable"
                      onClick={() => handleImageClick(product)}
                    />
                    <div className="overlay">
                      <div className="text">{product.name}</div>
                      <div className="text">{product.price}</div>
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
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="Imagedonpop"
            src={selectedProduct?.imageUrl}
            alt="Imagen Popup"
          />
          <p className="p1col">{selectedProduct?.price}</p>
          <p className="p1col">{selectedProduct?.description}</p>
        </Modal.Body>
        <Modal.Footer>
        <Button>
            Agregar
          </Button>

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
