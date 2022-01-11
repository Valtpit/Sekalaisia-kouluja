import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Products({ url, category, addToCart, product }) {
  const [products, setProducts] = useState([]);

  let pääte = "";

  useEffect(() => {
    if (category) {
      axios
        .get(url + "/products/getproducts.php/" + category.trnro)
        .then((response) => {
          const json = response.data;
          setProducts(json);
        })
        .catch((error) => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        });
    }
  }, [category]);

  if (category?.trnro == 5) {
    pääte = ".jpg";
  } else {
    pääte = ".svg";
  }

  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col xs={12}>
          <div>
            {/* tähän tulee kategorian nimi ja lyhyt teksti */}
            <h1>{category?.trnimi}</h1>
            <p>{category?.teksti}</p>
          </div>
        </Col>
        {/* Tämä näyttää halutun kategorian tiedot. Vielä puuttuu oleellisia tietoja, esim hinta */}
        {products?.map((product) => (
          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center">
            <div key={product.tuotenro}>
              <Card
                className="categoryCard"
                style={{ width: "18rem", border: " 2px solid #514b3b" }}
              >
                <Card.Img
                  variant="top"
                  src={
                    "https://koulu-b8d54.web.app/" + product.tuotenimi + pääte
                  }
                />
                <Card.Body style={{ background: "#a8ae8a" }}>
                  <Card.Title>
                    <h2>
                      {product.tuotenimi} {product.maara}
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <h2>{product.hinta}€</h2>
                  </Card.Text>
                  <div className="buttonToCenter">
                    <Link
                      to={{
                        pathname: "/product",
                        state: {
                          tuotenro: product.tuotenro,
                          tuotenimi: product.tuotenimi,
                          hinta: product.hinta,
                          trnro: category.trnro,
                          vari: product.vari,
                          maara: product.maara,
                          koko: product.koko,
                          lankatyyppi: product.lankaTyyppiEläin,
                          pituus: product.pituus,
                          amount: product.amount,
                          teksti: product.teksti,
                          category: category.trnimi,
                        },
                      }}
                    >
                      <button className="webShopButton">Lisätietoja</button>
                    </Link>
                  </div>
                  <div className="buttonToCenter">
                    <button
                      className="webShopAddBtn"
                      onClick={(e) => addToCart(product)}
                    >
                      Lisää ostoskoriin <BsCart4 size={38} />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
