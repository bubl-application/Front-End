import axios from 'axios';

let schools = [
      {
        id: 1,
        name: 'Ben',
        age: 30,
        email: 'ben@lambdaschool.com'
      },
      {
        id: 2,
        name: 'Austen',
        age: 45,
        email: 'austen@lambdaschool.com'
      },
      {
        id: 3,
        name: 'Ryan',
        age: 15,
        email: 'ryan@lambdaschool.com'
      },
      {
        id: 4,
        name: 'Dustin',
        age: 25,
        email: 'D-munny@lambdaschool.com'
      },
      {
        id: 5,
        name: 'Sean',
        age: 35,
        email: 'sean@lambdaschool.com'
      },
      {
        id: 6,
        name: 'Michelle',
        age: 67,
        email: 'michelle@gmail.com'
      }
    ]

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

export const postBubl = bublmessage => dispatch => {
   dispatch({type: POST_START});
   axios.post('', bublmessage)
      .then(res => {
         dispatch({type: POST_SUCCESS, payload: res.data})
      })
      .catch(err => {
         dispatch({type: POST_FAILURE, payload: err})
      })
}

export const FETCH_SCHOOL_SUCCESS = "FETCH_SCHOOL_SUCCESS";

export const getSchools = () => dispatch => {

  dispatch({type: FETCH_SCHOOL_SUCCESS, payload: schools})

}