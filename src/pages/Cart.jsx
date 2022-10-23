import React from 'react';
import {Helmet} from "../components/Helmet/Helmet";
import {CommonSection} from "../components/UI/commonSection/CommonSection";
import {Col, Container, Row} from "reactstrap";

import '../styles/cartPage.css'
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/shopping/cartSlice";
import {Link} from "react-router-dom";

export const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  
  return <Helmet title='Cart'>
    <CommonSection title='You Cart'/>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              cartItems.length === 0
                ? <h5 className='text-center'>Your cart is empty</h5>
                : <table className='table table-bordered'>
                  <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    cartItems.map(item => <Tr item={item} key={item.id}/>)
                  }
                  </tbody>
                </table>
            }
            
            <div className='mt-4'>
              <h6>Subtotal: $ <span className='cart__subtotal'>{totalAmount}</span></h6>
              <p>Taxes and shipping will calculate at checkout</p>
              <div className='cart__page-btn'>
                <button className='addToCart__btn me-3'>
                  <Link to='/foods'>Continue Shipping</Link>
                </button>
                <button className='addToCart__btn'>
                  <Link to='/checkout'>Proceed to checkout</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

const Tr = props => {
  const dispatch = useDispatch()
  
  const { id, image01, title, price, quantity } = props.item
  
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  
  return <tr>
    <td className='text-center cart__img-box'>
      <img src={image01} alt="" />
    </td>
    <td className='text-center'>{title}</td>
    <td className='text-center'>${price}</td>
    <td className='text-center'>{quantity}</td>
    <td className='text-center cart__item-delete'>
      <i class='ri-delete-bin-line' onClick={deleteItem}></i>
    </td>
  </tr>
}
