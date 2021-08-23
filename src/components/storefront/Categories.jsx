import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../../store/actions/Active';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';




const useStyles = makeStyles({
    root: {
        maxWidth: 300,
       padding:'1rem',
       margin:'1rem',
       border:'solid',
       display:'inline-block',
       textAlign:'center'

    },
});


function Categories(props) {
    const classes = useStyles()
    return (
        <>
            <h3>

                Categories :
            </h3>
            {props.categories.map(category => {
                return (
                    // <div style={{ display:'' }}  className={classes.root}>
                    // <ButtonBase

                    //     key={category.name}
                    //     onClick={() => props.activeCategory(category.name)}
                    //     style={{ }}
                    // >
                    //     <Typography  variant="body2"  style={{display:'flex', fontSize: '2rem'}}>{category.displayName}</Typography>
                    //     <img
                    //         src={category.url}
                    //         alt={category.displayName}
                    //         width='50%'
                    //         height='50%'
                    //     ></img>
                    // </ButtonBase>

                    // </div>


                    <Card stayle={{ height: '100rem' }} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt={props.alt}
                                height='250'
                                width='250'
                                src={category.url}
                                title={category.displayName}
                                onClick={() => props.activeCategory(category.name)}
                            />
                            <Typography gutterBottom variant='h6' component='h2'>
                                {category.displayName}
                            </Typography>
                        </CardActionArea>


                    </Card>
                );
            })}

        </>
    );
}






const mapStateToProps = (state) => {
    console.log("STATE???", state)
    return { categories: state.categories.categories, active: state.categories.active };

}
const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);