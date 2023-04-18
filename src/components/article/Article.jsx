import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce.js';

import {useParams} from 'react-router-dom';
import { AddShoppingCart} from '@material-ui/icons';
import { Products, Product} from '../../components';
import { Grid, Typography, Card, CardMedia, CardContent} from '@material-ui/core';
import useStyles from './style';


const Article = () => {

  const classes = useStyles();


//  let  {id} = useParams();

const [article, setArticle]=useState({});
const fetchArticle= async(id) =>{
  const response=await commerce.products.retrieve(id);
  const{name, description, image, categories, attributes}=response;
  setArticle({id, name, description, src:image.url, categories, attributes})
}

useEffect(()=>{
  const id= window.location.pathname.split("/");
  fetchArticle(id[2]);
}, []);

console.log(article.name);
console.log(article.categories);
console.log(article.attributes);

  return (
    <>
  
   <main className={classes.content}>
   <div className={classes.toolbar}/>
   <div className={classes.toolbar}/>
   


<Grid container spacing={4}>
  <Grid item xs={12} sm={6} lg={8}>
  <Card>
      <CardContent>
      <CardMedia className={classes.media} title={article.name} image={article.src}></CardMedia>
        <Typography>{article.name}</Typography>
       
      </CardContent>
    </Card>

  </Grid>
</Grid>
  
{/*    <h3>Nota: String: {article.name}</h3>
   
  <img src={article.src}>

   </img> */}
   
      
   </main>
   


   </>
     
)


};
          
export default Article
