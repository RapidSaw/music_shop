import React from "react";
import './productItem.css';
import { useNavigate } from "react-router-dom";
import ProductCard from "../productCard/productCard";
import { Route, Routes } from "react-router-dom";

const Card = (props) => {
    const navigate = useNavigate()
    const showProduct = () => {
        navigate(`/${props.dataItem.category}/${props.dataItem.id}`)
    }
    return <div className="card">
            <div className="card-img"><img src={props.dataItem.url} alt="photo"></img></div>
            <div className="card-info">
                <h1>{props.dataItem.name}</h1>
                <p>{props.dataItem.price}</p>
            </div>
            <button onClick={()=>{showProduct()}}>Детальніше</button>
            <Routes>
                <Route path={`/${props.dataItem.category}/${props.dataItem.id}`} element={<ProductCard data = {props}/>}/>
            </Routes>
    </div>
    
} 

 export default Card