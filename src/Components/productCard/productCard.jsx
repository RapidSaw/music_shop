import './productCard.css'
import React from "react";
import staticData from '../../data/data'

const ProductCard = ({data, active, setActive}) => {
    
    return (
        <section className={active ? "product-card-wrapper active" : "product-card-wrapper"}>
            <div className="product-card" onClick={e => e.stopPropagation()}>
                <div className='back' onClick={() => setActive(false)}><img className='button-img' src={staticData.productCard.back} alt="" /></div>
                <div className='close' onClick={() => setActive(false)}><img className='button-img' src={staticData.productCard.close} alt="" /></div>
                <div className='product-card-img'><img src={data.dataItem.url} alt="photo" /></div>
                <div className='product-card-content'>
                    <h2>{data.dataItem.name}</h2>
                    <h3>{data.dataItem.price}</h3>
                    <div className='product-card-buttons'>
                        <button className='buy'>{staticData.productCard.buy}</button>
                        <button className='favorites'></button>
                    </div>
                    <p>{data.dataItem.description}</p>
                </div>
            </div>
        </section>
    )
}

export default ProductCard