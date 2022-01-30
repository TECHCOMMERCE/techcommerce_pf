import {GET_USER_TICKETS, GET_ONE_TICKET} from '../constanst/actionsTypes';


const inicialState = {
	
	tickets: [],
  ticket: {}
	
	
};


export const TicketReducer = (state = inicialState, action) => {
	// console.log(action);
	switch (action.type) {
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
   default :
    return state  
  }
}



