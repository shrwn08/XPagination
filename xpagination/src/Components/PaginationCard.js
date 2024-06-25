import React, { useState } from "react";
import "./pagination.css";
import { Box, Button } from "@mui/material";

const PaginationCard = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="pagination-container">
      <Button
        variant="contained"
        onClick={(e) => handlePageChange(e, currentPage - 1)}
        sx={{ backgroundColor: "#4CCD99", color: "white" }}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <Box className="number">{currentPage}</Box>
      <Button
        variant="contained"
        onClick={(e) => handlePageChange(e, currentPage + 1)}
        sx={{ backgroundColor: "#4CCD99", color: "white" }}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationCard;
