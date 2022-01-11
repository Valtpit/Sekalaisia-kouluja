import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SiFacebook, SiInstagram, SiGoogleplay, SiApple } from "react-icons/si";
import { BiCopyright } from "react-icons/bi";


export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={4} md={4} lg={3}>
            <div>
              <ul>
                <li>
                  <a href="">evästeet</a>
                </li>
                <li>
                  <a href="">rekisteriseloste</a>
                </li>
                <li>
                  <a href="">toimitusehdot</a>
                </li>
                <li>
                  <a href="./About">yhteystiedot</a>
                </li>
                <li>
                  <Link 
                      to={{pathname: "/maintenanceC"}}>
                      <a>ylläpito kategoria</a>
                  </Link>
                </li>
                <li>
                  <Link 
                      to={{pathname: "/maintenanceP"}}>
                      <a>ylläpito tuote</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <div className="yhtiedot">
              <p>Puhelinnro: +358 66 666 6666</p>
              <p>Sähköposti: toivonkotielainpuisto@gmail.com</p>
            </div>
          </Col>
          <Col xs={4} md={4} lg={3}>
            <h3>Seuraa meitä</h3>
            <div className="ikonit">
              <a>
                <Link to="https://www.instagram.com/toivon_kotielainpuisto/">
                  <SiInstagram size={28} />
                </Link>
              </a>
              <a>
                <Link to="https://www.facebook.com/profile.php?id=100074719422748">
                  <SiFacebook size={28} />
                </Link>
              </a>
            </div>
          </Col>
          <Col xs={4} md={4} lg={3}>
            <h3>Lataa sovellus</h3>
            <div className="ikonit">
              <a>
                <Link to="https://play.google.com/store/apps?hl=fi&gl=US">
                  <SiGoogleplay size={28} />
                </Link>
              </a>
              <a>
                <Link to="https://apps.apple.com/us/app/apple-store/id375380948">
                  <SiApple size={28} />
                </Link>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="copyright">
        <Row>
          <Col>
            <p><BiCopyright size={24}/>: Valtteri Pitkänen, Niina Lipiäinen ja Aureliina Hietamies</p>
            <p>OAMK 2021</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
