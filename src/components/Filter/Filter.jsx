import React, {useState, useEffect, useMemo} from 'react';
import { commerce } from '../../lib/commerce';
import Product from '../Products/Product/Product';
import {Grid, Box, Chip, Typography, Link, FormControl, Select, InputLabel, MenuItem, FormHelperText, ListSubheader} from '@mui/material';
import {size, color, medium} from '../Data';
import CancelIcon from '@mui/icons-material/Cancel';
import useStyles from './styles';
import { ClickAwayListener } from '@material-ui/core';


const Filter = ({onAddToCart}) => {
  
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
 /*    const [categ, setCateg]=useState([]);
    const [selectedCateg, setSelectedCateg]=useState(); */
    const [selectedItem, setSelectedItem]=useState([]);
   
   const [anchorEl, setAnchorEl]= useState(false);

    const fetchProducts= async ()=>{
        const {data} = await commerce.products.list();
        setProducts(data);
    }
/*     const fetchCategories=async ()=>{
        const {data}=await commerce.categories.list();
        
        setCateg(data);
    } */

    

    useEffect(()=>{
        fetchProducts();
      
    }, []);

  function handleChange(event){
      setSelectedItem(event.target.value);
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
   
    
    const handleClose=()=>{
      setAnchorEl(false);
    }

/* function handleCategChange(event){
    setSelectedCateg(event.target.value);
} */



/* const filter= products
.map(item => ( {
  ...item, categories: item.categories.filter (item2=>item2.name===selectedCateg)
}))
.filter(item=>item.categories.length >0);

const filtered=
(!selectedCateg)?products:filter; */

const filter= products
.map(item => ( {
  ...item, categories: item.categories.filter (item2=>selectedItem.includes(item2.name))
}))
.filter(item=>item.categories.length >0);




const filtered=
(selectedItem.length===0)?products:filter;


console.log(products);
console.log(filtered);

  return (
    <>
    <main>
      <div className={classes.toolbar}/>
      <div className={classes.toolbar}/>
    
     
      <Grid container justifyContent="left" direction="row" spacing={1}>
 <Grid item xs="auto" >
 
       <FormControl sx={{m:1, minWidth:500}}>
  <InputLabel id="item-filter">Filter works</InputLabel>
  <Select autoWidth 
  
  anchorEl={anchorEl}
 
 onClick={handleClose}
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
    <ListSubheader>Select by color</ListSubheader>
     {color.map((item)=>(
    <MenuItem 

    
  
    key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}
      <ListSubheader>Select by size</ListSubheader>
      {size.map((item)=>(
    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}
      <ListSubheader><Typography variant="body2">Select by medium</Typography></ListSubheader>
      {medium.map((item)=>(
    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}
  </Select>
  <FormHelperText>Flter works by size, color, medium or price.</FormHelperText>
</FormControl>  

</Grid>
{/* <Grid item xs="auto" >
       <FormControl sx={{m:1, minWidth:200}}>
  <InputLabel id="price-select">Filter by price</InputLabel>
  <Select autoWidth
    labelId="price-select"
    id="priceSelect"
    value={selectedCateg}
    label="Price"
    onChange={handleCategChange}
  >
     {categ.map((item)=>(
    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}
  </Select>
  <FormHelperText>With label + helper text</FormHelperText>
</FormControl>  
</Grid> */}
 
<Grid container item spacing={2}>
        {filtered.map((product) => (
          <Grid item key={product.id} xs={10} sm={4} md={3} lg={2}>
            <Link to={`/article/${product.id}`}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Link>



          </Grid>
        ))}
      </Grid>
      
      
</Grid>
  
  </main>
  </>
  )
}

export default Filter
