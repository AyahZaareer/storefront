
import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../store/actions/addProducts';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';
import ProductCard from './CardProduct'
function Products(props) {
  console.log('proooooood',props)
  return (
    <>
      <p style={{ textAlign: 'center', fontSize: '25px' }}>{props.active}</p>
      <br />
      <GridList cols={3}>
        {props.products.activeProducts.map((product, idx) => {
          
          if (props.active === product.category) {
            return (
              <GridListTile key={idx} rows={'auto'}>
                <ProductCard
                  className={`cards ${product.name}`}
                  image={product.url}
                  alt={product.name}
                  style={{ marginLeft: '80px', marginTop: '10px' }}
                  inStock={product.inStock}
                  name={product.name}
                  key={product.name}
                  product={product}
                />
              </GridListTile>
            );
          } else {
            return '';
          }
        })}
      </GridList>
    </>
  );
}

const mapStateToProps = (state) => {
    console.log("STATE???", state)
    return { active: state.categories.active, products: state.products };

}


const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

