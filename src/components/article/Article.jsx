import React, {useState, useEffect} from 'react';
import { commerce } from '../../lib/commerce.js';

import {useParams} from 'react-router-dom';
import { AddShoppingCart} from '@material-ui/icons';
import { Products, Product} from '../../components';
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CardMedia, CardContent} from '@material-ui/core';
import useStyles from './style';


const Article = () => {

  const classes = useStyles();


//  let  {id} = useParams();

const [article, setArticle]=useState({});
const fetchArticle= async(id) =>{
  const response=await commerce.products.retrieve(id);
  const{name, description, image, categories}=response;
  setArticle({id, name, description, src:image.url, categories})
}

useEffect(()=>{
  const id= window.location.pathname.split("/");
  fetchArticle(id[2]);
}, []);

console.log(article.name);
console.log(article.categories);

  return (
    <>
   <div className={classes.toolbar}/>
   <main className={classes.content}>
   <h3>Nota: String: {article.name}</h3>
   
  <img src={article.src}>

   </img>
   
      
   </main>
   


   </>
     
)


};
          
export default Article
