import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
// import { showCart } from '../../store/actions/showCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Cart from '../cart/Cart'

const StyledBadge = withStyles(theme => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    space: {
        justifyContent: 'space-between',
    },
}));
function Header(props) {
    console.log('header', props);
    const style = useStyles();
    return (
        <AppBar  position='static' style={{ backgroundColor: '#3f51b5' }}>
            <Toolbar variant="dense" className={style.space}>
                {/* <Button> STORE</Button> */}
                <Typography variant="h6" color="inherit">
                    STORE
                </Typography>

                <IconButton aria-label='cart'>
                    <Cart />
                    <StyledBadge  color='secondary'>
                        <ShoppingCartIcon />
                    </StyledBadge>
                    {/* badgeContent={props.acart.cart.length} */}
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = (state) => {
    console.log("STATE???", state)
    return { acart: state.cart };


}
export default connect(mapStateToProps)(Header);