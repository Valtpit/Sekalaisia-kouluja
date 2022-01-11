import { React, useEffect, useState } from "react";
import axios from "axios";
import "../css/maintenance.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Maintenance() {
  const URL = "http://localhost/kotielainpuisto";

  const [item, setItem] = useState([]);
  const [trnimi, setTrnimi] = useState("");
  const [teksti, setTeksti] = useState("");

  function save(e) {
    e.preventDefault();
    const json = JSON.stringify({ trnimi: trnimi, teksti: teksti });
    axios
      .post(URL + "/maintenance/addcategory.php", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setItem((item) => [...item, response.data]);
        setTrnimi("");
        setTeksti("");
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }

  function remove(trnro) {
    const json = JSON.stringify({ trnro: trnro });
    axios
      .post(URL + "/maintenance/deletecategory.php", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const newListWithoutRemoved = item.filter(
          (item) => item.trnro !== trnro
        );
        setItem(newListWithoutRemoved);
      })
      .catch((error) => {
        alert(error.response ? error.response.data.error : error);
      });
  }

  useEffect(() => {
    axios
      .get(URL + "/products/getcategories.php/")
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        alert(error.response ? error.response.data.error : error);
      });
  }, []);

  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col xs={12}>
          <h3>Verkkokaupan ylläpito</h3>
          <p>
            Nimi: max. 21 merkkiä, välimerkit lasketaan <hr></hr>Teksti: 65 535
            merkkiä{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <form className="taulu">
            <Row className="mx-auto Plisää">
              <tr>
                <Col xs={12}>
                  <td>
                    <label>
                      <h2>Uusi tuoteryhmä/kategoria:</h2>
                    </label>
                  </td>
                </Col>
                <Col>
                  <td>
                    <input
                      value={trnimi}
                      maxLength={21}
                      onChange={(e) => setTrnimi(e.target.value)}
                      placeholder="tuoteryhmän nimi"
                    ></input>
                  </td>
                </Col>
                <Col>
                  <td>
                    <input
                      type="text"
                      maxLength={65535}
                      className="lisätieto"
                      onChange={(e) => setTeksti(e.target.value)}
                      placeholder="tuoteryhmän teksti"
                    ></input>
                  </td>
                </Col>
                <Col xs={12}>
                  <td>
                    <button onClick={save}>+ Lisää tuoteryhmä +</button>
                  </td>
                </Col>
              </tr>
            </Row>
          </form>
        </Col>
      </Row>

      <Row>
        <ol>
          {item?.map((item) => (
            <li key={item.trnro}>
              <div className="layout">
                <div>
                  <p>{item.trnimi}</p>
                  <p className="teksti">{item.teksti}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="delete1"
                    onClick={() => remove(item.trnro)}
                  >
                    Poista
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Row>
    </Container>
  );
}
