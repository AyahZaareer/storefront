import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import { Provider } from 'react-redux';
import Categories from './components/storefront/Categories.jsx'
import Cart from './components/cart/Cart';

import store from './store';

// export const activeCategory = name => {
//   return {
//     type: 'ACTIVE',
//     payload: 'name',
//   }
// }
function App() {
  return (
    <Provider store={store}>

      <Header />
      <Categories />
      <Cart />
      <Products />
      <Footer />
    </Provider>

  );
}

export default App;
