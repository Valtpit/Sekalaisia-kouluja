import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom";


export default function About () {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <Row>
        <h1>Yhteystiedot</h1>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}}  >
          <p>
            Tilan puhelinaika arkisin on klo 9-16. Viikonloppuisin klo 10-14. Muina aikoina voi laittaa
            viestiä somen kautta.
          </p>
        </Col>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}}  >
          <ul className="AboutULElement">
            <li>Puhelinumero: +358 66 666 6666</li>
            <li>Sähköposti: toivonkotielainpuisto@gmail.com</li>
            <li>Instagram&nbsp;
              <a className="aboutPageLinks">
                <Link to="https://www.instagram.com/toivon_kotielainpuisto/">
                  <SiInstagram size={28} />
                </Link>
              </a>
            </li>
            <li>Facebook&nbsp;
              <a className="aboutPageLinks">
                <Link to="https://www.facebook.com/profile.php?id=100074719422748">
                  <SiFacebook size={28} />
                </Link>
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}

    </Container>
  )
}
