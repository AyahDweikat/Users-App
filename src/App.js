import Sidebar from "./Components/Sidebar/Sidebar";
import Users from "./Components/Users/Users";
import UserView from "./Components/Users/UserView/UserView";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { createTheme, ThemeProvider , colors } from "@mui/material";
// // ThemeProvider
// const theme =  createTheme({
//   palette:{
//     // color:colors.grey[100]
//     secondary:{
//       main:'#DFE0EB',
//     },
//   },
// })
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
