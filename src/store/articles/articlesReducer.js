import { ARTICLE_ACTION_SUCCESS, ARTICLE_ACTION_FAIL, ARTICLE_ACTION_REQUEST } from "../actionTypes";

export const articleReducer =(state = {}, action) =>{
 switch(action.type){
     case ARTICLE_ACTION_REQUEST:
         return {
             loading: true,
             success: false,
             data: null,
         }

     case ARTICLE_ACTION_SUCCESS:
         return {
             ... state,
             loading: false,
             success: true,
             data: action.payload.data
         }
         case  ARTICLE_ACTION_FAIL:
             return {
                 loading: true,
                 success: false,
                 data: null
             }
 }
}