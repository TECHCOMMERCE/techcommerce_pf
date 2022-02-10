// React
import { getDetails } from '../../Store/actions/products';
// Iconos
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Bootstrap
import {  Col, Container, Row } from 'react-bootstrap';
// React-Router-Dom
import { useParams } from 'react-router-dom';
//import { getProducts } from '../../Store/actions/products';
// CSS
import s from '../../styles/ProductDet.module.css';
import Footer from '../Home/Footer';
import { Button } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToCart } from '../../Store/actions/carts';
import {getProductsCartUser} from '../../Store/actions/carts.js'
import {getWishList} from '../../Store/actions/wishlist'

import Swal from 'sweetalert2';
import Reviews from './Reviews';
import axios from 'axios'


// const url = 'localhost:3001';

// <---------------------------Componente--------------------------->
const Product = () => {
	const [qty, setQty] = useState(1);
	

  function add(stock){
    setQty(qty<stock?qty + 1:qty)
  }
  function remove(){
    setQty(qty>1?qty - 1:1)
  }
	const { id } = useParams();
	const dispatch= useDispatch();
	const {product} = useSelector(state => state.products)
	const cart = useSelector(state => state.cart.productscart);
	const fav = useSelector(state => state.wishlist.wishList);
	const user = JSON.parse(localStorage.getItem("user"));
  const idUser = !user?null:user.user.userid;
	// console.log('productdetail', product);
	// console.log('id', id)
	const SERVER = process.env.REACT_APP_SERVER ||'http://localhost:3001/';
	
	useEffect(() => {
		dispatch(getDetails(id))
		dispatch(getProductsCartUser(idUser)); 
		dispatch(getWishList(idUser,id))
	}, [dispatch, id,idUser]);

	const addCart = (product) => {
		dispatch(addToCart({...product,quantity: qty},idUser,cart))
		Swal.fire({
      icon: 'success',
      text: 'Producto agregado correctamente!',
    })
	}

	const addFavorites = async (product) => {
		let data = await axios.put(`${SERVER}wishlist/${idUser}/${product.productid}`)
		dispatch(getWishList(idUser,id))
	}

	return (
		<div>
		   	<Container className={s.container}>
				<div className={s.cont_prin}>
					<Row>
						<Col xs={12} md={12} lg={8} className={s.cont_img}>
							<img  className={s.img} src={product.image} alt="product" style={{height: '40%', width: '140px'}}></img>
						</Col>
						<Col xs={12} md={12} lg={4} className={s.cont_info}>
							<div className={s.infog}>
								<h3>{`${product.name}` || `Product Name Here`}</h3>
								<h4 style={{color: '#2EB8B0'}}>$ {`${product.price}` || `00000`}</h4>
								<div className={s.cont_cant}>
									{product.stock > 0 ? (
										<div className={s.cont_cant2}>
											<p style={{fontSize: '17px'}}>Candidad:</p>
											<Button onClick={remove} style={{ height: '30px', marginTop: '10px'}} variant="text"><RemoveIcon/> </Button>
											<p style={{marginRight: '20px', marginLeft: '20px', marginTop: '10px', fontSize: '15px'}}>{qty}</p>
											<Button onClick={()=>add(product.stock)} size='small' style={{ height: '30px', marginTop: '10px'}} variant="text"><AddIcon/> </Button>														
											<p style={{fontSize: '17px', marginLeft: '2%'}}> {product.stock}-Unidades Disponibles</p>
										</div>
									) : (
										<h4 className={s.agotadoProct}> Producto Agotado</h4>
									)}
								</div>
								{product.stock > 0 && (
									<div className={s.cont_button}>
										
										<Button variant='contained' style={{ backgroundColor: '#2EB8B0'}} onClick={()=>addCart(product)}>Añadir al carrito</Button>
										<Button variant='contained' style={{marginTop: '15px', backgroundColor: '#FF'}} onClick={()=>addFavorites(product)}>{fav.length===0?'Añadir a favoritos':'Añadido a Favoritos'}</Button>
									</div>
									
								)}
								{/* <div className={s.contReviw}>
									<div className={s.icon}>
										<div className={s.emptyStarsCont}>
											<div className={s.emptyStars}>
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
											</div>
										</div>
										<div className={s.fullStarsRate}>
											<div className={s.fullStars}>
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
												<FontAwesomeIcon icon={faStar} />
											</div>
										</div>
									</div>
									
									{/* <div className={s.addReview}>
										<p style={{color: '#2EB8B0'}} >Escribir comentario</p>
									</div> }
								</div> */}
<hr/>
								<div className={s.attributesContainer} >

									<table>
										<thead>
											<tr >
												 <th>Caracteristicas</th>
												 <th></th>
											</tr>
										</thead>
									 	<tbody >
											{ product?.attributes ?
												product?.attributes?.map((x,i) => {
												return(
														<tr style={{marginTop: '30px'}} key={i}>
															 <td style={{marginTop: '30px'}} ><b>{x.name}</b></td>
															 <td style={{marginTop: '30px'}}>{x.value}</td>
														</tr>
												)
											}) : null }
											</tbody> 
										</table>

								</div>
							</div>
						</Col>
					</Row>
				</div>  
				{/*------------------- reviews -------------------------- */}
				{/* <AddReview />
				<AvisoLoggin  /> */}
				<Reviews productid={id} />
				{/*------------------- reviews -------------------------- */}
			  </Container>
			<Footer />   
		</div>
	);
};

export default Product;
