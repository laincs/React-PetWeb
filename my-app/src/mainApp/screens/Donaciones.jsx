import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function Donaciones() {

  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs={3}>
            <div className="leftMenuBar">
              {/* Código del menú lateral */}
            </div>
          </Col>
          <Col xs={9}>
            <div>
              {/* Código de la barra superior */}
            </div>
            <br />
            <h1 className="nosotros-title">Donaciones</h1>
            <p className="nosotros-text">
              En Huellitas Felices, creemos en la importancia de dar a las mascotas en necesidad. A través de nuestro programa de donaciones, nos comprometemos a colaborar con organizaciones benéficas y refugios para ayudar a mejorar las vidas de los animales desamparados. Cada compra que realices en nuestra tienda contribuye a apoyar a estos animales necesitados, permitiéndoles recibir la atención y el cuidado que merecen. ¡Gracias por unirte a nosotros en esta noble causa y hacer una diferencia en la vida de las mascotas!
            </p>
            <br />
            <br />
            <h1 className="nosotros-title2">Organizaciones</h1>

            <Image
              src="./images/donaciones/chile_mestizo.png"
              alt="Imagen Clickeable"
              onClick={() =>handleImageClick("http://chilemestizo.cl/")}
            />

            <p className="nosotros-text">Fundación Animalia</p>
            <br />
            <p className="nosotros-text">- Fundación Julieta</p>
            <br />
            <p className="nosotros-text">- Fundación Callejeros Buscan Hogar</p>
            <br />
            <p className="nosotros-text">- Garras y Patas</p>
            <br />
            <p className="nosotros-text">- Perritos de Rinconada</p>
            <br />
            <p className="nosotros-text">- Fundación Galgos Chile</p>
            <br />
            <p className="nosotros-text">- Fundación Chile Mestizo</p>
          </Col>
        </Row>
      </Container>
      <footer className="footer top-bar footer-css"></footer>
    </div>
  );
}

export default Donaciones;
