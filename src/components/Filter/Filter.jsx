import React, {useState, useEffect, useMemo} from 'react';
import { commerce } from '../../lib/commerce';
import Product from '../Products/Product/Product';
import {Grid, Typography, Link, FormControl, Select, InputLabel, MenuItem, FormHelperText} from '@mui/material';
import {size, color} from '../Data';
import useStyles from './styles';


const Filter = ({onAddToCart}) => {
  const classes=useStyles();

    
    
    const [products, setProducts]=useState([]);
 /*    const [categ, setCateg]=useState([]);
    const [selectedCateg, setSelectedCateg]=useState(); */
    const [selectedColor, setSelectedColor]=useState('');
   

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

    function handleColorChange(event){
      setSelectedColor(event.target.value);
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
  ...item, categories: item.categories.filter (item2=>item2.name===selectedColor)
}))
.filter(item=>item.categories.length >0);

const filtered=
(!selectedColor)?products:filter;

console.log(products);
console.log(filtered);

  return (
    <>
    <main>
      <div className={classes.toolbar}/>
      <div className={classes.toolbar}/>
    
     
      <Grid container justifyContent="left" direction="row" spacing={1}>
 <Grid item xs="auto" >
       <FormControl sx={{m:1, minWidth:200}}>
  <InputLabel id="category-select">Filter by medium</InputLabel>
  <Select autoWidth
    labelId="category-select"
    id="selectCateg"
    value={selectedColor}
    label="Category"
    onChange={handleColorChange}
  >
     {color.map((item)=>(
    <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
      ))}
  </Select>
  <FormHelperText>Filter by oil paintings, watercolor, etc.</FormHelperText>
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
