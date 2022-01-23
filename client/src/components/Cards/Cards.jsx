import React, {useState, useEffect} from 'react';
import { getProductsFront, getBrand, getCategories } from '../../Store/actions/products.js';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import { Items, Buttons, Filters, Main, Select, Options, Null } from './styles';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../components/Home/Footer';



const Cards = () => {

  const dispatch = useDispatch();
  const {products}  = useSelector(state => state.products);
  const {brands}  = useSelector(state => state.products);
  const {categories}  = useSelector(state => state.products);
  const [page, setPage]= useState(0);
  const [obj, setObj] =useState({
    category: '',
    brand: '',
    sort:''
  })
   console.log('obj',categories)

   const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  function back () {
    setPage(page - 1)
    window.scrollTo(0, 0)
    //dispatch(getProducts(page));
  }

  function foward () {
    setPage(page + 1)
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
    //dispatch(getProducts(page)); check
  }

  function onChange(e) {
    e.preventDefault();
    if(e.target.value === 'Celulares y Telefonos' || e.target.value === 'Computacion' || e.target.value === 'Consolas y Videojuegos' || e.target.value===''){
      setObj({
        category: e.target.value,
        brand: '',
        sort: ''
      })
      setPage(0);
      dispatch(getProductsFront(obj, page));
    }else if(e.target.value === 'asc' || e.target.value === 'desc') {
      setObj({
        ...obj,
        sort: e.target.value
      })
      setPage(0);
      dispatch(getProductsFront(obj, page))
    }else if(e.target.value ==='/'){
      setObj({
        ...obj,
        sort: ''
      })
      setPage(0);
      dispatch(getProductsFront(obj, page))
    }else if(e.target.value === '-'){
      setObj({
        ...obj,
        brand: '',
        sort: ''
      })
      setPage(0);
      dispatch(getProductsFront(obj, page))
    }
    else{
      setObj({
        ...obj,
        brand: e.target.value,
        sort: ''
      })
      setPage(0);
      dispatch(getProductsFront(obj, page))  
    }
  }


  
//hola
  useEffect(async() => {
    
    await dispatch(getProductsFront(obj, page));
    await dispatch(getBrand())
    await dispatch(getCategories())
}, [page, obj, dispatch]);

  return (
    <>
    <Main>
    <Filters>
      <Select>
      <div style={{marginBottom: '40%', display: 'block', textAlign: 'center'}}>
    <label><b>Categoria : </b></label>
    <Options onChange={onChange} >
      <option value='' >Todos</option>
      {categories?.map(x => {
        return(
        <option value={x.name} >{removeAccents(x.name)}</option>
        )
      })}
    </Options>
    </div>
    <div style={{marginBottom: '40%', display: 'block', textAlign: 'center'}}>
    <label><b>Marca : </b></label>
    <Options onChange={onChange}>
    <option value='-' >Todos</option>
      {brands?.map(x => {
        return(
        <option value={x.name} >{x.name}</option>
        )
      })}
    </Options>
    </div>
    <div style={{marginBottom: '40%', display: 'block', textAlign: 'center'}}>
    <label ><b>Precio:</b> </label>
    <Options onChange={onChange}>
      <option value='/' >-</option>
      <option value='asc' > Mas Bajo</option>
      <option value='desc' > Mas Alto</option>
      
    </Options>
    </div>
    </Select>
    </Filters>
    <Items>
     
      {products?.length? 
      products.map( x => {
        return <Card  key={x.productid} id={x.productid} name={x.name} image={x.image} price={x.price} stock={x.stock} />
      }) 
      : <Null>
        <p>No existen elementos. Seleccione otro filtro</p>
      </Null>
    } 
      
    
    </Items>
    
    </Main>
    <Buttons>
      <Button onClick={back} disabled={page === 0} style={{ margin: '100px'}} variant="text"><ArrowBackIcon style={{color: '#000000'}}/></Button>
      <Button onClick={foward} disabled={products?.length <= 0 } style={{  margin: '100px'}} variant="text"><ArrowForwardIcon style={{color: '#000000'}}/></Button>
      </Buttons>  
    <Footer/>
    </>

  )
}



export default Cards;