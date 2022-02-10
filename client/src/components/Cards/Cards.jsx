import React, {useState, useEffect} from 'react';
import { getProductsFront, getBrand, getCategories } from '../../Store/actions/products.js';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card';
import { Items, Buttons, Filters, Main, Select, Options, Null } from './styles';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from '../../components/Home/Footer';
import { useParams, useLocation } from 'react-router-dom';


const Cards = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('categories');
  const params= useParams();
  const dispatch = useDispatch();
  const {products}  = useSelector(state => state.products);
  const {brands}  = useSelector(state => state.products);
  const {categories}  = useSelector(state => state.products);
  const [page, setPage]= useState(0);
  const [obj, setObj] = useState({
    category: name ? name : '',
    brand: '',
    sort:''
  })

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
    if(e.target.value === 'Celulares y Teléfonos' || e.target.value === 'Computación' || e.target.value === 'Consolas y Videojuegos' || e.target.value===''){
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
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
    await dispatch(getProductsFront(obj, page));
    await dispatch(getBrand())
   await dispatch(getCategories())
}, [page, obj, dispatch]); 

  return (<>
   
      
    <Main>
      <Filters>
        <Select>
          <div style={{marginBottom: '40%', display: 'block', textAlign: 'center'}}>
            <label><b>Categoria : </b></label>
            
            <Options onChange={onChange} >
              <option value='' >Todos</option>
              
              {categories?.map(category => {
                return(
                  <option key={category.categoryid} value={category.name} >{removeAccents(category.name)}</option>
                )
              })}
            </Options>
          </div>
  
          <div style={{marginBottom: '40%', display: 'block', textAlign: 'center'}}>
            <label><b>Marca : </b></label>
              <Options onChange={onChange}>
                <option value='-' >Todos</option>
                
                {brands?.map(brand => {
                  return(<option key={brand.brandid} value={brand.name} >{brand.name}</option>)
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
        {products?.length ? 
          products.map( product => {
            return <Card  key={product.productid} id={product.productid} name={product.name} image={product.image} price={product.price} stock={product.stock} product={product}/>
          }) 
          
          : <Null><p>No existen elementos. Seleccione otro filtro</p></Null>
        } 
      </Items>
    </Main>
    
    <Buttons>
      <Button onClick={back} disabled={page === 0} style={{ margin: '100px'}} variant="text"><ArrowBackIcon style={{color: '#000000'}}/></Button>
      <Button onClick={foward} disabled={products?.length <= 0 } style={{  margin: '100px'}} variant="text"><ArrowForwardIcon style={{color: '#000000'}}/></Button>
    </Buttons>  
      
    <Footer/>
  </>)
}



export default Cards;