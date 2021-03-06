import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    footer: {
        flexGrow: 1,
         
    },
    // menuButton: {
    //      marginRight: theme.spacing(2),
    // },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    
                    <Typography style={{  textAlign: 'center'}} variant="h6" color="inherit">
                        &copy;Ayah Zaareer
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
