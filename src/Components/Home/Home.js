import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={8}>
            {
                books.map((books) => (
                    <Products books={books}>
                    </Products>
                ))
            }
        </Grid>
        </Box>
    );
};

export default Home;