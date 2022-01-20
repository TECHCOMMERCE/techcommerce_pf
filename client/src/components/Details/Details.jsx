import React, {useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getDetails } from '../../Store/actions/products';
import { Main, Attributes, Name, Img, Stock, Content } from './styles';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Details= (props) => {
  const dispatch= useDispatch();
  const {product} = useSelector(state => state.products)
  const {id} =useParams();
  console.log(product)
 // let id=2;
  console.log(id)
  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch]);
  
  const [qty, setQty] =useState(1)

  function add(){
    setQty(qty + 1)
  }
  function remove(){
    setQty(qty - 1)
  }


    return(
      <Main>
        <Img src={product?.image}/>
        <Content>
        <h1 style={{textAlign: 'center', marginRight: '5%'}}>{product?.name}</h1>
        <p style={{color: '#2EB8B0', marginTop: '30px', fontSize: '27px', marginBottom: '20px'}}>{product.condition === 'new' ? product.condition?.toUpperCase() : product.condition}!</p>
        <div style={{borderBottom: '1px solid black', borderTop: '1px solid black'}}>
        {
          product?.attributes?.length?
          product?.attributes?.map(x => {
            return(
              <Attributes>
                <Name><b>{x.name}:</b></Name>
                <p>{x.value_name}</p>
              </Attributes>
            )
          }) :null
        }
        </div>
        <Stock>
        <Button onClick={add} size='small' style={{ height: '30px'}} variant="text"><AddIcon/> </Button>
      <p style={{marginRight: '20px', marginLeft: '20px', marginTop: '5px'}}>{qty}</p>
      <Button onClick={remove} style={{ height: '30px'}} variant="text"><RemoveIcon/> </Button>
      </Stock>

      <Button style={{backgroundColor: '#2EB8B0', color: 'white'}} variant="contained">Add to Cart</Button>
      </Content>
      </Main>
    )
}



export default Details;