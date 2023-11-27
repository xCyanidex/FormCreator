/* eslint-disable no-unused-vars */

import './App.css'
import Login from './Pages/Authentication/Login'
import AdminDashboard from './Pages/Dashboards/AdminDashboard';
import ManagerDashboard from './Pages/Dashboards/ManagerDashboard';
import UserDashboard from './Pages/Dashboards/UserDashboard';
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
