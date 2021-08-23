import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './reducers/products';
import categoriesReducer from './reducers/categories';
import cartReducer from './reducers/cart';

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
});
const store = () => {
    return createStore(reducers, composeWithDevTools());
    // return createStore(peopleReducer, composeWithDevTools());
};

export default store();