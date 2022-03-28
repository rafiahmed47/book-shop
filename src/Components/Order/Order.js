import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Order = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const url = "http://localhost:4000/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);


  const handleDelete = (id) => {
    const proceed = window.confirm("are you really want to delete?");
    if (proceed) {
      console.log("proceed successfully");
      const url = `http://localhost:4000/deleteOrder/${order._id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("User deleted successfully");
            window.location.reload();
          } else {
            alert("could not delte this product, We will fix it too soon");
          }
        });
    }
  };


  return (
    <Grid item xs={12} md={4}>
      <>
        <TableContainer component={Paper} style={{ width: 900 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell align="right">Price&nbsp;(g)</TableCell>
                <TableCell align="right">Delete This Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((order) => (
                  <TableRow>
                  <TableCell scope="row">{order.name}</TableCell>
                  <TableCell align="right">{order.price}</TableCell>
                  <TableCell align="right">
                    <AiOutlineDelete onClick={handleDelete} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </Grid>
  );
};

export default Order;
