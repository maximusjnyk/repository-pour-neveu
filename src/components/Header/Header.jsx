import React, {useEffect, useRef} from 'react';
import {Container} from "reactstrap";
import logo from '../../assets/images/res-logo.png'
import {Link, NavLink} from "react-router-dom";
import '../../styles/header.css'
import {useDispatch, useSelector} from "react-redux";
import {cartUiActions} from "../../store/shopping/cartUiSlice";

const nav__links = [
	{
		display: 'Home',
		path: '/home'
	},
	{
		display: 'Foods',
		path: '/foods'
	},
	{
		display: 'Cart',
		path: '/cart'
	},
	{
		display: 'Contact',
		path: '/contact'
	},
]

export const Header = () => {
	const dispatch = useDispatch()
	const menuRef = useRef(null)
	const headerRef = useRef(null)
	const totalQuatity = useSelector(state => state.cart.totalQuantity)
	const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
	
	
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				headerRef.current.classList.add('header__shrink')
			} else headerRef.current.classList.remove('header__shrink')
		})
		return () => window.removeEventListener('scroll')
	}, []);
	
	const toggleCart = () => {
		dispatch(cartUiActions.toggle())
	}
	
	
	return <header className='header' ref={headerRef}>
		<Container>
			<div className="nav__wrapper d-flex align-items-center justify-content-between">
				<div className="logo">
					<img src={logo} alt="logo"/>
					<h5>Tasty Treat</h5>
				</div>
				
				{/*====MENU====*/}
				
				<div className="navigation" ref={menuRef} onClick={toggleMenu}>
					<div className="menu d-flex align-items-center gap-5">
						{
							nav__links.map((item, index) => (
								<NavLink
									to={item.path}
									key={index}
									className={navClass => navClass.isActive ? 'active__menu' : ''}
								
								>{item.display}</NavLink>
							))
						}
					</div>
				</div>
				
				{/*====NAV RIGHT ICONS====*/}
				
				<div className="nav__right d-flex align-content-center gap-4">
          <span className="cart__icon" onClick={toggleCart}>
            <i class="ri-shopping-basket-line"></i>
            <spna className="cart__badge">{totalQuatity}</spna>
          </span>
					
					<span className="user">
            <Link to='/login'><i class='ri-user-2-line'> </i></Link>
          </span>
					
					<span className="mobile__menu" onClick={toggleMenu}>
            <i class='ri-menu-line'></i>
          </span>
				</div>
			
			</div>
		</Container>
	</header>
};
