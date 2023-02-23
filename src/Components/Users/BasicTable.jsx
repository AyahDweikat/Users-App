import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import TableBodyTag from './TableBodyTag';

export default function BasicTable({ pageUsers }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="headingTable">
            <TableCell className="tableHeadCell">User</TableCell>
            <TableCell className="tableHeadCell" align="right">
              Contact Information
            </TableCell>
            <TableCell className="tableHeadCell" align="right">
              Registration Date
            </TableCell>
            <TableCell className="tableHeadCell" align="right">
              Country/Post Code
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBodyTag pageUsers={pageUsers} />
      </Table>
    </TableContainer>
  );
}