import {
   LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
   REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
   FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
   FETCH_COMMENTS_START, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE,
   POST_START, POST_SUCCESS, POST_FAILURE, 
   FETCH_SCHOOL_SUCCESS, FETCH_SCHOOL_START, FILTER_BUBLS
} from '../actions';

const initialState = {
   bubls: [],
   comments: [],
   filteredBubls: [],
   schools: [],
   "student_id": null,
   "school_id": null,
  "bubl_id": null,
  "thread_id": null,
   fetchingSchools: false,
   fetchingBubls: false,
   postingBubls: false,
   loggingIn: false,
   loginError: null,
   registering: false,
   registerError: null,
   error: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_START: {
         return {
            ...state,
            loggingIn: true,
            loginError: null,
            student_id: null
         }
      }
      case LOGIN_SUCCESS: {
         return {
            ...state,
            loggingIn: false,
            student_id: action.payload
         }
      }
      case LOGIN_FAILURE: {
         return {
            ...state,
            loggingIn: false,
            loginError: "failed login"
         }
      }
      case REGISTER_START: {
         return {
            ...state,
            registering: true,
            registerError: null,
         }
      }
      case REGISTER_SUCCESS: {
         return {
            ...state,
            registering: false
         }
      }
      case REGISTER_FAILURE: {
         return {
            ...state,
            registering: false,
            registerError: "failed sign up"
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
      case FETCH_COMMENTS_START: {
         return {
            ...state,
            "school_id": null,
            "bubl_id": null,
            "thread_id": null,
         }
      }
      case FETCH_COMMENTS_SUCCESS: {
         return {
            ...state,
            "school_id": action.payload[0].school_id,
            "bubl_id": action.payload[0].bubl_id,
            "thread_id": action.payload[0].thread_id,
            comments: action.payload
         }
      }
      case FETCH_COMMENTS_FAILURE: {
         return {
            ...state,
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