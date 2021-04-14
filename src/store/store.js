import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { articleReducer } from './articles/articlesReducer';

const rootReducer = combineReducers({
    articleReducer: articleReducer
})
const initialState ={
    data: []
}
// const middleware = [thunk]
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(articleReducer)