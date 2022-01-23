// React
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getDetails } from '../../Store/actions/products';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Bootstrap
import {  Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
// React-Router-Dom
import { useParams } from 'react-router-dom';
//import { getProducts } from '../../Store/actions/products';
// CSS
import s from '../../styles/ProductDet.module.css';
import Footer from '../Home/Footer';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//import Table from 'react-bootstrap/Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// const url = 'localhost:3001';

// <---------------------------Componente--------------------------->
const Product = () => {
	const [qty, setQty] = useState(1);
	

  function add(){
    setQty(qty + 1)
  }
  function remove(){
    setQty(qty - 1)
  }
	const { id } = useParams();
	const dispatch= useDispatch();
	const {product} = useSelector(state => state.products)
	console.log('productdetail', product);
	console.log('id', id)
	//let objP = {};
	/* var objProduct = productsP.find((d) => {
		return d.id === id;
	}); */

	// console.log(objProduct);
	/* for (let pr in objProduct) {
		var prop = pr;
		objP[prop] = objProduct[pr];
	}
 */
	// console.log(objP);

	
	useEffect(() => {
		dispatch(getDetails(id))
	}, [dispatch]);

	return (
		<div>
		   	<Container className={s.container}>
				<div className={s.cont_prin}>
					<Row>
						<Col xs={12} md={12} lg={8} className={s.cont_img}>
							<img src={product.image} style={{height: '40%', width: '15%'}}></img>
						</Col>
						<Col xs={12} md={12} lg={4} className={s.cont_info}>
							<div className={s.infog}>
								<h3>{`${product.name}` || `Product Name Here`}</h3>
								<h4 style={{color: '#2EB8B0'}}>$ {`${product.price}` || `00000`}</h4>
								
								<div className={s.contReviw}>
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
									<div className={s.addReview}>
										<p style={{color: '#2EB8B0'}} >Escribir comentario</p>
									</div>
								</div>
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
												product?.attributes?.map(x => {
												return(
														<tr style={{marginTop: '30px'}}>
															 <td style={{marginTop: '30px'}} ><b>{x.name}</b></td>
															 <td style={{marginTop: '30px'}}>{x.value}</td>
														</tr>
												)
											}) : null }
											</tbody>
										</table>
						
								</div>
								
								
								<div className={s.cont_cant}>
									{product.stock > 0 ? (
										<div className={s.cont_cant2}>
											<p style={{fontSize: '17px'}}>Candidad:</p>
											<Button onClick={add} size='small' style={{ height: '30px', marginTop: '10px'}} variant="text"><AddIcon/> </Button>
											<p style={{marginRight: '20px', marginLeft: '20px', marginTop: '10px', fontSize: '15px'}}>{qty}</p>
											<Button onClick={remove} style={{ height: '30px', marginTop: '10px'}} variant="text"><RemoveIcon/> </Button>
											{/* <select
												name='Cantidad'
												id='Cantidad'
												className={s.select}
												value={qty}
												onChange={(e) => {
													setQty(e.target.value);
												}}
											>
												{[...Array(product.stock).keys()].map((x) => {
													return <option value={x + 1}>{x + 1}</option>;
												})}
											</select> */}
											<p style={{fontSize: '17px', marginLeft: '2%'}}> {product.stock}-Unidades Disponibles</p>
										</div>
									) : (
										<h4 className={s.agotadoProct}> Producto Agotado</h4>
									)}
								</div>
								{product.stock > 0 && (
									<div className={s.cont_button}>
										{/* <Button className={s.buttonCom}>Comprar ahora</Button>
										<Button className={s.buttonCar} >
											Agregar al carrito
										</Button> */}
										<Button variant='contained' style={{marginRight: '15%', backgroundColor: '#2EB8B0'}}>Añadir al carrito</Button>
										
										
									</div>
								)}
							</div>
						</Col>
					</Row>
				</div>  
				{/*------------------- reviews -------------------------- */}
				{/* <AddReview />
				<AvisoLoggin  /> */}
				{/* <Reviews /> */}
				{/*------------------- reviews -------------------------- */}
			  </Container>
			<Footer />   
		</div>
	);
};

/* function mapStateToProps(state) {
	return {
		productsP: state.products,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getProductP: () => dispatch(getProducts()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Product); */
export default Product;
