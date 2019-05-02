import axios from 'axios';
import {schools, bubls} from '../data';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
   dispatch({type: LOGIN_START});

   const { username, password } = credentials;
   
   if (username === 'user' && password === 'pass') {
      dispatch({ type: LOGIN_SUCCESS });      
      return true
   } else {
      dispatch({ type: LOGIN_FAILURE });
   }

//    axios.post('', credentials)
//       .then(res => {
//          localStorage.setItem('token', res.data.payload);
//          dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
//       })
//       .catch(err => {
//          console.log("login error:", err);
//          dispatch({type: LOGIN_FAILURE, payload: err});
//       })
}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getBubls = id => dispatch => {
  dispatch({type: FETCH_SUCCESS, payload: bubls})

   // dispatch({type: FETCH_START});
   // axios.get('')
   //    .then(res => {
   //       dispatch({type: FETCH_SUCCESS, payload: res.data})
   //    })
   //    .catch(err => {
   //       dispatch({type: FETCH_FAILURE, payload: err})
   //    })
}

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postBubl = (bublmessage, id) => dispatch => {

  // badly written, but it fakes it.
  let specificBubl = bubls.find(b => b.id == id)
  const specificBublIndex = bubls.findIndex(b => b.id == id);

  specificBubl.messages.push(bublmessage)

  let newBubls = [
    ...bubls.slice(0, specificBublIndex),
    specificBubl,
    ...bubls.slice(specificBublIndex + 1)
  ];
  
   dispatch({type: POST_SUCCESS, payload: newBubls});

   // dispatch({type: POST_START});
   // axios.post('', bublmessage)
   //    .then(res => {
   //       dispatch({type: POST_SUCCESS, payload: res.data})
   //    })
   //    .catch(err => {
   //       dispatch({type: POST_FAILURE, payload: err})
   //    })


}

export const FETCH_SCHOOL_START = "FETCH_SCHOOL_START";
export const FETCH_SCHOOL_SUCCESS = "FETCH_SCHOOL_SUCCESS";

export const getSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOL_START });

  axios
  .get("https://bublapplication.herokuapp.com/students")
    .then(res => {    
      dispatch({type: FETCH_SCHOOL_SUCCESS, payload: res.data})
    })


}

export const FILTER_BUBLS = "FILTER_BUBLS";

export const filterByHashTag = (allBubls, hashtag) => dispatch => {
  dispatch({ type: FILTER_BUBLS, payload: {allBubls, hashtag} });
}