import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import axios from "axios";

// Sample static product data
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: "$800" },
  { id: 2, name: "Chair", category: "Furniture", price: "$120" },
  { id: 3, name: "Watch", category: "Accessories", price: "$250" },
];



const ProductList = () => {
  const [productList, setProductList] = useState([])
  useEffect(()=>{
    try{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response)=>{
        // console.log(response);
        setProductList(response.data)
        
      })
      .catch((error) => {
        console.log(error);
        alert(error.message)
      })
      
    }catch(error){
      console.log(error);
      alert(error.message);
      
    }
  },[])
  console.log("Products",productList);
  
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Product List
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ bgcolor: "#f0f0f0" }}>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Product Name</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
