import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import { If, Else } from 'react-if';
import { deleteFromCart } from '../../store/actions/deleteFromCatr';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const Cart = props => {
    const classes = useStyles();

    console.log(props);
    return (
        <>
            <If condition={() => props.cart.length !== 0}>
                <Paper component='ul' className={classes.root}>
                    {props.cart.map((item, idx) => {
                        console.log(item);
                        return (
                            <li key={idx}>
                                <Chip
                                    label={item.name}
                                    onDelete={() => {
                                        props.deleteFromCart(item);
                                    }}
                                />
                            </li>
                        );
                    })}
                </Paper>
                <Else>{ }</Else>
            </If>
           
        </>
    );
};

const mapStateToProps = (state) => {
    console.log("STATE???", state)
    return { cart: state.cart.cart };

}

const mapDispatchToProps = { deleteFromCart };

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
