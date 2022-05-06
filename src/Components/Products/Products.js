import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import './Product.css'
import { Button, Typography } from '@mui/material';
const Products = (props) => {
    const {name, photoUrl, price, author} = props.books;

    const handleOrder = (props) =>{
        const books = props;
        const url = 'https://blooming-forest-10862.herokuapp.com/order'
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(books)
        })
    }
    return (
        <>
            <Grid xs={12} md={3}>
            <Paper elevation={3} className="card" style={{borderRadius: '30px'}}>
            <img src={photoUrl} alt="" style={{height:"250px", width: "180px"}}/>
            <Typography style={{fontWeight: 600, marginTop: "20px"}}>{name}</Typography>
            <Typography style={{fontWeight: 600}}>{author}</Typography>
            <Typography style={{fontWeight: 600}}>Price: {price}</Typography>
            <Button onClick={() =>{handleOrder(props)}} variant="outlined">Buy Now</Button>
            </Paper>
            </Grid>
        </>
    );
};

export default Products;