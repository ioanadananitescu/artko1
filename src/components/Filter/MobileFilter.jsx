
import React, {useState, useEffect, useMemo} from 'react';
import { useMediaQuery, useTheme} from '@mui/material'
import { commerce } from '../../lib/commerce';
import Product from '../Products/Product/Product';
import {Grid, Paper, Toolbar, IconButton, Drawer, Divider, List, Box, Chip, Typography, Link, FormGroup, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem, FormHelperText, ListSubheader} from '@mui/material';
import {size, color} from '../Data';
import CancelIcon from '@mui/icons-material/Cancel';
import TuneIcon from '@mui/icons-material/Tune';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from'@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import  ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useStyles from './styles';

const MobileFilter = ({products, onAddToCart}) => {
    const classes=useStyles();

    const [open, setOpen]=useState(false);

    const [openCollapseSize, setOpenCollapseSize]=useState(false);
    const [openCollapseColor, setOpenCollapseColor]=useState(false);

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

   const handleClickSize=()=>{
    setOpenCollapseSize(!openCollapseSize);

   }

   const handleClickColor=()=>{
    setOpenCollapseColor(!openCollapseColor);
   }
  
    return(
<>
    <main>
      <div className={classes.toolbar}/>
      <Grid container columns={16} direction="row" justifyContent="center">
 
     
    <Grid item xs={16} md={16}>
       
    <Paper elevation={4} sx={{borderRadius:2}}>
        <Box p={2}>
        <IconButton color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={() => setOpen(!open)}
                sx={{ ml: 10, }}>
                <TuneIcon />
            </IconButton>
        </Box>
    </Paper>
   
    
        <Box component="nav" sx={{width:'100%', minWidth:'320px'}}>
                <Drawer variant="temporary"
                    open={open}
                    onClose={() => setOpen(false)}
                  
                    onOpen={() => setOpen(true)}
                    ModalProps={{ keepMounted: true }}
                    sx={{display:{xs:'block', sm:'inline-block'},
                       
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width:'100%', minWidth:'320px'}
                    }}>
              {/* Drawer element */}
                <div>
      <Toolbar sx={{mt:`calc(${drawerSpace}/2)`}}>Select paintings: </Toolbar>
      <Divider />
 
  <ListItemButton onClick={handleClickSize} sx={{ bgcolor:'#f9f9f9'}}>
   <ListItemText primary="Filter by size"/>
        {openCollapseSize?<ExpandLess/>:<ExpandMore/>}
</ListItemButton>
<Collapse in={openCollapseSize} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
{size.map((item) => (
   <FormGroup key={item.id}>
 <FormControlLabel control={<Checkbox value={item.name} onChange={filterHandle}/>} label={item.name}>
  </FormControlLabel>
 </FormGroup> 
 
        ))}
        </List>
 </Collapse>
 
<Divider/>
 <ListItemButton onClick={handleClickColor}sx={{ bgcolor:'#f9f9f9'}} >
 <ListItemText primary="Filter by color"/>
        {openCollapseColor?<ExpandLess/>:<ExpandMore/>}
        </ListItemButton>
        <Collapse in={openCollapseColor} timeout="auto" unmountOnExit>
                           
                               {color.map((item) => (
                               
                                     <FormGroup key={item.id}>
                                         <FormControlLabel control={<Checkbox value={item.name} onChange={filterHandle}/>} label={item.name}>
    
                                         </FormControlLabel>
                                     </FormGroup> 
                             ))}              
                     
                     </Collapse>
                   
                <Divider/>
                     <Button variant="contained" color="primary" sx={{width:'100%'}}><Typography variant="body2" onClick={()=>{setOpen(false)}}>Apply filters</Typography></Button>
                     
                  
                     </div>    
                </Drawer>
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
