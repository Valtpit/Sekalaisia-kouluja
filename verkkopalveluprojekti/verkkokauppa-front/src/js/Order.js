import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/order.css";
import Logo from "../img/logo.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Order({url, cart, updateAmount, removeFromCart, emptyCart }) {
  const [asETUnimi, setAsETUnimi] = useState("")
  const [asSUKUnimi, setAsSUKUnimi] = useState("")
  const [postinro, setPostinro] = useState("")
  const [postitmp, setPostitmp] = useState("")
  const [puh, setPuh] = useState("")
  const [sposti, setSposti] = useState("")
  const [orderDone, setOrderDone] = useState(false)

  function changeAmount(e, product) {
    updateAmount(e.target.value, product);
  }

  function save(e) {
    e.preventDefault()
    const json = JSON.stringify({ asETUnimi:asETUnimi, asSUKUnimi:asSUKUnimi, postinro:postinro, postitmp:postitmp, puh:puh, sposti:sposti, cart:cart})
    axios.post(url + "/order/add.php", json,{
      headers: {
        "Content-Type" : "application/json"
        }
    })
    .then(() => {
        setAsETUnimi("");
        setAsSUKUnimi("");
        setPostinro("");
        setPostitmp("");
        setPuh("");
        setSposti("");
        emptyCart()
        setOrderDone(true)
    }).catch (error => {
        alert(error.response.data.error)
    })
  }

  let sum = 0
  if (orderDone=== false) {
  return (
    <Container fluid className="mx-auto">
      <Row>
        <Col xs={12}>
          <h3>Ostoskori</h3>
        </Col>
        <Col xs={12}>
          <div className="ostokset">
            <table>
              {cart.map((product) => {
                sum+=parseFloat(product.hinta) * product.amount
                return (
                  <tr>
                    <td>{product.tuotenimi}</td>
                    <td>{(product.hinta * product.amount).toFixed(2)} €</td>
                    <td>
                      Määrä:   
                      {" "}
                      <input
                        type="number"
                                step="1"
                                min="1"
                        onChange={(e) => changeAmount(e, product)}
                        value={product.amount}
                      />
                    </td>
                    <td>
                      <button className="delete-btn" onClick={() => removeFromCart(product)}>Poista</button>
                    </td>
                  </tr>
                );
              })}
            </table>
            <table>
              <tr>
                <td><h2>Loppusumma: {sum.toFixed(2)} €</h2></td>
                <td><button className="deletes-btn" href="#" onClick={e => emptyCart()}>Tyhjennä ostoskori</button></td>
              </tr>
            </table>

            <form className="order-form" onSubmit={save}>
              <div>
                <label>Etunimi: </label>
                <input className="form-control" onChange={e => setAsETUnimi(e.target.value)} />
              </div>
              <div>
                <label>Sukunimi: </label>
                <input className="form-control" onChange={e => setAsSUKUnimi(e.target.value)} />
              </div>
              <div>
                <label>Postinumero: </label>
                <input className="form-control" onChange={e => setPostinro(e.target.value)} />
              </div>
              <div>
                <label>Postitoimipaikka: </label>
                <input className="form-control" onChange={e => setPostitmp(e.target.value)} />
              </div>
              <div>
                <label>Puhelinnumero: </label>
                <input className="form-control" onChange={e => setPuh(e.target.value)} />
              </div>
              <div>
                <label>Sähköposti: </label>
                <input className="form-control" onChange={e => setSposti(e.target.value)} />
              </div>
              <div className="order-btn">
                <button>Tilaa</button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
  }
  else {
    return (
    <div>
      <h3>Kiitos tilauksesta
        <br/>
        <img src={Logo} />
      </h3>
      <a>
        <Link
          to={{pathname: "/"}}>
          <h3>Klikkaa tästä palataksesi etusivulle.</h3>
        </Link>
      </a>
    </div>
    )
  }
}
