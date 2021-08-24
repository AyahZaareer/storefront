export const getProducts = () => {
    return async (dispatch, getState) => {
        const state = getState();
        //   console.log('STATE?', state);
        const raw = await fetch('https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa');
        console.log('Response', raw);
        const results = await raw.json();
        console.log('DATA', results);
        dispatch(getAction( results.products));
    };
};

export const getAction = product => {
    return {
        type: 'GET',
        payload: product
    };
};