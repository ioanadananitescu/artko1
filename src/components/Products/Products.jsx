
import React from 'react';
import {Grid, Typography, CardMedia} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

import { Product } from '../../components';




{/*const products=[
  {id:1, name:'Painting', description:'something in here', price:'480 lei', image:''},
  {id:2, name:'Another painting', description:'new something', price:'500 lei', image:''}
];*/}

const Products = ({products, featured, onAddToCart}) => {
  const classes=useStyles();
  const styles = {
    media: {
      height: 250,
      paddingTop: '56.25%', // 16:9,
      marginTop:'10'
    }
};
  return(
    <>
    <main className={classes.content}>

      {/* adding an empty div with the height equal to the
    height of the toolbar so the products are pushed a little bit down */}

      <div className={classes.toolbar} />
      <div className={classes.toolbar} />



    <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/article/${product.id}`}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Link>



          </Grid>
        ))}
      </Grid>
      

  
  </main>
  </>
  )
}

export default Products
