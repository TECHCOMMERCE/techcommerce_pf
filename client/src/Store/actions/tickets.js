import axios from 'axios';

import { GET_USER_TICKETS, GET_ONE_TICKET, GET_DELIVERY } from '../constanst/actionsTypes';
const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/"


export const getUserTickets = (userid, status) => async(dispatch) => {
	console.log('entre')
	const data = await axios.get(`${SERVER}checkout/tickets/${userid}?status=${status}`)
	console.log('data',data.data)
	return dispatch({
		type: GET_USER_TICKETS,
		payload: data.data
	})
}


export const getOneTicket = (ticketid) => async(dispatch) => {
  const data= await axios.get(`${SERVER}checkout/ticket?ticketid=${ticketid}`)
  return dispatch({
    type: GET_ONE_TICKET,
    payload: data.data
  })
}


export const getDelivery= (deliveryid) =>async(dispatch) => {
	const data= await axios.get(`${SERVER}delivery/${deliveryid}`);
	return dispatch({
		type: GET_DELIVERY,
		payload: data.data
	})
} 