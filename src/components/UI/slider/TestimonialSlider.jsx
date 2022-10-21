import React from 'react';
import Slider from "react-slick";

import '../../../styles/slider.css'

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import ava04 from '../../../assets/images/ava-4.jpg'

export const TestimonialSlider = () => {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return <Slider {...settings}>
    <div>
      <p className="review__text">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        atque, quam minus totam maiores laborum! Impedit consectetur illum
        aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
        quis dolorem quas!"
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava01} alt="avatar" className='w-25 rounded'/>
        <h6>Jhon Doe</h6>
      </div>
    </div>
    <div>
      <p className="review__text">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        atque, quam minus totam maiores laborum! Impedit consectetur illum
        aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
        quis dolorem quas!"
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava02} alt="avatar" className='w-25 rounded'/>
        <h6>Maximus Janukovich</h6>
      </div>
    </div>
    <div>
      <p className="review__text">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        atque, quam minus totam maiores laborum! Impedit consectetur illum
        aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
        quis dolorem quas!"
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava03} alt="avatar" className='w-25 rounded'/>
        <h6>Jhony D</h6>
      </div>
    </div>
    <div>
      <p className="review__text">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        atque, quam minus totam maiores laborum! Impedit consectetur illum
        aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
        quis dolorem quas!"
      </p>
      <div className='slider__content d-flex align-items-center gap-3'>
        <img src={ava04} alt="avatar" className='w-25 rounded'/>
        <h6>Vladimir Putin</h6>
      </div>
    </div>
  </Slider>
};
