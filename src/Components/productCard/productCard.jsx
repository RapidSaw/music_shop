import './productCard.css'
import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

const ProductCard = (props) => {
    let [product, setProduct] = useState([])
    useEffect(() => {setProduct(props.data[id - 1])
    }, [])
    let {id} = useParams()
    
    return (
        <section>
            <div className="product-card">
                <div className='product-card-img'><img src={product.url} alt="photo" /></div>
                <div className='product-card-content'>
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>
                    <div className='product-card-buttons'>
                        <button className='buy'>Придбати</button>
                        <button className='favorites'></button>
                    </div>
                    <p>{product.description}</p>
                </div>
            </div>
            
        </section>
    )
}

export default ProductCard