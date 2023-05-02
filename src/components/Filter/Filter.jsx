import React, {useState, useEffect, useMemo} from 'react';
import {useMediaQuery, useTheme} from '@mui/material'
import { commerce } from '../../lib/commerce';
import Product from '../Products/Product/Product';
import {Grid, Toolbar, IconButton, Drawer, Divider, List, Box, Chip, Typography, Link, FormGroup, Checkbox, FormControl, FormControlLabel, Select, InputLabel, MenuItem, FormHelperText, ListSubheader} from '@mui/material';
import {size, color, medium} from '../Data';
import CancelIcon from '@mui/icons-material/Cancel';
import TuneIcon from '@mui/icons-material/Tune';
import useStyles from './styles';




const Filter = ({onAddToCart}) => {
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
  //styles
  const classes=useStyles();
//for CHIP tags
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  
  },
  
};

    
    
    const [products, setProducts]=useState([]);
    const [selectedItem, setSelectedItem]=useState([]);
    const [selectedColor, setSelectedColor]=useState([]);
  

    const fetchProducts= async ()=>{
        const {data} = await commerce.products.list();
        setProducts(data);
    }


    useEffect(()=>{
        fetchProducts();
      
    }, []);

  function handleChange(event){
      setSelectedItem(event.target.value);
    
    } 

    function handleColorChange(event){
      setSelectedColor(event.target.value);
    
    }
 
/*   const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setSelectedItem(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };  */
/* 
    const handleClickAway=e=>{
      if(!e.target.classList.contains('MuiMenuItem-root')){
        setOpen(false);
      }

    } */
   


/* For a single value selected Select dropdown, the result will be a string


const filter= products
.map(item => ( {
  ...item, categories: item.categories.filter (item2=>item2.name===selectedCateg)
}))
.filter(item=>item.categories.length >0);

const filtered=
(!selectedCateg)?products:filter; */

const filterSize=products.filter(item=>item.categories.some(x=>selectedItem.includes(x.name)));
const filterOnlyColor=products.filter(item=>item.categories.some(y=>selectedColor.includes(y.name)));
const filterColor=filterSize.filter(item=>item.categories.some(z=>selectedColor.includes(z.name)));

const filtered=
(selectedItem.length===0)&&(selectedColor.length===0)?products:
(selectedColor.length===0)?filterSize:
(selectedItem.length===0)?filterOnlyColor:filterColor;

/* 
const filter= products
.map(item => ( {
  ...item, categories: item.categories.filter (item2=>selectedItem.includes(item2.name))
}))
.filter(item=>item.categories.length >0);

 */

//the Drawer for the mobile version

  return (
    <>
    <main>
      <div className={classes.toolbar}/>
      <Grid container columns={16} direction="row">
    
      <Grid item md={4}>
        <Grid container direction="row">
    
 <Grid item xs={4} md={6}>
 
       <FormControl variant="standard" sx={{m:1, minWidth:120}}>
  <InputLabel id="item-filter">Size</InputLabel>
  <Select autoWidth 
multiple
    labelId="item-filter"
    id="selectItems"
    value={selectedItem}
    label="Filter"
    onChange={handleChange}
    
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={
                  ()=> setSelectedItem(
                  selectedItem.filter((item)=>item!=value))} 
                  deleteIcon={
                    <CancelIcon onMouseDown={(event)=>event.stopPropagation()}/>
                  }
                  />
              ))}
            </Box>
          )}
          MenuProps={MenuProps} 
  >
   
      <ListSubheader>Select by size</ListSubheader>
      {size.map((item)=>(
    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}
      
  </Select>
  <FormHelperText>Flter works by size</FormHelperText>
</FormControl>  

</Grid>
<Grid item xs={4} md={6}>
 
       <FormControl variant="standard" sx={{m:1, minWidth:120}}>
  <InputLabel id="color-filter">Color</InputLabel>
  <Select autoWidth 
multiple
    labelId="color-filter"
    id="selectColor"
    value={selectedColor}
    label="Color"
    onChange={handleColorChange}
    
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} onDelete={
                  ()=> setSelectedColor(
                  selectedColor.filter((item)=>item!=value))} 
                  deleteIcon={
                    <CancelIcon onMouseDown={(event)=>event.stopPropagation()}/>
                  }
                  />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
  >
    <ListSubheader>Select by color</ListSubheader>
     {color.map((item)=>(
    <MenuItem 
    key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}   
  </Select>
  <FormHelperText>Flter works by color</FormHelperText>
</FormControl>  

</Grid>
</Grid>
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

export default Filter
