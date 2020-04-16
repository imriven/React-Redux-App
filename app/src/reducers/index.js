import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from "../actions"


const initialState = {
    movies: [],
    error: "",
    isFetching: false
}


export function reducer(state = initialState, action) {
    switch(action.type) {
     //cases here
     case FETCH_MOVIES_START:
         return {...state, isFetching:true}

     case FETCH_MOVIES_SUCCESS:
         return {...state, isFetching: false, movies: action.payload}

     case FETCH_MOVIES_ERROR:
         return {isFetching: false, movies: [], error: action.payload }

      default:
        return state;
    }
  }
  