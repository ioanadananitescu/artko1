
import React, {useState, useEffect, useMemo} from 'react';
import {useMediaQuery, useTheme} from '@mui/material'
import { commerce } from '../../lib/commerce';
import Product from '../Products/Product/Product';
import {Grid, Paper, Toolbar, IconButton, Drawer, Divider, List, Box, Chip, Typography, Link, FormGroup, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem, FormHelperText, ListSubheader} from '@mui/material';
import {size, color} from '../Data';
import CancelIcon from '@mui/icons-material/Cancel';
import TuneIcon from '@mui/icons-material/Tune';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from'@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess } from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useStyles from './styles';

const MobileFilter = ({products, onAddToCart}) => {
    const classes=useStyles();

    const [open, setOpen]=useState(false);

    const [openCollapse, setOpenCollapse]=useState(true);
    const[filterTags, setFilterTags]=useState([]);
    const drawerWidth = 240;
    const drawerSpace = 25;

 const filtered=products.filter(
    (item)=>
    filterTags.length>0?
    filterTags.every((item2)=>item.categories.map((tag)=>tag.name).includes(item2)
    )
    :
    products
 );
       
  
  const filterHandle=(event)=>{
    if(event.target.checked){
        setFilterTags([...filterTags, event.target.value])
    }
    else{
        setFilterTags(
            filterTags.filter((item)=>item!=event.target.value)
        )
    }
    }

   const handleClick=()=>{
    setOpenCollapse(!openCollapse);
   }
  
    return(
<>
    <main>
      <div className={classes.toolbar}/>
      <Grid container columns={16} direction="row" justifyContent="center">
 
     
    <Grid item xs={16} md={16}>
        <Box sx={{display:'flex', width:'100%'}}>
    <Paper elevation={4} sx={{borderRadius:2, width:'100%'}}>
        <Box p={2}>
        <IconButton color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setOpen(!open)}
                sx={{ ml: 10}}>
                <TuneIcon />
            </IconButton>
        </Box>
    </Paper>
        <Box component="nav" sx={{ width:{drawerWidth}, flexShrink: { sm: 0 } }} aria-label="filter">
                <Drawer variant="temporary"
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    ModalProps={{ keepMounted: true, }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}>
              {/* Drawer element */}
                <div>
      <Toolbar sx={{mt:`calc(${drawerSpace}/2)`}}>Select paintings: </Toolbar>
      <Divider />
     <List sx={{ml:5, bgcolor:'background.paper'}}
     >
        <ListItemButton onClick={handleClick}>
        <ListItemText primary="Filter by size"/>
        {openCollapse?<ExpandLess/>:<ExpandMore/>}
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                       {size.map((item) => (
                    
                                     <FormGroup key={item.id}>
                                         <FormControlLabel control={<Checkbox value={item.name} onChange={filterHandle}/>} label={item.name}>
    
                                         </FormControlLabel>
                                     </FormGroup> 
                             ))}
     
                            
                             </Collapse>
                             </ListItemButton>
                             <Divider/>
                             </List>
                             <List sx={{ml:5, bgcolor:'background.paper'}}
     >
        <ListItemButton onClick={handleClick}>
        <ListItemText primary="Filter by size"/>
        {openCollapse?<ExpandLess/>:<ExpandMore/>}
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                           
                               {color.map((item) => (
                               
                                     <FormGroup key={item.id}>
                                         <FormControlLabel control={<Checkbox value={item.name} onChange={filterHandle}/>} label={item.name}>
    
                                         </FormControlLabel>
                                     </FormGroup> 
                             ))}              
                     
                     </Collapse>
                     </ListItemButton>
                     </List>
                     
                  
                     </div>    
                </Drawer>
            </Box>
            </Box>

            </Grid>
            <Grid item xs={16} md={12}>
<Grid container xs={16} md={12} spacing={2}>
        {filtered.map((product) => (
          <Grid item key={product.id} xs={12} sm={10} md={7} lg={6}>
            <Link to={`/article/${product.id}`}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Link>
          </Grid>
        ))}
      </Grid>
      
      
</Grid>
</Grid>



</main>
            </>
   
    )
        }



export default MobileFilter
