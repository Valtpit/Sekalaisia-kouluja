import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Sheep from "../img/sheep.jpg";
import Pig from "../img/piggy.jpg";
import Dogandcat from "../img/dogandcat.jpg";
import Horseandkid from "../img/horseandkid.jpg";
import Chikens from "../img/chikens.jpg";
import Womanandllama from "../img/womanandllama.jpg";
import Goat from "../img/goat.jpg";

export default function Services() {
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
        <h1>Palvelut</h1>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
          <h3>Opastetut kierrokset</h3>
          <p>
            Tarjoamme opastettuja kierroksia missä tutustumme puiston tiloihin
            ja eläimiin. Pääset tapaamaan tilalla asuvia eläimiä. Kerromme
            tietoa tilan asukkaista ja heidän elämästä tilalla. Miten
            kotieläinpuisto toimii ja miten eläimet meille valitaan. Samalla
            tutustumme tilalla oleva kahvilan herkkuihin ja puotiin.
            Opastettujen kierrosten ryhmäkoko on 10-30 henkeä.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton">
              <a>LUE LISÄÄ</a>
            </button>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image
              src={Sheep}
              fluid
              style={{ width: "100%", height: "100%", paddingTop: "10px" }}
            />
          </figure>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image src={Pig} fluid style={{ width: "100%", height: "100%" }} />
          </figure>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <h3>Terapiatoiminta</h3>
          <p>
            Tarjoamme erilaisia eläinpohjaista terapian muotoja asiakkaille.
            Terapia toteutetaan osaavien ohjaajien avulla ja terapiassa
            hyödynnetään kotieläinpuiston eläimiä. Terapia tapahtuu joko yksilö-
            tai ryhmäterapiana. Suosituimmat tarjolla olevat terapiaryhmät ovat
            ratsastusterapia ja mixed bag, missä hoidamme ryhmässä tilan eläimiä
            tai kisailemme rennossa ilmapiirissä hoidokkeja kuunnellen.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton">
              <a>LUE LISÄÄ</a>
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
          <h3>Kummitoiminta</h3>
          <p>
            Kiinnostaisiko ryhtyä eläimelle kummiksi? Meillä on siihen
            mahdollisuus. Pääset valitsemaan tilan asukkaista 'oman' eläimen,
            jota pääset hoitamaan ja tapaamaan etukäteen sovittuina
            tapaamisilla. Jos kiinnostuit ota rohkeasti yhteyttä meihin joko
            soittamalla tai somen kautta.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton">
              <a>LUE LISÄÄ</a>
            </button>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image
              src={Dogandcat}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image
              src={Horseandkid}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <h3>Kurssitoiminta</h3>
          <p>
            Tarjoamme monipuolisesti opettavia kursseja eläinten hoidosta ja
            niiden terveyden ylläpitämisestä. Kursseilla käydään ensin läpi
            teoriaa ja loppupuolella päästään kokeilemaan kurssilla opittua
            tietoa puiston turvallisessa ympäristössä opettajan ohjauksen
            avulla. Opettajina toimii osaava kotieläinpuiston tallimestari.
            Kurssien henkilö määrä on 10-50.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton">
              <a>LUE LISÄÄ</a>
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
          <h3>Kesäleirit</h3>
          <p>
            Kesällä tarjoamme perheen pienemmille opettavaisia kesäkursseja.
            Tutustumme eri eläimiin ja niiden hoitoon. Kursseilla päästään
            osallistumaan tilan eläinten hoitoon ja jokaiselle kurssilaiselle
            annetaan kurssin ajaksi oma hoidokki, jonka hoidosta vastaa
            leiriläinen kesäleirin aikana.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton">
              <a>LUE LISÄÄ</a>
            </button>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
          <figure className="servicePics">
            <Image
              src={Chikens}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
          <h3>Kurssit</h3>
          <p>
            Järjestämme eri vuodenaikoina niille ajankohtaisia kursseja. Esim.
            keritsemiskurssi järjestetään keväällä, mutta huovutuskurssia taas
            on saatavilla kaikkina vuodenaikoina.
          </p>
          <p>
            Henkinen terveys on tärkeää ja monet tutkimukset osoittavat, että
            eläimet ovat stressin lievittäjiä. Tästäkin syystä ja yksinäisten
            hoidokkiemme (, jotka ovat eivät pääse hoidokeiksi) vuoksi
            järjestämme 'lukemista eläimen kanssa' -kurssia.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton">
              <a>LUE LISÄÄ</a>
            </button>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
        <figure className="servicePics">
            <Image
              src={Goat}
              fluid
              style={{ width: "100%", height: "100%" }}
            />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} >
          <h3>Adoptointiohjelma</h3>
            <p>
              Kotieläinpuiston ensimmäisistä hetkistä tärkeimpänä tavoitteena on
              ollut mahdollistaa koti hylätyille Suomen alueen eläimille oli se
              vuodeksi tai lopun iäksi, mutta toivomme, että eläimet voisivat myös
              löytää kodin muualtakin, jotta olisi tilaa akuuteille tapauksille.
            </p>
            <p>
              Reiluuden nimissä adoptointeja ei oteta vastaan, ellei tilalla ole
              tilaa ja kantokykyä heille. Pyynnöt voi jättää niin sähköpostiin tai
              sosiaalisen median puolella yksityisviestillä.
            </p>
            <p>
              Otamme vastaan myös mm. koiravaljakoita, jotka jäävät työttömiksi
              talvisesongin ulkopuolella ja osa voi ansaita ruokansa, jos
              omistajat kiinnostuvat.
            </p>

            <div className="buttonToCenter">
              <button className="seviceButton">
                <a>LUE LISÄÄ</a>
              </button>
            </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
        <figure className="servicePics">
            <Image
              src={Womanandllama}
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
