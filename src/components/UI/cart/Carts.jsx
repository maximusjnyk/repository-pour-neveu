import React from 'react';
import {ListGroup} from "reactstrap";
import {CartsItem} from "./CartsItem";
import {Link} from "react-router-dom";

import '../../../styles/shoppingCart.css'

export const Carts = () => {
	return <div className='cart__container'>
		<ListGroup className='cart'>
			
			
			<div className='cart__close'>
				<span><i class='ri-close-fill'></i></span>
			</div>
			
			<div className="cart__item-list">
				<CartsItem/>
			</div>
			
			<div className="cart__bottom">
				<h6>Subtotal amount: <span>$123</span></h6>
				<button><Link to='/checkout'>Checkout</Link></button>
			</div>
		</ListGroup>
	</div>
};


