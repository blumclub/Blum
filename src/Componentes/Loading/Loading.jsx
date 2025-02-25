"use client"
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = ({ ancho }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center"  sx={{ '& > * + *': { marginLeft: 2 } }} >
      <CircularProgress color="inherit" size={ancho?ancho:'40px'}/>
    </Box>
  );
}

export default Loading;