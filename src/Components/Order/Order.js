import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OrderdItem from '../OrderdItem/OrderdItem';

const Order = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:4000/orders'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <Box
            style={{
                alignItem: "Center",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid black"
            }}>
            {
                order.map((orders) => (
                    <OrderdItem orders={orders}></OrderdItem>
                ))
            }
        </Box>
    );
};

export default Order;