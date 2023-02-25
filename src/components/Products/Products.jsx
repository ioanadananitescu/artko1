
import React from 'react';
import {Grid} from '@material-ui/core';
import {Product} from '../../components';
import useStyles from './styles';


{/*const products=[
  {id:1, name:'Painting', description:'something in here', price:'480 lei', image:''},
  {id:2, name:'Another painting', description:'new something', price:'500 lei', image:''}
];*/}

const Products = ({products, onAddToCart}) => {
  const classes=useStyles();
  return(
    <main className={classes.content}>

      {/* adding an empty div with the height equal to the 
      height of the toolbar so the products are pushed a little bit down */}

      <div className={classes.toolbar}/>
  
<Grid container justifyContent="center" spacing={4}>
  {products.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} onAddToCart={onAddToCart}/>
    </Grid>
  ))}
</Grid>

  
  </main>
  )
}

export default Products
