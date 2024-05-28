import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import LoginUser from "./users/LoginUser";
import Index from "./pages/Index";


function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/addUser" element={<AddUser />} />
                <Route exact path="/login" element={<LoginUser />} />
                <Route exact path="/editUser/:id" element={<EditUser />} />
                <Route exact path="/viewUser/:id" element={<ViewUser />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
