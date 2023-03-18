import React, {useState, useEffect} from 'react';

import Carousel from 'react-material-ui-carousel';
import Loading from '../Loading/Loading';
 import {  Typography, Button} from '@material-ui/core';
import {Card, CardMedia, CardContent} from '@mui/material';
import useStyles from './styles';

import { ImageList, ImageListItem, ImageListItemBar, Box } from '@mui/material';




const Featured = ({products}) => {
  const classes=useStyles();


  const featured= products.filter(item => item.price.formatted_with_symbol>'lei480.00');





  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000);
    return ()=> clearTimeout(timer);

  },[]);


  return (
    <>
    <main className={classes.content}>

      {/* adding an empty div with the height equal to the
    height of the toolbar so the products are pushed a little bit down */}

      <div className={classes.toolbar} />

 <Box sx={{width:'100%', height:'auto', overflowY:'none', display:'block'}}>

  <ImageList cols={3} gap={1}>
{featured.map((item)=>(
           <ImageListItem key={item.id}>
      <img 
      src={`${item.image.url}?w=248&fit=crop&auto=format`}
      srcSet={`${item.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
    alt={item.title}
    loading="lazy"
    /> 

  <ImageListItemBar
        
            subtitle={item.price.formatted_with_symbol}
         
    /> 
   </ImageListItem>


  ))}
  </ImageList> 
  
  <div style={{position:'absolute', marginLeft:'50%', top:300, transform: 'translateX(-50%)'}}>
    <Typography variant="h3">Today is the first day of the rest of your life</Typography>
    <Button variant="contained" color="primary" size="large">Be free
      </Button></div>
  
</Box> 



{/*       <Carousel>
      
        {featured.map((item)=>(
          <Card key={item.id} sx={{display:'flex'}}>
            < CardContent sx={{flex:1}}>
              <Typography>{item.name}</Typography>
            </CardContent> 
           
            <CardMedia
            
            image={item.image.url} 
            title={item.title} 
            style={{height:0, paddingTop:'25%'}}/>
          
          </Card>
        ))}
          </Carousel> */}
    
       
         
   
      </main>
      </>
  )

}

export default Featured
