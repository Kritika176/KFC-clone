
import { ProductReducers } from "./Reducers/Product";
import { createStore, combineReducers } from 'redux'

const rootReducers = combineReducers(
    {
        product: ProductReducers
    }
)

export const store = createStore(rootReducers);