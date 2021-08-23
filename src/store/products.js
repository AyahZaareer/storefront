const initialState = {
    products: [
        {
            name: 'Apple iPhone 11 Pro',
            category: 'Electronics',
            price: '700',
            image: 'https://1.bp.blogspot.com/-C1NmMstWuGQ/XXjs8Fs-O5I/AAAAAAAAYGU/11gUGHLK20MmBrcSulVVwaQHp1GvPGXrACLcBGAsYHQ/s1600/%25D8%25A2%25D9%258A%25D9%2581%25D9%2588%25D9%2586-11-%25D8%25A8%25D8%25B1%25D9%2588-iPhone-11-Pro.png'
        },
        {
            name: 'Sloppy Jose Luis',
            category: 'Food',
            price: '5',
            image: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/images/articles/Zz1lNGJhMzI3MWY2MDY1MTc3MmNiMjZlZjE1YzcxNGY3MQ==.jpeg'
        },
        {
            name: 'Samsung Smart TV',
            category: 'Electronics',
            price: '1000',
            image: 'https://assets.hardwarezone.com/img/2019/03/Samsung-iTunes-app.jpg'
        },
        {
            name: 'Apple MacBook Air M1 2021',
            category: 'Electronics',
            price: '600',
            image: 'https://cdn.mos.cms.futurecdn.net/gPvyaz76tASn87RCGuSdDc.jpg'
        },
        {
            name: 'Pizza',
            category: 'Food',
            price: '10',
            image: 'https://images.deliveryhero.io/image/talabat/MenuItems/Deal_For_Two_637371778656268786.jpg'
        }
    ]
}



const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            const product = state.products.filter(product => product.category === payload ? product.category : null);

            return { ...state, product: product };

        default:
            return state;
    }
};

export default productsReducer;