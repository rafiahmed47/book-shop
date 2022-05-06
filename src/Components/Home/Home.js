import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBook] = useState('')
  useEffect(() => {
    fetch("https://blooming-forest-10862.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => {
          // setBooks(data)
          const filteredData = data?.filter((book) => book.name.toLocaleLowerCase().includes(searchBook.toLocaleLowerCase()))
          setBooks(filteredData)
      });
  }, [searchBook]);

  // console.log({searchBook})
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          width: 500,
          maxWidth: "90%",
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <TextField fullWidth id="fullWidth" placeholder="Search the book you like..." onChange={(e) => setSearchBook(e.target.value)} />
      </Box>
      <div className="products">
        {books.map((books) => (
          <Products books={books}></Products>
        ))}
      </div>
    </Box>
  );
};

export default Home;
