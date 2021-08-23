const initialState = {
    categories: [
        {
            name: 'Food',
            displayName: 'Food',
            description: 'Food Description',
            url: 'https://purewows3.imgix.net/images/articles/2020_12/LittleBeetTable_healthy-restaurants-nyc.jpg?auto=format,compress&cs=strip'
        },
        {
            name: 'Electronics',
            displayName: 'Electronics',
            description: 'Electronics Description',
            url: 'https://files.shoppersdrugmart.ca/food-and-electronics/electronics/Hero%20Electronics.png'
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

        default:
            return state;
    }
};

export default categoriesReducer;