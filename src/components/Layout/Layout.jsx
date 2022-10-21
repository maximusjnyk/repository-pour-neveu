import React from 'react';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import Routers from "../../routes/Routers";
import {Carts} from "../UI/cart/Carts";

export const Layout = () => {
	return (
		<div>
			<Header/>
      <Carts />
			<div>
				<Routers/>
			</div>
			<Footer/>
		</div>
	);
};

