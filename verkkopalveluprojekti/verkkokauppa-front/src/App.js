import { React, useEffect, useState } from "react";
import './css/App.css'
import { Switch, Route, useLocation } from "react-router-dom"
import Home from "./js/Home"
import AboutUs from "./js/AboutUs"
import Services from "./js/Services"
import Shop from "./js/Shop"
import Category from "./js/Category"
import Product from './js/Product'
import About from "./js/About"
import NotFound from "./js/NotFound"
import MaintenanceC from "./js/maintenanceC"
import MaintenanceP from "./js/maintenanceP"
import Order from "./js/Order"
import Navbar from "./js/Navbar"
import Footer from "./js/Footer"


const URL = "http://localhost/kotielainpuisto"

function App () {
  const [category, setCategory] = useState(null)
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState([]);
    
  let location = useLocation()

  useEffect(()=> {
    if (location.state !== undefined) {
      if (location.pathname === "/category") {
        setCategory({trnro: location.state.trnro,trnimi: location.state.trnimi,teksti: location.state.teksti})
      } else if (location.pathname === "/product") {
        setProduct({
          tuotenro: location.state.tuotenro, tuotenimi: location.state.tuotenimi,
          trnro: location.state.trnro, hinta: location.state.hinta,
          vari: location.state.vari, maara: location.state.maara, 
          koko: location.state.koko, lankaTyyppiEläin: location.state.lankaTyyppiEläin,
          pituus: location.state.pituus, teksti: location.state.teksti
        })
      }
    }
  }, [location.state])

      {/* ostoskoriin tuotteen lisääminen */ }

      
      useEffect(() => {
        if ('cart' in localStorage){
          setCart(JSON.parse(localStorage.getItem('cart')));
        }
      },[])
    
      function addToCart(product){
        if (cart.some(item => item.tuotenro === product.tuotenro)) {
          const existingProduct = cart.filter(item => item.tuotenro === product.tuotenro)
          updateAmount(parseInt(existingProduct[0].amount) + 1, product)
        } else {
          product["amount"] = 1;
          const newCart = [...cart,product];
          setCart(newCart);
          localStorage.setItem('cart',JSON.stringify(newCart));
        }
      }

      function removeFromCart(product) {
        const itemsWithoutRemoved = cart.filter(item => item.tuotenro !== product.tuotenro)
        setCart(itemsWithoutRemoved)
        localStorage.setItem("cart", JSON.stringify(itemsWithoutRemoved))
      }

      function updateAmount(amount,product) {
        product.amount = amount;
        const index = cart.findIndex((item => item.tuotenro === product.tuotenro));
        const modifiedCart = Object.assign([...cart],{[index]: product});
        setCart(modifiedCart);
        localStorage.setItem('cart',JSON.stringify(modifiedCart));
      }

      function emptyCart() {
        setCart([])
        localStorage.removeItem("cart")
      }
  

  return (
    <>
    <Navbar url={URL} cart={cart} />
    <div>
    <Switch>
      <Route
        path="/" render={() =>
        <Home
          url={URL}
          /> 
        } exact
      />
      <Route
        path="/aboutus" render={() =>
        <AboutUs
          url={URL}
          /> 
        } exact
      />
      <Route
        path="/services" render={() =>
        <Services
          url={URL}
          /> 
        } exact
      />
      <Route
        path="/shop" render={() =>
        <Shop
          url={URL}
          
          addToCart={addToCart} /> 
        }
      />
      <Route
        path="/category" render={() =>
        <Category
          url={URL}
          category={category}
          product={product}
          addToCart={addToCart} /> 
        }
      />
      <Route
        path="/product" render={() =>
        <Product
          url={URL}
          category={category}
          product={product}
          cart={cart}
          addToCart={addToCart}
          updateAmount={updateAmount} /> 
        }
      />
      <Route
        path="/about" render={() =>
        <About
          url={URL}
          /> 
        } exact
      />
      <Route
        path="/order" render={() =>
        <Order
        url={URL}
        cart={cart}
        updateAmount={updateAmount}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}/> 
        }
      />
      <Route
        path="/maintenanceC" render={() =>
        <MaintenanceC
          url={URL}
          /> 
        }
      />
      <Route
        path="/maintenanceP" render={() =>
        <MaintenanceP
          url={URL}
          /> 
        }
      />
      <Route component={NotFound} />
      
    </Switch>
    </div>
    <Footer />
    </>
  )
}

export default App
