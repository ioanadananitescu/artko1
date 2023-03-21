import React, {useState, useEffect} from 'react';
import {Grid, Typography, CardMedia, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

import {Featured, Navbar, Products} from '../../components';



const Home = ({products, onAddToCart}) => {

    
    const classes= useStyles();



  return (
    <>
  
    <main className={classes.content}>

{/* adding an empty div with the height equal to the
height of the toolbar so the products are pushed a little bit down */}

<div className={classes.toolbar} />

<div style={{margin:'auto'}}>
  <div style={{position:'relative'}}>
<Featured products={products}/> 
</div>
<div style={{position:'absolute', top:600}}>


<Products products={products}/>

</div></div>
      </main>
    </>
  )
}

export default Home
