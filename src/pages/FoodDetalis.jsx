import React from 'react';
import productImg from '../assets/images/product_01.1.jpg'
import {Helmet} from "../components/Helmet/Helmet";
import {CommonSection} from "../components/UI/commonSection/CommonSection";
import {Col, Container, Row} from "reactstrap";

import '../styles/productDelails.css'

export const FoodDetalis = () => {
  return <Helmet title='Product-details'>
    <CommonSection title='product 01'/>
    
    <section>
      <Container>
        <Row>
          <Col lg='2'  md='2'>
            <div className="product__images">
              <div className="img__item">
                <img src={productImg} alt="" className='w-50'/>
              </div>
              <div className="img__item">
                <img src={productImg} alt="" className='w-50'/>
              </div>
              <div className="img__item">
                <img src={productImg} alt="" className='w-50'/>
              </div>
            </div>
          </Col>
          
          <Col lg='4' md='4'>
            <div className="product__main-img">
              <img src={productImg} alt="" className='w-100'/>
            </div>
          </Col>
  
          <Col lg='6'  md='6'>
            <div className="single__product-content">
              <h2 className='product__title mb-3'>Pizza with mushroom</h2>
              <p className='product__price'>
                {" "}
                Price: <span>$34</span></p>
              <p className='category mb-5'>Category: <span>Burger</span></p>
              <button className='addToCart__btn'>Add to Cart</button>
            </div>
          </Col>
          
          <Col lg='12'>
            <div className="tabs d-flex align-items-center gap-5 py-3 ">
              <h6 className='tab__active'>Description</h6>
              <h6>Review</h6>
            </div>
            
            <div className="tab__content">
              <p>Lorem</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};
