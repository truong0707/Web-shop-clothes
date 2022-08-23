// icon
// import { FaBookmark } from "react-icons/fa";
import '../components/components.css';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';


interface TypeProps {
    productId: any,
    imageProduct: any,
    nameProduct: any,
    descriptionProduct: any,
    priceProduct: any,
}

export default function CardProduct(props: TypeProps) {
   

    return (
        <Link style={{ textDecoration: 'none' }} to={`/detail-product/${props.productId}`}>
            <div className="card-product-body">
                <img src={props.imageProduct} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">{props.nameProduct}</p>
                    <p className="card-text">{props.descriptionProduct}</p>
                    <p>{props.priceProduct}$</p>
                </div>
            </div>
            <div className="button-buy-card" /* onClick={() => addToCart(props)} */><p>ADD TO CART</p></div>
        </Link>

    )
}