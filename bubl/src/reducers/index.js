import {
   LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
   FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
   POST_START, POST_SUCCESS, POST_FAILURE, FETCH_SCHOOL_SUCCESS,
   FETCH_SCHOOL_START, FILTER_BUBLS
} from '../actions';

const initialState = {
   bubls: [],
   filteredBubls: [],
   schools: [],
   fetchingSchools: false,
   fetchingBubls: false,
   postingBubls: false,
   loggingIn: false,
   loginError: null,
   error: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_START: {
         return {
            ...state,
            loggingIn: true,
            loginError: null,
         }
      }
      case LOGIN_SUCCESS: {
         return {
            ...state,
            loggingIn: false
         }
      }
      case LOGIN_FAILURE: {
         return {
            ...state,
            loggingIn: false,
            loginError: "failed login"
         }
      }
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
            bubls: action.payload,
            filteredBubls: action.payload
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
      case FETCH_SCHOOL_START:
        return {
          ...state,
          fetchingSchools: true
        };
      case FETCH_SCHOOL_SUCCESS:
      return {
        ...state,        
        fetchingSchools: false,
        schools: action.payload
      };
      case FILTER_BUBLS:

      let filtered;

      if (action.payload.hashtag === 'all') {
        filtered = action.payload.allBubls
      } else {
        filtered = action.payload.allBubls.filter(b => {
          return b.hashtags.includes(action.payload.hashtag)
        })      
      }

      return {
        ...state,        
        filteredBubls: filtered,
      };
      default: 
         return state;
   }
}