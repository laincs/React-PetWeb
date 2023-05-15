import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "../style/donaciones.css";

function Donaciones() {
  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const organizations = [
    {
      imageUrl: "./images/donaciones/chile_mestizo.png",
      linkUrl: "http://chilemestizo.cl/",
      name: "Chile Mestizo",
    },
    {
      imageUrl: "./images/donaciones/fundacion_adopta.png",
      linkUrl: "https://www.fundacionadopta.cl/Index/",
      name: "Fundación Adopta",
    },
    {
      imageUrl: "./images/donaciones/CALLEJERITOS-DE-LA-VEGA.png",
      linkUrl: "https://www.fundacioncallejeritosdelavega.cl/",
      name: "Fundación Callejeritos de la Vega",
    },
    {
      imageUrl: "./images/donaciones/SIETE-VIDAS.png",
      linkUrl: "https://www.sietevidas.org/",
      name: "Corporación Siete Vidas",
    },
    {
      imageUrl: "./images/donaciones/FELINNOS.png",
      linkUrl: "https://tnrchile.cl/",
      name: "Fundación Felinnos",
    },
  ];

  return (
    <div className="color_fondo">
      <Container>
        <Row>
          <Col xs={12}>
            <br />
            <h1 className="nosotros-title">Donaciones</h1>
            <p className="nosotros-text">
              En Huellitas Felices, creemos en la importancia de dar a las mascotas en necesidad. A través de nuestro programa de donaciones, nos comprometemos a colaborar con organizaciones benéficas y refugios para ayudar a mejorar las vidas de los animales desamparados. Cada compra que realices en nuestra tienda contribuye a apoyar a estos animales necesitados, permitiéndoles recibir la atención y el cuidado que merecen. ¡Gracias por unirte a nosotros en esta noble causa y hacer una diferencia en la vida de las mascotas!
            </p>
            <br />
            <br />
            <h1 className="nosotros-title2">Organizaciones</h1>

            <Row>
              {organizations.map((org, index) => (
                <Col key={index} xs={4}>
                  <Image className = "Imagedon"
                    src={org.imageUrl}
                    alt="Imagen Clickeable"
                    onClick={() => handleImageClick(org.linkUrl)}
                  />
                  <p className="nosotros-text">{org.name}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <footer className="footer top-bar footer-css"></footer>
    </div>
  );
}

export default Donaciones;
