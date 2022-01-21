import React, {useState, useEffect} from 'react';
import { getProducts } from '../../Store/actions/products.js';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import { Items, Buttons } from './styles';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSearchParams } from 'react-router-dom';

import s from "../../assets/styles/Products.module.css";

const Cards = () => {

  const dispatch = useDispatch();
  const products  = useSelector(state => state.products);
  const [page, setPage]= useState(0)

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
  // useEffect(() => {
    
  //   dispatch(getProducts(page));
  // }, [page]);

  const [name, setName] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(searchParams.get("categories") || "");

  // name
  useEffect(async () => {
    const name = searchParams.get("name");
    const category = searchParams.get("categories");

    dispatch(getProducts(page, name, category));
  }, [searchParams]);




  return (
    <>
      <div className={s.container}>
        <form className={s.form} onSubmit={e => {
          e.preventDefault();

          const queries = {};

          if(category){
            queries["categories"] = category;
          }

          if(name){
            queries["name"] = name
          }

          setSearchParams(queries);
        }}>
          <input 
            value={name}
            type="text"
            className={s.searchBar}
            onChange={e => setName(e.target.value)}
          />
        </form>
      </div>
    
      <Items>
        

        {products.products?.length? 
        products.products.map( x => {
          return <Card  key={x.productid} id={x.productid} name={x.name} image={x.image} price={x.price} stock={x.stock} />
        }) 
        : null
      } 
        <Buttons>
        <Button onClick={back} style={{ backgroundColor: '#000000', margin: '100px'}} variant="contained"><ArrowBackIcon/></Button>
        <Button onClick={foward} style={{ backgroundColor: '#000000', margin: '100px'}} variant="contained"><ArrowForwardIcon/></Button>
        </Buttons> 
      
      </Items>
    </>
  )
}



export default Cards;