import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

import "../style/inicio.css";

const imagenes = [
  {
    src: "/images/Contacto.jpg",
    alt: "Imagen de contacto",
    descripcion: "Contacta con nosotros",
  },
  {
    src: "/images/Donaciones.jpg",
    alt: "Imagen de donaciones",
    descripcion: "Haz una donación",
  },
  {
    src: "/images/Nosotros.jpg",
    alt: "Imagen de nosotros",
    descripcion: "Conoce más sobre nosotros",
  },
  {
    src: "/images/Tienda.jpg",
    alt: "Imagen de tienda",
    descripcion: "Visita nuestra tienda",
  },
];

const Inicio = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="inicio-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        pause={false}
        touch={true}
        fade={true}
        slide={false}
      >
        {imagenes.map((imagen, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 img-carousel"
              src={imagen.src}
              alt={imagen.alt}
            />
            <Carousel.Caption className="caption-carousel">
              <h3>{imagen.descripcion}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container fluid className="p-0 woman-container">
        <Row>
          <Col sm={1}/>
          <Col sm={5}>
            <h2 className="woman-title woman-text">Tenemos todo lo necesario para tus mascotas!</h2>
            <p className="woman-lead woman-text">
              ¡Bienvenido a Huellitas Felices! Aquí encontrarás todo lo que necesitas para consentir y cuidar a tus peludos
              amigos. Desde collares y correas de moda, hasta juguetes interactivos y productos de higiene, nuestra amplia
              gama de productos está diseñada para mantener a tus mascotas felices y saludables.
            </p>
            <p className="woman-lead woman-text">
              ¡Explora nuestro catálogo y descubre cómo podemos ayudarte a hacer las huellas de tus mascotas aún más felices!
            </p>
          </Col>
          <Col sm={1}/>
          <Col sm={5}>
            <div className="float-right">
              <img src="./images/main/mujer.png" alt="Mujer" className="mainImage"/>
            </div>
            
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default Inicio;
