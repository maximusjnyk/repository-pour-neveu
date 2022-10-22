import React, {useState} from 'react';
import {Helmet} from "../components/Helmet/Helmet";
import {CommonSection} from "../components/UI/commonSection/CommonSection";
import {Col, Container, Row} from "reactstrap";
import ReactPaginate from "react-paginate";
import product from '../assets/fake-data/products'
import {ProductCard} from "../components/UI/productCard/ProductCard";

import '../styles/allFoods.css'
import '../styles/pagination.css'

export const AllFoods = () => {
	const [searchTern, setSearchTern] = useState('')
	const [pageNumber, setPageNumber] = useState(0)
	
	const searchedProduct = product.filter((item) => {
		if (searchTern.value === '') return item;
		if (item.title.toLowerCase().includes(searchTern.toLowerCase()))
			return item;
	})
	
	const productPerPage = 12
	const visitedPage = pageNumber * productPerPage
	const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
	
	const pageCount = Math.ceil(product.length / productPerPage)
	
	const changePage = ({ selected }) => {
		setPageNumber(selected)
	}
	
	return <Helmet title='All-Foods'>
		<CommonSection title='All Foods'/>
		<section>
			<Container>
				<Row>
					<Col lg='6' md='6' sm='6'>
						<div className="search__widget d-flex align-items-center justify-content-between w-50">
							<input
								type="text"
								placeholder="I'm looking for..."
								value={searchTern}
								onChange={e => setSearchTern(e.target.value)}
							/>
							<span><i class='ri-search-line'></i></span>
						</div>
					</Col>
					
					<Col lg='6' md='6' sm='6' className='mb-5'>
						<div className="sorting__widget text-end">
							<select className='w-50'>
								<option>Default</option>
								<option value="ascending">Alphabetically, A-Z</option>
								<option value="descending">Alphabetically, Z-A</option>
								<option value="high-price">High Price</option>
								<option value="low-price ">Low Price</option>
							</select>
						</div>
					</Col>
					{displayPage.map((item) => (
						<Col lg='3' md='4' sm='6' xs='6'
						     className='mb-4'
						     key={item.id}>
							{" "}
							<ProductCard item={item}/>
						</Col>
					))}
					
					<div>
						<ReactPaginate
							pageCount={pageCount}
							onPageChange={changePage}
							previousLabel={'Prev'}
							nextLabel={'Next'}
							containerClassName='paginationBtn'
						/>
					</div>
				</Row>
			</Container>
		</section>
	</Helmet>;
};

