import {GET_USER_TICKETS, GET_ONE_TICKET, GET_DELIVERY, GET_DELIVERIES} from '../constanst/actionsTypes';


const inicialState = {
	
	tickets: [],
  ticket: {},
  delivery: {},
	deliveries: []
	
};


 const TicketReducer = (state = inicialState, action) => {
	// console.log(action);
	switch (action.type) {
  case GET_DELIVERIES: 
      return {...state, deliveries: action.payload};

	case GET_USER_TICKETS :
    return {
      ...state, 
      tickets: action.payload
    }
  case GET_ONE_TICKET:
    return {
      ...state,
      ticket: action.payload
    }  
  
  case GET_DELIVERY :
    return{
      ...state,
      delivery: action.payload
    }  
   default :
    return state  
  }
}

export default TicketReducer


