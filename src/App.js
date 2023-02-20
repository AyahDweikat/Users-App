import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Users from "./Components/Users/Users";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
