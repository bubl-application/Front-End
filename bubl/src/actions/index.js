import axios from 'axios';
import {schools, bubls} from '../data';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
   dispatch({type: LOGIN_START});

   return axios.post('https://bublapplication.herokuapp.com/students/login', credentials)
      .then(res => {
         localStorage.setItem('token', res.data.token);
        console.log(res)
         dispatch({type: LOGIN_SUCCESS, payload: res.data.id});
      })
      .catch(err => {
         console.log("login error:", err);
        // if (err.response && err.response.status === 403) {
          localStorage.removeItem("token");
        // }
      dispatch({ type: LOGIN_FAILURE });
      })
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (newUser) => dispatch => {
  dispatch({type: REGISTER_START});
  console.log(newUser);  
  
  return axios.post('https://bublapplication.herokuapp.com/students/register', newUser)
  .then(res => {
    console.log(res)
    dispatch({type: REGISTER_SUCCESS});
  })
  .catch(err => {
        console.log("login error:", err);
        dispatch({ type: REGISTER_FAILURE });
        return false
      })

}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getBubls = id => dispatch => {
//   dispatch({type: FETCH_SUCCESS, payload: bubls})

   dispatch({type: FETCH_START});
   axios.get('https://bublapplication.herokuapp.com/threads', {
      headers: { Authorization: localStorage.getItem("token") }})
      .then(res => {
         console.log(res);
         dispatch({type: FETCH_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: FETCH_FAILURE, payload: err})
      })
}

export const FETCH_COMMENTS_START = "FETCH_COMMENTS_START";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const getComments = id => dispatch => {

   dispatch({type: FETCH_COMMENTS_START});
   axios.get(`https://bublapplication.herokuapp.com/threads/comments/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }})
      .then(res => {
         console.log(res);
         dispatch({type: FETCH_COMMENTS_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: FETCH_COMMENTS_FAILURE, payload: err})
      })
}

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postBubl = (bublmessage, id) => dispatch => {

  // badly written, but it fakes it.

//   let specificBubl = bubls.find(b => b.id == id)
//   const specificBublIndex = bubls.findIndex(b => b.id == id);

//   specificBubl.messages.push(bublmessage)

//   let newBubls = [
//     ...bubls.slice(0, specificBublIndex),
//     specificBubl,
//     ...bubls.slice(specificBublIndex + 1)
//   ];
  
   // dispatch({type: POST_SUCCESS, payload: newBubls});

   dispatch({type: POST_START});
   axios.post(`https://bublapplication.herokuapp.com/comment`, bublmessage, {
    headers: { Authorization: localStorage.getItem("token") }
  })
      .then(res => {
        console.log(res);
        
         dispatch({type: POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: POST_FAILURE, payload: err})
      })
}

export const FETCH_SCHOOL_START = "FETCH_SCHOOL_START";
export const FETCH_SCHOOL_SUCCESS = "FETCH_SCHOOL_SUCCESS";

export const getSchools = () => dispatch => {
  dispatch({ type: FETCH_SCHOOL_START });

  axios
  .get("https://bublapplication.herokuapp.com/students", {
    headers: { Authorization: localStorage.getItem("token") }
  })
    .then(res => {    
      dispatch({type: FETCH_SCHOOL_SUCCESS, payload: res.data})
    })
}

export const FILTER_BUBLS = "FILTER_BUBLS";

export const filterByHashTag = (allBubls, hashtag) => dispatch => {
  dispatch({ type: FILTER_BUBLS, payload: {allBubls, hashtag} });
}