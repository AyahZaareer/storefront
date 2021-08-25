const initialState = {
    products: [
        {
            name: 'Apple iPhone 11 Pro',
            id: '1',
            category: 'Electronics',
            price: '700',
            count: '9',
            image: 'https://1.bp.blogspot.com/-C1NmMstWuGQ/XXjs8Fs-O5I/AAAAAAAAYGU/11gUGHLK20MmBrcSulVVwaQHp1GvPGXrACLcBGAsYHQ/s1600/%25D8%25A2%25D9%258A%25D9%2581%25D9%2588%25D9%2586-11-%25D8%25A8%25D8%25B1%25D9%2588-iPhone-11-Pro.png'
        },
        {
            name: 'Sloppy Jose Luis',
            id: '2',
            category: 'Food',
            price: '50',
            count: '10',
            image: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/images/articles/Zz1lNGJhMzI3MWY2MDY1MTc3MmNiMjZlZjE1YzcxNGY3MQ==.jpeg'
        },
        {
            name: 'Samsung Smart TV',
            id: '3',
            category: 'Electronics',
            price: '1000',
            count: '10',
            image: 'https://jveex.com/wp-content/uploads/2020/09/40-smart-4k-ready-led-tv-500x500-1.jpeg'
        },
        {
            name: 'Apple MacBook Air M1 2021',
            id: '4',
            category: 'Electronics',
            price: '600',
            count: '9',
            image: 'https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg'
        },
        {
            name: 'Pizza',
            id: '5',
            category: 'Food',
            price: '40',
            count: '4',
            image: 'https://images.deliveryhero.io/image/talabat/MenuItems/Deal_For_Two_637371778656268786.jpg'
        }
    ],
    activeProducts: [],
}



const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            state.activeProducts = state.products.filter(product => product.category === payload);

            return { ...state, activeProducts: state.activeProducts };

        case 'ADD':
            console.log('ADDDDDDDDDDDDd',state.activeProducts);
            state.activeProducts = state.activeProducts.map(product => {
                if (product.name === payload.name) {
                    if (product.inStock > 0) {
                        product.inStock = product.inStock - 1;
                    } else {

                        return product;
                    }
                }
                return product
            });
            return { ...state, ...state.activeProducts };
        case 'GET_P':
            console.log('GEEEEEEET',payload);
            return { ...state, products: payload.products };
            case 'DELETE':
                console.log('ADDDDDDDDDDDDd',state.activeProducts);
                state.activeProducts = state.activeProducts.map(product => {
                    if (product.name === payload.name) {
                        if (product.inStock > 0) {
                            product.inStock = product.inStock + 1;
                        } else {
    
                            return product;
                        }
                    }
                    return product
                });
                return { ...state, ...state.activeProducts };
            
        default:
            return state;
    }
};

export default productsReducer;