import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import { Provider } from 'react-redux';
import Categories from './components/storefront/Categories.jsx'
import Get from './components/Get.jsx'

import store from './store';


function App() {
  return (
    <Provider store={store}>

      <Header />
      <div className='App'>

      <Categories />
     
      <Products />
      {/* <Get/> */}
      <Footer />
      </div>
    </Provider>

  );
}

export default App;
