import { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import DogandCat from '../img/dogandcat.jpg';
import Chikens from '../img/chikens.jpg';
import Womanandllama from '../img/womanandllama.jpg';


export default function Home() {

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
        <h1>Tervetuloa sivuillemme!</h1>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}} >
          <p>
            Toivon kotipuisto sijaitsee n.30 min ajomatkan päästä Oulun keskustasta luonnon keskuudessa 
            kauniin  merinäkymän vieressä. Tilalle pääsee helposti myös julkisia käyttäen. 
          </p>
          <p>Verkkosivuillamme pääset tarkistamaan ajankohtaiset tapahtumat, tutkimaan puiston tekemiä
            tuotteita (mm. alpakanvillalankaa, maapähkinäherkkuja koirille ja villahuiveja) sekä tilaamaan lippuja
            puistoon.</p>
          <p>
            Tilalla pääset tutustumaan kiltteihin ja hellyttäviin kotieläimiin, kuten lampaisiin, laamoihin, 
            lehmiin, kissoihin, koiriin, kaneihin, kanoihin, ankkoihin, vuohiin tai jopa hieman 
            harvinaisempiin eläimiin kuten poroihin.
          </p>
          <p>Puistosta löytyy myös eläinten lisäksi muuta toimintaa: leikkipuisto perheen pienemmille, missä 
            on kiipeilyteline ja keinuja, sekä askartelupaja, jossa pääsee kokeilemaan huovutusta tai maalaamista.
          </p>
          <p>
            Jos nälkä yllättää, vieraillessa tilalta löytyy laadukas kahvila, josta saa ostettua erilaisia herkkuja. 
            Samasta rakennuksesta löytyy myös kotieläinpuiston pieni putiikki, jonka mm. villatuotteet on valmistettu tilan 
            omasta villasta.
          </p>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 2}} >
          <figure className="servicePics">
            <Image src={Chikens} fluid style={{ width: "100%", height: "100%", paddingTop: "10px" }} />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 2}} >
          <h3>Palvelut</h3>
          <p>
            Tarjoamme monipuolisia palveluita vierailijoille, kuten opastettuja kierroksia, kummitoimintaa eläimille, terapiaa ja
            monipuolisesti opettavia kursseja. Palveluihin voi tutustua tarkemmin Palvelut-sivulta.
          </p>
          <div className="buttonToCenter">
            <button className="seviceButton" >
                  <Link 
                      to={{pathname: "/services"}}>
                      LUE LISÄÄ
                  </Link></button>
          </div>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}} >
          <figure className="servicePics">
            <img src={Womanandllama} fluid style={{ width: "100%", height: "100%" }} />
          </figure>
        </Col>
      </Row>
      <Row>
        <Col xs={{span: 12, order: 2}} lg={{span: 6, order: 1}}>
        <h3>Ajankohtaista</h3>

        <p><b>5.9</b> Koiran koulutus -kurssi osa 2</p>
        <p><b>20.8</b> Villahuovutuskurssi</p>
        <p><b>18.7</b> Koiran koulutus kurssi osa.1</p>
        <p><b>10.7</b> Vaellusretki ponien ja laamojen kanssa</p>
        <p><b>5.6</b> Avoimet ovet</p>
        </Col>
        <Col xs={{span: 12, order: 1}} lg={{span: 6, order: 1}}>
          <figure className="servicePics">
            <img src={DogandCat} fluid style={{ width: "100%", height: "100%" }} />
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
