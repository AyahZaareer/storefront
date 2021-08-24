import React from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    makeStyles,
} from '@material-ui/core/';
import {getProducts} from '../store/actions/getProduct';
import { useEffect } from 'react';

const api = 'https://fakestoreapi.com/products';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const Get = (props) => {
    // console.log('get', props)
    const classes = useStyles();

    useEffect(() => {
        console.log('step 1: products component', api);
        props.getProducts();
        console.log('get', props.getProducts())


    }, []);
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>

                {props.products.display.length > 0

                    ? props.products.display.map((product) => {

                        return (
                            <Grid item key={product._id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={product.image}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.title}
                                        </Typography>
                                        <Typography>Price: ${product.price}</Typography>
                                        {/* <Typography>
                        {product.inStock > 0
                          ? `In stock, ${product.inStock} items left`
                          : 'Out of Stock'}
                      </Typography> */}
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button
                        size="small"
                        color="primary"
                        onClick={() => props.increment(product)}
                        disabled={product.inStock > 0 ? false : true}
                      > */}
                                        {/* ADD TO CART
                      </Button> */}
                                        <Button size="small" color="primary">
                                            VIEW DETAILS
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })
                    : props.products.products.map((product) => {
                        return (
                            <Grid item key={product._id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={product.image}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.title}
                                        </Typography>
                                        <Typography>Price: ${product.price}</Typography>
                                        <Typography>
                                            {/* {product.inStock > 0
                          ? `In stock, ${product.inStock} items left`
                          : 'Out of Stock'} */}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button
                        size="small"
                        color="primary"
                        onClick={() => props.increment(product)}
                        disabled={product.inStock > 0 ? false : true}
                      >
                        ADD TO CART
                      </Button> */}
                                        <Button size="small" color="primary">
                                            VIEW DETAILS
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
            </Grid>
        </Container>
    );
};



const mapStateToProps = state => {
    console.log('geeeeeeeeeeeeeeet',state)

    return { active: state.categories.active, products: state.products.products };
};
  const mapDispatchToProps = { getProducts };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Get);