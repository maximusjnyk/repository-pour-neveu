import React from 'react';
import {Link} from "react-router-dom";

import '../../../styles/productCard.css'
import {useDispatch} from "react-redux";
import {cartActions} from "../../../store/shopping/cartSlice";

export const ProductCard = (props) => {
    const dispatch = useDispatch()
    const {id, title, image01, price} = props.item

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price,

        }))
    }

    return (
        <div className='product__item'>
            <div className="product__img">
                <img src={image01} alt="product" className='w-50'/>
            </div>

            <div className="product__content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>${price}</span>
                    <button
                        onClick={addToCart}
                        className='addToCart__btn'
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
