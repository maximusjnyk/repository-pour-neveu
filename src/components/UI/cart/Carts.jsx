import React from 'react';
import {ListGroup} from "reactstrap";
import {CartsItem} from "./CartsItem";
import {Link} from "react-router-dom";

import '../../../styles/shoppingCart.css'
import {useDispatch, useSelector} from "react-redux";
import {cartUiActions} from "../../../store/shopping/cartUiSlice";

export const Carts = () => {
	const dispatch = useDispatch()
	const cartProducts = useSelector(state => state.cart.cartItems)
	
	const toggleCart = () => {
		dispatch(cartUiActions.toggle())
	}
	
	return <div className='cart__container'>
		<ListGroup className='cart'>
			<div className='cart__close' onClick={toggleCart}>
				<span><i class='ri-close-fill'></i></span>
			</div>
			
			<div className="cart__item-list">
				
				{cartProducts.length === 0
					? <h6 className='text-center mt-5'>No item added to the cart</h6>
					: cartProducts.map((item, index) => (
						<CartsItem item={item} key={index}/>
					))
				}
				
			</div>
			<div className="cart__bottom">
				<h6>Subtotal amount: <span>$123</span></h6>
				<button><Link to='/checkout'>Checkout</Link></button>
			</div>
		</ListGroup>
	</div>
};


