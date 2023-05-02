import React, {lazy, Suspense, useState, useEffect} from 'react';

import {Navbar,  Cart, Checkout, Article, Featured, Home, Products, Paintings, Filter, MobileFilter} from './components';
import './App.css';
import {commerce} from '../src/lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {

    

    // const [featured, setFeatured]=useState([]);
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState({});
    
   
    

/*     const fetchFeatures= async ()=> {
        const response= await commerce.products.list({category_slug:'featured'});
        const item= response.data;
        setFeatured(item);
      } */

    const fetchProducts = async ()=>{
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async ()=>{
        
        setCart(await commerce.cart.retrieve());
    }


    const handleAddToCart= async (productId, quantity)=>{
       
        const item= await commerce.cart.add(productId, quantity);
       setCart(item);
    }
   
    const handleUpdateCartQty =async (productId, quantity) => {
        
        const item = await commerce.cart.update(productId, { quantity })
        
        setCart(item)
        
      
      }

        const handleRemoveFromCart = async (lineItemId) => {
            const item=await commerce.cart.remove(lineItemId);
            setCart(item);
        }

        const handleEmptyCart=async()=>{
            const item=await commerce.cart.empty();
            setCart(item);
        }
     
    

    useEffect(()=>{
        // fetchFeatures();
        fetchProducts();
        fetchCart();
       
         
    },[])
console.log(products);
  return (
    <Router>
    <div className="App">
        <div>
           
   <Navbar totalItems={cart.total_items}/>

   <Routes>
  
           <Route exact path="/featured" element={<Featured products={products}/>}>

           </Route>   
            <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/> }>
            </Route>
         
           <Route exact path='/home' element={<Home products={products} onAddToCart={handleAddToCart}/>}>
           </Route>

           <Route exact path="/cart" element = {<Cart cart={cart} 
           handleUpdateCartQty={handleUpdateCartQty} 
           handleRemoveFromCart={handleRemoveFromCart} 
           handleEmptyCart={handleEmptyCart} /> } >
             </Route>
             <Route exact path="/checkout" element={<Checkout/>}></Route>
            
             <Route path="/article/:id" element={<Article onAddToCart={handleAddToCart}/>}></Route> 

             <Route exact path="/paintings" element={<Paintings products={products} onAddToCart={handleAddToCart}/>}></Route>
           <Route exact path="/filter" element={<Filter onAddToCart={handleAddToCart}/>}></Route>
           <Route exact path="/mobilefilter" element={<MobileFilter products={products} onAddToCart={handleAddToCart}/>}></Route>
          </Routes> 
   
          
        </div>
   

    </div>
  
    </Router>
   
  )
}


export default App
