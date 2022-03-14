import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './Product.css'
import { Button, Typography } from '@mui/material';
const Products = (props) => {
    const {name, photoUrl, price, author} = props.books;

    const handleOrder = () =>{
        const orderdBook = props.books;
        const url = 'http://localhost:4000/order'
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(orderdBook)
        })
    }
    return (
        <>
            <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{borderRadius: "10px"}}>
            <img src={photoUrl} alt="" style={{height:"250px", width: "180px"}}/>
            <Typography style={{fontWeight: 600, marginTop: "20px"}}>{name}</Typography>
            <Typography style={{fontWeight: 600}}>{author}</Typography>
            <Typography style={{fontWeight: 600}}>Price: {price}</Typography>
            <Button onClick={handleOrder} variant="outlined">Buy Now</Button>
            </Paper>
            </Grid>
        </>
    );
};

export default Products;