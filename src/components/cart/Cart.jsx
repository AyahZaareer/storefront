// import React from 'react';
// import { connect } from 'react-redux';

// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Paper from '@material-ui/core/Paper';
// import TagFacesIcon from '@material-ui/icons/TagFaces';

// import { If, Else } from 'react-if';
// import { deleteFromCart } from '../../store/actions/deleteFromCatr';


// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         padding: theme.spacing(0.5),
//         margin: 0,
//     },
//     chip: {
//         margin: theme.spacing(0.5),
//     },
// }));

// const Cart = props => {
//     const classes = useStyles();

//     console.log(props);
//     return (
//         <>
//             <If condition={() => props.cart.length !== 0}>
//                 <Paper component='ul' className={classes.root}>
//                     {props.cart.map((item, idx) => {
//                         console.log(item);
//                         return (
//                             <li key={idx}>
//                                 <Chip
//                                     label={item.name}
//                                     onDelete={() => {
//                                         props.deleteFromCart(item);
//                                     }}
//                                 />
//                             </li>
//                         );
//                     })}
//                 </Paper>
//                 <Else>{ }</Else>
//             </If>

//         </>
//     );
// };

// const mapStateToProps = (state) => {
//     console.log("STATE???", state)
//     return { cart: state.cart.cart };

// }

// const mapDispatchToProps = { deleteFromCart };

// export default connect(mapStateToProps,mapDispatchToProps)(Cart);



import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import { deleteFromCart } from '../../store/actions/deleteFromCatr'
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         listStyle: 'none',
//         padding: theme.spacing(0.5),
//         margin: 0,
//     },
//     chip: {
//         margin: theme.spacing(0.5),
//     },
// }));

export default function SimpleCart(props) {

    // const style = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const state = useSelector((state) => {
        return {
            cart: state.cart,
        };
    });
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                style={{ display: 'flex' }}
                onClick={handleClick}
            >
                Cart ({state.cart.num})
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {state.cart.cart.map((product) => {
                    return (
                        <MenuItem key={product.id} onClick={handleClose}>
                            <Chip
                                label={`${product.name} Item: ${product.item}`}
                                onDelete={() => {
                                    dispatch(deleteFromCart(product));
                                }}
                            />
                        </MenuItem>
                    );
                })}

            </Menu>
        </div>
    );
}

// const mapDispatchToProps = { deleteFromCart };

// export default connect( mapDispatchToProps)(  SimpleCart );

