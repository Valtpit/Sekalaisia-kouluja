import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Cart({cart}) {
    return (
        <Link to="/order" >
            <p className="ostoskori">
              <BsCart4 size={38} />
            </p>
            <span>{cart.length}</span>
        </Link>
    )
}
