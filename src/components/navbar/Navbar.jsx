import React from 'react';
import {AppBar, IconButton, Toolbar, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu as MenuIcon } from '@mui/icons-material';



import useStyles from './styles.js';





const Navbar = ({totalItems}) => {

  const classes=useStyles();
const location=useLocation();

/*   if (!totalItems) 
  return(
    <>
<AppBar position="fixed" className={classes.appBar} color="inherit">
  <Toolbar>
    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
      <img src="./logo192.png" alt="Art Agency" height="25px" className={classes.image}/>
      ARTKO. Art Agency

    </Typography>
    </Toolbar>
    <Toolbar>
      <Typography className={classes.search} component={Link} to="/home">Home</Typography>
    <Typography className={classes.search}>Pictura</Typography>
    <Typography className={classes.search}>Desen</Typography>
    <Typography className={classes.search}>Arta textila</Typography>
    <Typography className={classes.search}>New Pop-Art</Typography>
    <Typography component={Link} to="/featured" className={classes.search}>Featured</Typography>
   
    <div className={classes.grow}/>
    </Toolbar></AppBar>
    </>
  ) */
function EmptyCart({totalItems}){
  if (!totalItems){
    return(
      <ShoppingCart/>
    )

  }
  return(
  <Badge badgeContent={totalItems} color="secondary">
  <ShoppingCart/>
</Badge>
  )
}

  return (
<>
<AppBar position="fixed" className={classes.appBar} color="inherit">
  <Toolbar>
    <div style={{margin:'auto'}}>
    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
      <img src="./logo192.png" alt="Art Agency" height="25px" className={classes.image}/>
      ARTKO. Art Agency

    </Typography>
    </div>
    </Toolbar>
    <Toolbar>
      <IconButton>
        <Link to="/home"><MenuIcon/></Link>
      
      </IconButton>
    
    <Typography className={classes.search}>Pictura</Typography>
    <Typography className={classes.search}>Desen</Typography>
    <Typography className={classes.search}>Arta textila</Typography>
    <Typography className={classes.search}>New Pop-Art</Typography>
    <Typography className={classes.search} component={Link} to="/featured">Featured</Typography>


    <div className={classes.grow}/>
   
    {location.pathname !='/cart' &&(
    <div className={classes.button}>
      <IconButton component={Link} to='/cart' aria-label="Show items in the cart" color="inherit">
        <EmptyCart totalItems={totalItems} />
      {/*   <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCart/>
        </Badge> */}
      </IconButton>
    </div>)}


  </Toolbar>
</AppBar>
</>
  )
}

export default Navbar


