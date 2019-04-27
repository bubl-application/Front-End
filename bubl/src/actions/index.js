import {
   FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
   POST_START, POST_SUCCESS, POST_FAILURE
} from '../actions';

const initialState = {
   bubls: [],
   fetchingBubls: false,
   postingBubls: false,
   loggingIn: false,
   error: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case FETCH_START: {
         return {
            ...state,
            fetchingBubls: true
         }
      }
      case FETCH_SUCCESS: {
         return {
            ...state,
            fetchingBubls: false,
            bubls: action.payload
         }
      }
      case FETCH_FAILURE: {
         return {
            ...state,
            fetchingBubls: false,
            error: action.payload
         }
      }
      case POST_START: {
         return {
            ...state,
            postingBubls: true
         }
      }
      case POST_SUCCESS: {
         return {
            ...state,
            postingBubls: false,
            bubls: action.payload
         }
      }
      case POST_FAILURE: {
         return {
            ...state,
            postingBubls: false,
            error: action.payload
         }
      }
      default: 
         return state;
   }
}