import {/*useState,*/ useEffect} from 'react'
import {/* Link, */ useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getPoliciesId } from '../../Store/actions/help'

import { SubTi, 
         Description,
         Detail} from '../../assets/styles/Help/DetailHelp.element'

import { Container, 
         HeaderTitle, 
         Title } from '../../assets/styles/Help/Help.elements'

const DetailHelp = () => {

  const dispatch = useDispatch();
  const {id} = useParams()
  const detail = useSelector(state => state.help.detail)
  console.log(id);
  // console.log(detail);

  useEffect(()=>{
    dispatch(getPoliciesId(id))
  },[detail])


  return (<Container>
    {
      detail? 
      <div>
        <HeaderTitle>
          <Title>{detail.title}</Title>
          <SubTi>{detail.subtitle}</SubTi>
        </HeaderTitle>
        <hr />
        <br />
        <Description>
          <Detail>{detail.description}</Detail>
          <br />
          <Detail>{detail.description2}</Detail>
          <br />
          <Detail>{detail.description3}</Detail>
          <br />
          <Detail>{detail.description4}</Detail>
          <br />
          <Detail>{detail.description5}</Detail>
          <img src={detail.img} alt="" /> 
        </Description>
      </div> : <p>Loading</p>
    }
  </Container>)
};

export default DetailHelp;
