// icon
// import { FaBookmark } from "react-icons/fa";
import '../reuseComponents/reuseComponents.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function CardProduct(props: any) {
    const [animation, setAnimation] = useState('')
    // const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleClick = () => {
            if (window.scrollY > 300) {
                setAnimation('cc')
            } else {
                setAnimation('')
            }
        }
        // console.log(window.scrollY)

        window.addEventListener('scroll', handleClick)
    }, [])


    return (
        <Link className={animation} style={{ textDecoration: 'none' }} to={`/detail-product/${props.productId}`}>
            <div className="card-product-body">
                <img src={props.imageCard} className="card-img-top" alt="..." />
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