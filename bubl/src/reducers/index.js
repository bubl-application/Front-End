import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
   dispatch({type: LOGIN_START});
   axios.post('', credentials)
      .then(res => {
         localStorage.setItem('token', res.data.payload);
         dispatch({type: LOGIN_SUCCESS, payload: res.data.payload});
      })
      .catch(err => {
         console.log("login error:", err);
         dispatch({type: LOGIN_FAILURE, payload: err});
      })
}

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getBubl = () => dispatch => {
   dispatch({type: FETCH_START});
   axios.get('')
      .then(res => {
         dispatch({type: FETCH_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: FETCH_FAILURE, payload: err})
      })
}

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const postFriend = bublmessage => dispatch => {
   dispatch({type: POST_START});
   axios.post('', bublmessage)
      .then(res => {
         dispatch({type: POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: POST_FAILURE, payload: err})
      })
}