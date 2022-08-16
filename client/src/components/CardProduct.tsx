// icon
// import { FaBookmark } from "react-icons/fa";
import '../components/components.css';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';


interface TypeProps {
    productId: any,
    imageCard: any,
    nameCard: any,
    descriptionCard: any,
    priceCard: any,
}

export default function CardProduct(props: TypeProps) {
   

    return (
        <Link style={{ textDecoration: 'none' }} to={`/detail-product/${props.productId}`}>
            <div className="card-product-body">
                <img src={props.imageCard} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">{props.nameCard}</p>
                    <p className="card-text">{props.descriptionCard}</p>
                    <p>{props.priceCard}$</p>
                </div>
            </div>
            <div className="button-buy-card" /* onClick={() => addToCart(props)} */><p>ADD TO CART</p></div>
        </Link>

    )
}