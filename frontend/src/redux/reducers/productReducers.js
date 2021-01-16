import * as actionTypes from '../constants/productConstants';
import { GET_PRODUCT_DETAILS_FAIL } from './../constants/productConstants';
const initialState={
    products:[],
}
export const getProductsReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQUEST:
           return {
               loading:true,
               products:[]
           }

        case actionTypes.GET_PRODUCTS_SUCCESS:
               return{
                   loading:false,
                   products:action.payload
               }
        case actionTypes.GET_PRODUCTS_FAIL:
                  return{
                      loading:true,
                      error:action.payload
                  }
                  default:
                       return state;

            }
};

export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST: 
        return {
            loading:true,
            
        }

        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
                
            }
    
    
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return{
                product:{}
            }
    
            
            default:
                return state;
    
    }
        
}