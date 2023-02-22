import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

// export default function TablePaginationDemo() {
//   const [page, setPage] = React.useState(2);
//   const [rowsPerPage, setRowsPerPage] = React.useState(8);

//   const handleChangePage = (event,newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 1));
//     setPage(0);
//   };

//   return (
//     <TablePagination
//       component="div"
//       count={100}
//       page={page}
//       onPageChange={handleChangePage}
//       rowsPerPage={rowsPerPage}
//       onRowsPerPageChange={handleChangeRowsPerPage}
//     />
//   );
// }

// function TablePaginationDemo() {
//   return (
//     <div aria-label="Page navigation example">
//         <ul class="pagination justify-content-center">
//           <li class="page-item disabled">
//             <button class="page-link" href="#" tabindex="-1" onClick={()=>{}}>
//               Previous
//             </button>
//           </li>
          
//           <li class="page-item">
//             <button class="page-link" href="#">
//               Next
//             </button>
//           </li>
//         </ul>
//     </div>
//   );
// }

// export default TablePaginationDemo;
