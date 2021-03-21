import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    events: [],
    detail: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_EVENTS':
            return { ...state, events: action.payload } 
        case 'SET_DETAIL': 
            return { ...state, detail: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store