const initialState = {
    categories: [
        {
            name: 'food',
            displayName: 'Food',
            description: 'Food Description',
            url: 'https://purewows3.imgix.net/images/articles/2020_12/LittleBeetTable_healthy-restaurants-nyc.jpg?auto=format,compress&cs=strip'
        },
        {
            name: 'electronics',
            displayName: 'Electronics',
            description: 'Electronics Description',
            url: 'https://files.shoppersdrugmart.ca/food-and-electronics/electronics/Hero%20Electronics.png'
        },
        {
            name: 'clothing',
            displayName: 'Clothing',
            description: 'Clothing Description',
            url: 'https://static.highsnobiety.com/thumbor/9LC4p5GLF9tI6Kh5UEw3MCcrXi8=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/12/13124156/vintage-clothes-thrift-shopping-main.jpg'
        }
    ],
    active: '',
}

const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE':
            const categories = state.categories;
            const active = payload;
            return { categories, active };
        case 'GET_C':
            return { ...state, categories: payload.categories }
        default:
            return state;
    }
};

export default categoriesReducer;