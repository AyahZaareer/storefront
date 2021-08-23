
let initialState = {
    cart: [],
    visible: false,
    num: 0,
}

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD':
            // const products = state.cart.map(product => product.name);
            // if (!products.includes(payload.name)) {
            //     return { cart: [...state.cart, payload], visible: true };
            // }

            if (!state.cart.length) {
                payload['item'] = 1;
                state.num += 1;
                state.cart.push(payload);
                return { ...state };
            } else {
                let flag = false;
                for (let i = 0; i < state.cart.length; i++) {
                    if (payload.id === state.cart[i].id) {
                        state.num += 1;
                        state.cart[i].item += 1;
                        flag = true;
                    }
                }
                if (!flag) {
                    payload['item'] = 1;
                    state.num += 1;
                    state.cart.push(payload);
                }
                return { ...state };
            }

            // return { cart: state, visible: true };
        case 'DELETE':
            const product = state.cart.filter(product => {
                return product.name !== payload.name;
            });


            return { cart: [...product], visible: true };


        default:
            return state;
    }
};

export default cartReducer;