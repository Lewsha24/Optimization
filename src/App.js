import './App.css';
import {lazy, Suspense, startTransition} from "react"
import {Routes, Route } from 'react-router-dom'
import MainLayout from "./layout/MainLayout";
import {AuthProvider} from "./context/AuthProvider";
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";

const Home = lazy(() =>import('./pages/Home'));

const About = lazy(() =>import('./pages/About').then(module => ({
    default: module.About,
})))
const Users = lazy(() =>import('./pages/Users').then(module => ({
    default: module.Users,
})))

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<PrivateRoute><MainLayout/></PrivateRoute>}>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                    <Home />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                    <About />
                            </Suspense>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                    <Users />
                            </Suspense>
                        }
                    />
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </AuthProvider>
    );
}

export default App;