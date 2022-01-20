// React
import { faStar } from '@fortawesome/free-solid-svg-icons';
// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
// Bootstrap
import { Button, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
// React-Router-Dom
import { useParams } from 'react-router-dom';
import { getProducts } from '../../Store/actions/products';
// CSS
import s from '../../styles/ProductDet.module.css';
import Footer from '../Home/Footer';


// const url = 'localhost:3001';

// <---------------------------Componente--------------------------->
const Product = ({ productsP, getProductP }) => {
	const [qty, setQty] = useState(1);
	const { id } = useParams();
	let objP = {};
	var objProduct = productsP.find((d) => {
		return d.id === id;
	});

	// console.log(objProduct);
	for (let pr in objProduct) {
		var prop = pr;
		objP[prop] = objProduct[pr];
	}

	// console.log(objP);

	
	useEffect(() => {
		getProductP();
	}, []);

	return (
		<div>
			<Container className={s.container}>
				<div className={s.cont_prin}>
					<Row>
						<Col xs={12} md={12} lg={8} className={s.cont_img}>
							<img src={objP.image}></img>
						</Col>
						<Col xs={12} md={12} lg={4} className={s.cont_info}>
							<div className={s.infog}>
								<h3>{`${objP.name}` || `Product Name Here`}</h3>
								<h4>$ {`${objP.price}` || `00000`}</h4>
								<h6>Referencia: codReferencia</h6>
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
										<p >Escribir comentario</p>
									</div>
								</div>
								
								<p>{`${objP.attributes}` || `Descripcion no disponible`}</p>
								<p>
									<span className={s.dim}>Dimensiones:</span> {`${objP.condition}` || `noDisponible`}
								</p>
								<div className={s.cont_cant}>
									{objP.stock > 0 ? (
										<div className={s.cont_cant2}>
											<label for='Cantidad'>Candidad:</label>
											<select
												name='Cantidad'
												id='Cantidad'
												className={s.select}
												value={qty}
												onChange={(e) => {
													setQty(e.target.value);
												}}
											>
												{[...Array(objP.stock).keys()].map((x) => {
													return <option value={x + 1}>{x + 1}</option>;
												})}
											</select>
											<h6> {objP.stock} Unidades Disponibles</h6>
										</div>
									) : (
										<h4 className={s.agotadoProct}> Producto Agotado</h4>
									)}
								</div>
								{objP.stock > 0 && (
									<div className={s.cont_button}>
										<Button className={s.buttonCom}>Comprar ahora</Button>
										<Button className={s.buttonCar} >
											Agregar al carrito
										</Button>
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

function mapStateToProps(state) {
	return {
		productsP: state.products,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getProductP: () => dispatch(getProducts()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
