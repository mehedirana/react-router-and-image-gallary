import { ARTICLE_ACTION_FAIL, ARTICLE_ACTION_REQUEST, ARTICLE_ACTION_SUCCESS } from "../actionTypes";

export const updateArticle =(text)=> (dispatch) =>{
    dispatch({type: ARTICLE_ACTION_REQUEST});

    const {data} = text;

    dispatch({type: ARTICLE_ACTION_SUCCESS})

    if(data=== null || data === undefined){
        dispatch({type: ARTICLE_ACTION_FAIL})
    }
}