import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({name: "mehedirana ", age:'26'})
const initialState ={
    name: 'nam nai',
    age: 'age nai'
}
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))