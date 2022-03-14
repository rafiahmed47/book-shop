import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const OrderdItem = (props) => {
    const {_id, name} = props.orders
    const handleDelete = id =>{
        console.log('clicked')
        const proceed = window.confirm('are you really want to delete?')
        if (proceed) {
            console.log('proceed successfully')
            const url = `http://localhost:4000/deleteOrder/${id}`

            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully')
                        window.location.reload()
                    }
                })
        }
    }
    return (
        <Box >
            <Typography variant="h3">{name}</Typography>
            <p>------------------------------------</p>
            <Button onClick={() => handleDelete(_id)} variant="outlined">Delete Item</Button>
            <NavLink to="/Deal"
            style={{
                textDecoration:"none"
            }}
            >
            <Button variant="outlined">Confirm Order</Button>
            </NavLink>
            
        </Box>
    );
};

export default OrderdItem;