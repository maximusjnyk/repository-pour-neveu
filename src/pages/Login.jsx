import React, {useRef} from 'react';
import {Helmet} from "../components/Helmet/Helmet";
import {CommonSection} from "../components/UI/commonSection/CommonSection";
import {Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";

export const Login = () => {
  const loginNameRef = useRef()
  const loginPasswordRef = useRef()
  
  const submitHandle = e => {
    e.preventDefault(e)
  }
 
	return <Helmet title='login'>
		<CommonSection title='login'/>
		
		<section>
			<Container>
				<Row>
					<Col lg='6' md='6' sm='12' className='m-auto text-center'>
						<form className="form mb-5" onSubmit={submitHandle}>
							<div className="form__group">
								<input type="email" placeholder='Email' required ref={loginNameRef}/>
							</div>
							<div className="form__group">
								<input type="password" placeholder='Password' required ref={loginPasswordRef}/>
							</div>
							<button type='submit' className='addToCart__btn'>Login</button>
						</form>
						<Link to='/register '>Already have an account? Create an account</Link>
					</Col>
				</Row>
			</Container>
		</section>
	</Helmet>
};

