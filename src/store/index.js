import { createStore, combineReducers,applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/products';
import categoriesReducer from './reducers/categories';
import cartReducer from './reducers/cart';
import getProducts from'./reducers/getProduct';
import thunk from 'redux-thunk'

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    
});
const store = () => {
    return createStore(reducers,applyMiddleware (thunk));
    // return createStore(peopleReducer, composeWithDevTools());
};

export default store();