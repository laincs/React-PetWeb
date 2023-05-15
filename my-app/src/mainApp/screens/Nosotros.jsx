import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/nosotros.css";

function Nosotros() {
  return (
    <div id="wrapper" className="nosotros-background">
      <Container>
        <Row>
          <Col>
            <br />
            <h1 className="nosotros-title nosotros-text">Nosotros</h1>
            <p className="nosotros-lead nosotros-text">
                Nos complace presentarles a nuestro increíble equipo que trabaja arduamente
                para brindarles a ustedes y a sus peludos amigos una experiencia única y especial.
            </p>
            <br />
            <br />
            <h1 className="nosotros-title nosotros-text">Nuestro Equipo</h1>
            <p className="nosotros-lead nosotros-text">
                Carolina, la amante de los perros: Carolina es nuestra apasionada experta en
                productos para perros. Con años de experiencia en el cuidado y entrenamiento de perros, ella está
                siempre al tanto de las últimas tendencias en accesorios y juguetes para consentir a los peludos de
                cuatro patas. Si necesitas asesoría sobre qué correa, collar, juguete o cama es la mejor opción para
                tu fiel compañero, ¡María es tu persona!
            </p>
            <br />
            <p className="nosotros-lead nosotros-text">
                Lian, el amante de los gatos: Lian es nuestro especialista en productos para
                gatos. Con su profundo amor por los felinos, Juan sabe exactamente qué necesitan los gatos para
                estar cómodos y felices. Desde rascadores y juguetes interactivos hasta camas suaves y ricas
                golosinas, Juan tiene todo lo que necesitas para consentir a tu travieso amigo peludo.
            </p>
            <br />
            <p className="nosotros-lead nosotros-text">
                Carla, la apasionada por las aves: Carla es nuestra experta en aves exóticas y
                mascotas emplumadas. Si tienes un loro, un perico o cualquier otra ave como mascota, Carla es la
                persona indicada para brindarte consejos sobre jaulas, alimentos, juguetes y más. Con su
                conocimiento y experiencia en avicultura, te ayudará a crear un ambiente adecuado y estimulante para
                tu compañero alado.
            </p>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="nosotros-lead nosotros-text">
                Gabriela, la experta en acuariofilia: Gabriela es nuestra apasionada experta en
                peces y acuarios. Con su amor por el mundo submarino, Gabriela tiene una gran experiencia en
                acuariofilia y te brindará asesoría sobre cómo mantener un acuario hermoso y saludable. Desde peces
                tropicales y plantas acuáticas hasta equipos de filtración y productos para el cuidado del agua,
                Gabriela te ayudará a crear un oasis acuático para tus peces.{' '}
            </p>
            <br />
            <p className="nosotros-lead nosotros-text">
                Equipo de atención al cliente: Nuestro amable y dedicado equipo de atención al
                cliente está siempre dispuesto a ayudarte. Ya sea que necesites asesoramiento sobre productos,
                información sobre envíos o tengas preguntas sobre tu compra, nuestro equipo de atención al cliente
                estará encantado de atenderte con una sonrisa.
            </p>
            <br />
            <p className="nosotros-lead nosotros-text">
                En Huellitas Felices, todos compartimos la misma pasión por las mascotas y nos
                esforzamos para ofrecerte la mejor experiencia de compra. Nos aseguramos de que cada producto que
                ofrecemos en nuestra tienda sea de alta calidad, seguro y adecuado para las necesidades de tus
                peludos amigos.{' '}
            </p>
            <br />
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="nosotros-lead nosotros-text">Gracias por elegirnos!!</p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Nosotros;
