import React, {useState} from 'react';
import {AppBar, IconButton, Toolbar, Badge, Typography, Container} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import { Avatar } from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import {FormControlLabel} from '@material-ui/core';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import {Menu, Box, MenuItem, Button} from '@mui/material';
import { pages } from '../Data.jsx';



import useStyles from './styles.js';





const Navbar = ({totalItems}) => {

  const classes=useStyles();
  //take the value of the current location to not display the cart icon when on the cart location
const location=useLocation();

//when first fetched the props totalItems might be null so use a function instead to avoid errors
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
//set variables to handle responsiveness and to establish when a user is logged or not
const [auth, setAuth]=useState(true);
const [anchorEl, setAnchorEl]=useState(null);

/* const to manage the state of the hamburger menu and the rest of the menu buttons */
const[menuItems, setMenuItems]=useState(null);


const handleChange=(event)=>{
  setAuth(event.target.checked);
}
const handleMenu=(event)=>{
  setAnchorEl(event.currentTarget);
}
const handleClose=(event)=>{
  setAnchorEl(null);
}


const openMenuTooltip = (event) => {
  setMenuItems(event.currentTarget);
};

const closeMenuTooltip = () => {
  setMenuItems(null);
};
console.log(pages);

  return (
<>

{/* a form group label that will simulate the control if the user is inside or not. i cannot see it.  */}


<AppBar position="fixed" className={classes.appBar} color="inherit">
<Box sx={{flexGrow:1}}>
  <FormGroup>
    <FormControlLabel 
    control={<Switch checked={auth} onChange={handleChange} aria-label='User is logged or not'/>} 
    label={auth?'Logout':'Login'}/>
</FormGroup>
</Box>
  <Toolbar>
    <div style={{margin:'auto'}}>

    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit"
     sx={{display: { xs: 'none', md: 'flex' }}}>
      <img src="./logo192.png" alt="Art Agency" height="25px" className={classes.image}/>
      ARTKO. Art Agency
    </Typography>
    </div>
    <div className={classes.grow}/>
   
   {location.pathname !='/cart' &&(
   <div className={classes.button}>
     <IconButton component={Link} to='/cart' aria-label="Show items in the cart" color="inherit">
       <EmptyCart totalItems={totalItems} />
 
     </IconButton>
   </div>)}

{/* user is logged in. the useState from the beginning is set to true */}
   {auth  && (
     <div>
       <IconButton size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleMenu}
               color="inherit">
         <AccountCircle/>
       </IconButton>

{/* the menu that will be showen on the user AccountCircle */}
       <Menu
               id="menu-appbar"
               anchorEl={anchorEl}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorEl)}
               onClose={handleClose}
             >
 <MenuItem onClick={handleClose}>Profile</MenuItem>
               <MenuItem onClick={handleClose}>My account</MenuItem>
       </Menu>
     </div>
   )}
    </Toolbar>

    {/* Toolbar from Material-UI is showing the elements in FLEX. that will handle the Menu when on mobile or tablet */}
    <Toolbar>
      {/* what will be showed on mobile and tablet */}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton size='large' edge='start' aria-label='menu' sx={{mr:2}}
          
            onClick={openMenuTooltip}
            color="inherit">
        <MenuIcon/>
      </IconButton>
     
        <Menu 
        anchorEl={menuItems} 
        anchorOrigin={{vertical:'bottom', horizontal:'left'}}
        open={Boolean(menuItems)} 
        onClose={closeMenuTooltip}
        sx={{display:{xs:'block', md:'none'}}}
        transformOrigin={{vertical:'top', horizontal:'left'}}>
         
           {pages.map((e)=>(
            <MenuItem key={e.name}>
          <Typography component={Link} to={e.path} className={classes.search}>{e.name}</Typography>
          </MenuItem>
           ))}
          </Menu>
    
     
            {/* the cart is left outside the map and will be showen in mobile, tablet, and laptop */}

  

</Box>

{/* // code for the large and medium . the box will show the content when on medium to large only */}
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', margin:'auto' } }}>
  {pages.map((e)=>(
<Link  key={e.name} to={e.path}>
    <Button  sx={{color:'inherit', display:'block'}} variant='text'>{e.name}</Button>
    </Link>
  ))}
</Box>
  </Toolbar>
</AppBar>

</>
  )
}

export default Navbar


