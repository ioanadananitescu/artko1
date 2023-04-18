import React, {Fragment, useState, useEffect} from 'react';
import { Typography, Grid, Drawer, Box, Toolbar, List, ListItem, ListItemText, Divider, FormGroup, FormControlLabel, Checkbox, IconButton, AppBar } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { Product } from '../../components';
import useStyles from './style';
import { select } from '../Data';
import { useMediaQuery, useTheme } from '@material-ui/core';







    const drawerWidth = 240;
    const drawerSpace = 25;
    


    const drawer =(
        <div>
        <Toolbar sx={{mt:`calc(${drawerSpace}/2)`}}>Select paintings: </Toolbar>
        <Divider />
       <List sx={{ml:5}}>

                         {select.map((text,i) => (
                       <div key={text.id}>
                                   <Toolbar>{text.name}</Toolbar>
                                   
                               {select[i].child.map((item) => (
                                       <FormGroup key={item.id}>
                                           <FormControlLabel control={<Checkbox/>} label={item.name}>

                                           </FormControlLabel>
                                       </FormGroup> 
                               ))}
                               </div>
                               ))
                               
                           }
                   
                       </List>
                       </div>
                     
    );


    //the code
const DesktopNav =()=>{
    const [desktop, setDesktop]=useState();
    const handleChange=(event, newValue)=>(
        setDesktop(newValue)
    )
   

    return(
        
        <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
         >
       {drawer}    
       </Drawer>
    );


    };

    const MobileDrawer = () => {
        const [open, setOpen]=useState(false);
        
        return(
            
            <>
            <Box sx={{display:'flex', width:{drawerWidth}}}>
   
            <Toolbar sx={{mt:20}}>
                <IconButton color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={() => setOpen(!open)}
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <TuneIcon /><Typography variant="body3">Select</Typography> 
                </IconButton>
            </Toolbar>
      
            <Box component="nav" sx={{ width: { drawerWidth }, flexShrink: { sm: 0 } }} aria-label="filter">
                    <Drawer variant="temporary"
                        open={open}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        ModalProps={{ keepMounted: true, }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                        }}>
                        {drawer}
                    </Drawer>
                </Box>
                </Box>
                </>
        );
    };
    const Paintings = ({products,onAddToCart}) => {

        const classes = useStyles();
        const theme=useTheme();
        const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
    return (
<Fragment>
    {isMobile ? <MobileDrawer/>:<DesktopNav/>}


             

              <Box component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
             <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
  {products.map((product)=> (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} onAddToCart={onAddToCart} />
      
    </Grid>
  ))}
</Grid>
      </Box>
    </Fragment>
  )
}

export default Paintings
