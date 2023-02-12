import React from "react";
import './productItem.css';
import ProductCard from "../productCard/productCard";
import {useState} from 'react'

const Card = (props) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="card">
            <div className="card-img"><img src={props.dataItem.url} alt="photo"></img></div>
            <div className="card-info">
                <h1>{props.dataItem.name}</h1>
                <p>{props.dataItem.price}</p>
            </div>
            <button onClick={() => setModalActive(true)}>Детальніше</button>
            <ProductCard data={props} active={modalActive} setActive={setModalActive} />
        </div>
    )

} 

 export default Card