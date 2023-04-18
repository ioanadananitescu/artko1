import React, {useState, useEffect} from 'react';

import Carousel from 'react-material-ui-carousel';

 import {  Typography, Button} from '@material-ui/core';
import {Card, CardMedia, CardContent} from '@mui/material';
import useStyles from './styles';

import { ImageList, ImageListItem, ImageListItemBar, Box } from '@mui/material';




const Featured =({products})=> {
  const classes=useStyles();


  const featured= products
  .map(item => ( {
    ...item,
    categories: item.categories
    .filter (item2=>item2.slug==='firstpage')
  }))
  .filter(item=>item.categories.length >0);




const [loading, setLoading]=useState(true); 

  useEffect(()=>{


    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000);
    return ()=> clearTimeout(timer); 

  },[]); 



console.log(featured);


  return (
    <>
    <main className={classes.content}>

      {/* adding an empty div with the height equal to the
    height of the toolbar so the products are pushed a little bit down */}

      <div className={classes.toolbar} />
      <div className={classes.toolbar}/>

{/*  <Box sx={{width:'100%', height:'auto', overflowY:'none', display:'block'}}>

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

 */}
<div style={{position:'absolute', width:'100%'}} >
  <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
      
        {featured.map((item)=>(
          <Card key={item.id} sx={{display:'flex'}}>
            < CardContent sx={{flex:1}}>

              <CardMedia image={item.image.url} 
            title={item.title} 
            style={{height:0, paddingTop:'50%'}}/>
            </CardContent> 
           
    
          
          </Card>
        ))}
          </Carousel> 
    </div>
       
         
   
      </main>
      </>
  )

}


export default Featured
