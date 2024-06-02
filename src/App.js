import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import MainLayout from "./layout/MainLayout";
import {AuthProvider} from "./context/AuthProvider";
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<PrivateRoute><MainLayout/></PrivateRoute>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/users" element={<Users/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default App;