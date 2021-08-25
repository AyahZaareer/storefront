import superagent from 'superagent';

const API = 'https://api-js401.herokuapp.com/api/v1'

// export const getProducts = () => {
//     return async (dispatch, getState) => {
//         const state = getState();
//         console.log('STATE?', state);
//         const raw = await fetch('https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa');
//         console.log('Response', raw);
//         const results = await raw.json();
//         console.log('DATA', results);
//         dispatch(getAction(results.products));
//     };
// };

export const getProducts = () => {
    return (dispatch) => {
      return superagent.get(`${API}/products`).then((response) => {
          
        dispatch( getAction({ products: response.body.results }));
      });
    };
  };

export const getAction = product => {
    return {
        type: 'GET_P',
        payload: product
    };
};


export const getCategory = () => {
    return (dispatch) => {
        return superagent.get(`${API}/categories`).then((response) => {
            dispatch(getCat({ categories: response.body.results }));
        });
    };
};

export const getCat = product => {
    return {
        type: 'GET_C',
        payload: product
    };
};

export const addProduct = product => {
    return {
        type: 'ADD',
        payload: product,
    }
}


export const updateRemoteData = (product) => {
    return async (dispatch) => {
        return superagent.put(`${API}/products/${product._id}`).send({ inStock: product.inStock - 1 }).then(() => {
            dispatch(addProduct(product));
        });
    };
}


export  const deleteFromCart = product => {
    return {
        type: 'DELETE',
        payload: product,
    }
}

export const updateAddData = (product) => {
    return async (dispatch) => {
        return superagent.put(`${API}/products/${product._id}`).send({ inStock: product.inStock +1 }).then(() => {
            dispatch(deleteFromCart(product));
        });
    };
}