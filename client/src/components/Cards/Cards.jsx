import React, {useState, useEffect} from 'react';
import { getProducts } from '../../Store/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import { Items, Buttons } from './styles';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Cards = () => {

  const dispatch = useDispatch();
  const products  = useSelector( state => state.products);
  const [page, setPage]= useState(0)
  console.log('products', products.products.rows)

  function back () {
    setPage(page - 1)
    window.scrollTo(0, 0)
    //dispatch(getProducts(page));
  }

  function foward () {
    setPage(page + 1)
    window.scrollTo(0, 0)
    //dispatch(getProducts(page)); check
  }
//hola
  useEffect(() => {
    
    dispatch(getProducts(page));
}, [page]);

  return (
    <Items>
      {products.products?.rows?.length? 
      products.products.rows.map( x => {
        return <Card  key={x.productid} name={x.name} image={x.image} price={x.price} stock={x.stock} />
      }) 
      : null
    } 
      <Buttons>
      <Button onClick={back} style={{ backgroundColor: '#000000', margin: '100px'}} variant="contained"><ArrowBackIcon/></Button>
      <Button onClick={foward} style={{ backgroundColor: '#000000', margin: '100px'}} variant="contained"><ArrowForwardIcon/></Button>
      </Buttons>
    
    </Items>
  )
}



export default Cards;