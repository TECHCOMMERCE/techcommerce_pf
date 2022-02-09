import axios from 'axios'
import {
  GET_WISHLIST
} from '../constanst/actionsTypes'

const SERVER = process.env.REACT_APP_SERVER ||'http://localhost:3001/';


export function getWishList(userid, productid=null){
  return async function (dispatch){
    try{
      if(userid){
        let qproduct=''
        if(productid) qproduct=`${productid}`
        const {data}= await axios.get(`${SERVER}wishlist/${userid}/${qproduct}`)
        //console.log('datawish', data);
        return dispatch ({
            type: GET_WISHLIST,
            payload: data
        })
      }
    }catch(err){
      console.log(err)
    }
  }
}


/* export function putWishList(userid, productid=null){
  return async function (dispatch){
    try{
      if(userid){
        let qproduct=''
        if(productid) qproduct=`${productid}`
        const {data}= await axios.get(`${SERVER}/wishlist/${userid}${qproduct}`)
        return dispatch ({
            type: GET_WISHLIST,
            payload: data
        })
      }
    }catch(err){
      console.log(err)
    }
  }
} */





