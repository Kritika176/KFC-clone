
import { PRODUCT_LOADING, PRODUCT_SUCCESS, PRODUCT_ERROR } from "../Action/Product";

const initStore = {
    loading: false,
    data: [],
    error: false
}

export const  ProductReducers = (store=initStore, action) => {

    switch(action.type) {
        case PRODUCT_LOADING:
            return {...store,
            loading: true,
            data: [],
            error: false
        }
       
        case PRODUCT_SUCCESS:
            return {...store, 
            loading: false,
            data: action.payload,
            error: false
            }    

        case PRODUCT_ERROR:
            return {...store,
            loading: false,
            data: [],
            error: true
            }    

         default:
             return {...store}   
    }
}