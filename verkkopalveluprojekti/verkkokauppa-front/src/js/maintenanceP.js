import { React, useEffect, useState } from "react";
import axios from "axios";
import "../css/maintenance.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Maintenance() {
  const URL = "http://localhost/kotielainpuisto";

  const [item, setItem] = useState([]);
  const [tuotenimi, setTuotenimi] = useState("");
  const [hinta, setHinta] = useState("");
  const [kustannus, setKustannus] = useState("");
  const [trnro, setTrnro] = useState("");
  const [vari, setVari] = useState("");
  const [maara, setMaara] = useState("");
  const [koko, setKoko] = useState("");
  const [lankaTyyppiElain, setLankaTyyppiElain] = useState("");
  const [pituus, setPituus] = useState("");
  const [teksti, setTeksti] = useState("");

  useEffect(() => {
    axios
      .get(URL + "/products/getallproducts.php/")
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        alert(error.response ? error.response.data.error : error);
      });
  }, []);

  function save(e) {
    e.preventDefault();
    const json = JSON.stringify({
      tuotenimi: tuotenimi,
      hinta: hinta,
      kustannus: kustannus,
      trnro: trnro,
      vari: vari,
      maara: maara,
      koko: koko,
      lankaTyyppiElain: lankaTyyppiElain,
      pituus: pituus,
      teksti: teksti,
    });
    axios
      .post(URL + "/maintenance/addproduct.php", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setItem((item) => [...item, response.data]);
        setTuotenimi("");
        setHinta("");
        setKustannus("");
        setTrnro("");
        setVari("");
        setMaara("");
        setKoko("");
        setLankaTyyppiElain("");
        setPituus("");
        setTeksti("");
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }

  function remove(tuotenimi) {
    const json = JSON.stringify({ tuotenimi: tuotenimi });
    axios
      .post(URL + "/maintenance/deleteproduct.php", json, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const newListWithoutRemoved = item.filter(
          (item) => item.tuotenimi !== tuotenimi
        );
        setItem(newListWithoutRemoved);
      })
      .catch((error) => {
        alert(error.response ? error.response.data.error : error);
      });
  }

  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col>
          <h3>Verkkokaupan yll??pito</h3>
          <h2>Ohjeet:</h2>
          <p>Nimi: max. 35 merkki??<hr></hr>Tuoteryhm??: 1 merkki esim. 1=El??inherkut, 2=El??intenhoitotuotteet,
           3=Askartelutarvikkeet jne. Luo ensiksi uusi tuoteryhm?? ennen tuotetta.<hr></hr>Vaihtoehtoiset:
            V??ri: max. 40 merkki??<hr></hr>M????r??: max. 4 merkki?? (esim. 200g, 1kg tai 1x)<hr></hr>Koko: max. 3 merkki??
             (esim. XS, M tai XXL)<hr></hr>Lankatyyppi: max. 12 merkki?? (esim. lampaanvilla, alpakanvilla tai
              sekoitus)<hr></hr>Pituus: max. 4 merkki?? (esim. 1kk tai 4kk)<hr></hr>Teksti: max. 65 535 merkki??
              </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <form className="taulu">
            <Col xs={12}>
              <tr>
                <td>
                  <label><h2>Uusi tuote:</h2></label>
                </td>
              </tr>
            </Col>
            <Row className="mx-auto center">
              <Col xs={12}>
                <tr>
                  <td>
                  <p>Pakolliset:</p>
                    <input
                      type="text"
                      maxLength={35}
                      value={tuotenimi}
                      onChange={(e) => setTuotenimi(e.target.value)}
                      placeholder="nimi"
                    ></input>
                  </td>
                </tr>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="number"
                    value={hinta}
                    onChange={(e) => setHinta(e.target.value)}
                    placeholder="hinta"
                  ></input>
                </td>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="number"
                    value={kustannus}
                    onChange={(e) => setKustannus(e.target.value)}
                    placeholder="kustannus"
                  ></input>
                </td>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="number"
                    value={trnro}
                    onChange={(e) => setTrnro(e.target.value)}
                    placeholder="tuoteryhm??n numero"
                  ></input>
                  <hr></hr>
                  <p>Vaihtoehtoiset:</p>
                </td>
              </Col>
            </Row>
            <Row className="mx-auto center">
              <Col xs={12}>
                <td>
                  <input
                    type="text"
                    maxLength={40}
                    value={vari}
                    onChange={(e) => setVari(e.target.value)}
                    placeholder="v??ri"
                  ></input>
                </td>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="text"
                    maxLength={4}
                    value={maara}
                    onChange={(e) => setMaara(e.target.value)}
                    placeholder="m????r??"
                  ></input>
                </td>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="text"
                    maxLength={3}
                    value={koko}
                    onChange={(e) => setKoko(e.target.value)}
                    placeholder="koko"
                  ></input>
                </td>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="text"
                    maxLength={12}
                    value={lankaTyyppiElain}
                    onChange={(e) => setLankaTyyppiElain(e.target.value)}
                    placeholder="Lankatyyppi"
                  ></input>
                </td>
              </Col>
              <Col xs={12}>
                <td>
                  <input
                    type="text"
                    maxLength={4}
                    value={pituus}
                    onChange={(e) => setPituus(e.target.value)}
                    placeholder="pituus"
                  ></input>
                </td>
              </Col>
            </Row>
            <Row className="mx-auto center">
              <Col xs={12}>
                <td>
                  <input
                    type="text"
                    maxLength={65535}
                    className="lis??tieto"
                    value={teksti}
                    onChange={(e) => setTeksti(e.target.value)}
                    placeholder="lis??tietoa tuotteesta"
                  ></input>
                </td>
              </Col>
            </Row>
            <Row className="mx-auto Plis????">
              <Col>
                <td>
                  <button onClick={save}>+ Lis???? tuote +</button>
                </td>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>

      <ol>
        <Row>
          {item?.map((item) => (
            <Col xs={6} md={4} lg={3}>
              <li key={item.tuotenro}>
                <div className="layout">
                  <p>{item.tuotenimi}</p>
                  <a
                    href="#"
                    className="delete2"
                    onClick={() => remove(item.tuotenimi)}
                  >
                    Poista
                  </a>
                </div>
              </li>
            </Col>
          ))}
        </Row>
      </ol>
    </Container>
  );
}
