import { React, useEffect } from "react";
import "../css/product.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowForward } from "react-icons/io";
import Duck from "../img/duck.svg";
import Lippu from "../img/avainlippu.png";

/*hinta x kpl tulostetaan lomakkeen painikkeeseen, mutta php:ta
 käyttävä laskenta on erikseen.*/
/*keskeneräistä..vielä ei ole kaikki routingit + fumktiot puuttuu*/

export default function Product({
  category,
  addToCart,
  updateAmount,
  product
}) {
  let pääte = ""
  if (category?.trnro == 5) {
    pääte = ".jpg"
  } else {
    pääte = ".svg"
  }
  function changeAmount(e, product) {
    updateAmount(e.target.value, product);
  }

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col className="navigointi">
          <h2>
            Tuotteet
            <IoIosArrowForward />
            {category?.trnimi}
            <IoIosArrowForward />
            {product?.tuotenimi}
          </h2>
        </Col>
      </Row>
      <div>
        <Row>
          <Col md={4} lg={4} className="profiili">
            <h1>{product?.tuotenimi}</h1>
            <h1>{product?.maara}</h1>
          </Col>
          <Col md={4} lg={4}>
            <Carousel>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={"https://koulu-b8d54.web.app/" + product?.tuotenimi + pääte}/>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4} lg={4} className="form-tiedot">
            <h1>{product?.hinta} € / kpl </h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="btn_loota">
              <button onClick={(e) => addToCart(product)}>
                <h1>OSTOSKORIIN</h1>
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={3} md={3}>
          <div className="duckSvg">
           <img src={Duck} />  
          </div>
        </Col>
        <Col xs={6} md={6}>
          <div className="tuotetiedot">
            <h1>Tuotetiedot:</h1>
            <p>{product?.teksti}</p>
          </div>
        </Col>
        <Col xs={3} md={3}>
          <div>
           <img className="lippu" src={Lippu} />  
          </div>
        </Col>
      </Row>
    </Container>
  );
}
