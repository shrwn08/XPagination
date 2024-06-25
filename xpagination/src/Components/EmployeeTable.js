import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationCard from "./PaginationCard";
import "./employee-table.css";

const EmployeeTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowInTable, setRowInTable] = useState(10);

  if (!data) {
    return (
      <div className="circularprogress">
        <CircularProgress />
      </div>
    );
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startingIndex = (currentPage - 1) * rowInTable;
  const endingIndex = startingIndex + rowInTable;
  const totalPages = Math.ceil(data.length / rowInTable);

  const paginationData = data.slice(startingIndex,endingIndex)

  return (
    <div className="Employee-table-Container">
      <h2 className="employee-table-Heading">Employee Data Table</h2>
      <div className="table-container">
        <TableContainer
          component={Paper}
          sx={{
            width: "98%",
            borderBottom: "#4CCD99",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#4CCD99" }}>
                <TableCell sx={{ color: "white" }}>ID</TableCell>
                <TableCell align="left" sx={{ color: "white" }}>
                  Name
                </TableCell>
                <TableCell align="left" sx={{ color: "white" }}>
                  Email
                </TableCell>
                <TableCell align="left" sx={{ color: "white" }}>
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginationData.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="left">{item.name}</TableCell>
                  <TableCell align="left">{item.email}</TableCell>
                  <TableCell align="left">{item.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="pagination-container">
          <PaginationCard
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
