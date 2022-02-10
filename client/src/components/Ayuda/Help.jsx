import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { Link, useNavigate, useLocation} from 'react-router-dom';

import {getuser} from '../../Store/actions/users.js';
import CardPolicies from './CardPolicies.jsx';
import CardCategoryFilter from './CardCategoryFilter';
import {getProductsCartUser} from '../../Store/actions/carts.js';
import {
  getPolicies,
  filterByHelpCategory
} from '../../Store/actions/help'

// import { getPolicies } from '../../Store/actions/help';
// styles 
import { Search } from "@material-ui/icons";
import {
  Container,
  HeaderTitle,
  Title,
  SearchPolicy,
  FilterPolicy,
  ButtomSearch,
  Input,
  Form,
  Span,
  IMG,
  Donwn
} from '../../assets/styles/Help/Help.elements'

const Help = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(state=>state.users)
  const [name, setName] = useState("")
  const policiess = useSelector(state => state.help.policies)
  // console.log(state);
  // console.log(policiess);
  // console.log(user);
  const user = JSON.parse(localStorage.getItem("user"));

  // const handleSubmit = (e) =>{
  //   e.preventDefault();

  //   dispatch(getPoliciesCategory({category:''},0 ,name))
  // }

  const handleHelpCategory = e => {
    e.preventDefault();
    dispatch(filterByHelpCategory(e.target.value))
  }

  useEffect( () => {
    dispatch(getPolicies())
  },[])

  return (<Container>
    <HeaderTitle className='s.title_ayuda'>
      <Title>
        Hola! {`${user?.user.name} `} 
      </Title>
      <Span>
        ¿en qué podemos ayudarte hoy?
      </Span>
    </HeaderTitle>
    <SearchPolicy>
      {/* <Form onSubmit={ e => handleSubmit(e)}>
        <Input 
          value={name}
          onChange={ e => setName(e.target.value) } 
          placeholder="Busca articulos de ayuda"  
          list='searchdata'
        />
        <ButtomSearch onSubmit={e => handleSubmit(e)}>
          <Search></Search>
        </ButtomSearch>
      </Form> */}
    </SearchPolicy>
    <FilterPolicy>
      
      <CardCategoryFilter handleHelpCategory={handleHelpCategory} />
      
      { 
        policiess?.map(e=>{
          return(
            <Link style={{textDecoration:"none"}} to={`/ayuda/${e.helpid}`} key={e.helpid}>
              <CardPolicies name={e.title} subtitle={e.subtitle} />
            </Link>
          )
        })
      }
    </FilterPolicy>
    <Donwn></Donwn>
    {/* <IMG  src='../../assets/Imgs/vector_girl.svg' alt='bike_man'/> */}
      {/* <img src='../../assets/Imgs/vector_girl.svg' alt='bike_man'/> */}
  </Container>)
};

export default Help;
