import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Barn from "../img/barn.jpg";
import Piglets from "../img/piglets.jpg";
import Goat from "../img/goat.jpg";
import Sheep from "../img/sheep.jpg";
import Womanandllama from "../img/womanandllama.jpg";

export default function AboutUs() {
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
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Row>
        <h1>Meistä</h1>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
          <p>
            Toivon kotipuisto sijaitsee n.30 min ajomatkan päästä Oulun
            keskustasta luonnon keskuudessa kauniin merinäkymän vieressä.
            Tilalle pääsee helposti myös julkisia käyttäen.
          </p>
          <p>
            Tilalla pääset tutustumaan kiltteihin ja hellyttäviin kotieläimiin,
            kuten lampaisiin, laamoihin, lehmiin, kissoihin, koiriin, kaneihin,
            kanoihin, ankkoihin, vuohiin tai jopa hieman harvinaisempiin
            eläimiin kuten poroihin.
          </p>
          <p>
            Puistosta löytyy myös eläinten lisäksi muuta toimintaa: leikkipuisto
            perheen pienemmille, missä on kiipeilyteline ja keinuja, sekä
            askartelupaja, jossa pääsee kokeilemaan huovutusta tai maalaamista.
          </p>
          <p>
            Jos nälkä yllättää vieraillessa tilalta löytyy laadukas kahvila,
            josta saa ostettua erilaisia herkkuja. Samasta rakennuksesta löytyy
            myös kotieläinpuiston pieni putiikki, jonka mm. villatuotteet on
            valmistettu tilan omasta villasta.
          </p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image
              src={Barn}
              fluid
              style={{ width: "100%", height: "100%", paddingTop: "10px" }}
            />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
          <figure className="servicePics">
            <Image
              src={Womanandllama}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
          <h3>Toiminta</h3>
          <p>
            Tarjoamme monipuolisia palveluita vierailijoille, kuten opastettuja
            kierroksia, kummitoimintaa eläimille, terapiaa ja monipuolisesti
            opettavia kursseja. Sosiaalisen median puolella saat enemmän ja
            ajankohtaisempaa tietoa.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
          <h3>Ohjeita vierailijalle:</h3>
          <p>
            Muistathan vieraillessasi toimia annettujen ohjeiden ja opastuksien
            mukaan. Näin mahdollistetaan hyvä vierailukokemus kaikille. Puiston
            työntekijät auttavat ja ohjeistavat ongelmatilanteissa.
          </p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image src={Goat} fluid style={{ width: "100%", height: "100%" }} />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
          <figure className="servicePics">
            <Image
              src={Piglets}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
          <h3>Eläimet</h3>
          <p>
            Tilalla asustaa tuttuja, kilttejä ja hellyttäviä kotieläimiä, kuten
            lampaita, laamoja, lehmiä, kissoja, koiria, pupuja, kanoja, ankkoja
            ja vuohia. Puistossa asustelee myös harvinaisempia eläimiä kuten
            kilpikonnia, strutseja ja papukaijoja vaihtelevasti aina, kun
            hoitopaikkaa tarvitaan.
          </p>
          <p>
            Eläimet asuvat heille yksilöllisesti suunnitelluissa tarhoissa ja
            olemme huomioineet jokaisen eläimen tarpeet heidän hoidossaan.
            Tiloihin vieraat pääsevät tutustumaan paremmin ohjatuilla
            opaskierroksilla.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
          <h3>Lahjoitukset</h3>
          <p>
            Otamme vastaan ruokalahjoituksien lisäksi tarvikelahjoituksia. Jos siis löytyy ylimääräisiä ämpäreitä, 
            köyttä yms., voit tulla ilmaiseksi käymään puistossa. Rahalahjoituksia otamme vain silloin, kun
            järjestämme siihen tarkoitettuja myyjäisiä tai tapahtumaa.
          </p>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
        <figure className="servicePics">
            <Image
              src={Sheep}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
      </Row>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </Container>
  );
}
