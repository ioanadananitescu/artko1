import React, {useState, useEffect, Suspense, lazy} from 'react';
import {Grid, Typography, CardMedia, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

import {Featured, Navbar} from '../../components';



const Home = ({products, onAddToCart}) => {

    const Productslazy = lazy (()=> import ('../Products/Products'));
    const classes= useStyles();



  return (
    <>
  
    <main className={classes.content}>

{/* adding an empty div with the height equal to the
height of the toolbar so the products are pushed a little bit down */}

<div className={classes.toolbar} />

<Box>
<Featured products={products}/> 
</Box>
<Box sx={{position:'absolute', top:600}}>
<Suspense fallback={<p>Loading</p>}>
<Productslazy products={products}/>
</Suspense>
</Box>
      </main>
    </>
  )
}

export default Home
