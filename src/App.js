import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from "./components/Login/Login";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Dashboard/Home";
import UserDetail from "./components/Dashboard/UserDetail";
// import LoginForm from "./components/Login/LoginForm";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userdetail/:id" element={<UserDetail />} />

        {/*</Route>*/}
    </Routes>
  );
}

export default App;
