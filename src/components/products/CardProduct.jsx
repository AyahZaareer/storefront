import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import { addProduct } from '../../store/actions/addProducts';
import { updateRemoteData} from '../../store/actions/getProduct'
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,

        border: 'solid .1rem',
        margin: '2rem'
    },
});

const ImgMediaCard = props => {
    console.log('count-card', props.product.count)
    const classes = useStyles();

    return (
        <Card stayle={{ height: '100rem' }} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt={props.alt}
                    height='200'
                    image={props.image}
                    title={props.name}
                />
               
                <Typography gutterBottom variant='h6' component='h2'>
                    {props.name}
                </Typography>
                <Typography gutterBottom variant='h6' component='h2'>
                  InStock:  {props.inStock}
                </Typography>
            </CardActionArea>

            <CardActions>
                <Button
                    size='small'
                    color='primary'
                    onClick={(count) => {
                        if (props.product.inStock === 0) {
                            alert('out of stock')

                        }
                        else {
                            // console.log('props.count/onClick', props.product.count)

                            props.updateRemoteData(props.product);
                        };


                    }}
                >
                    Add To Cart
                </Button>
                <Button size='small' color='primary'>
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};


const mapStateToProps = (state) => {
    console.log("countForPro", state.products)
    return { active: state.categories.active, products: state.products.products };

}


const mapDispatchToProps = { addProduct, updateRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard);
