import { Routes, Route } from "react-router-dom";
import UserLayout from "./Layout/userLayout";
import AdminLayout from "../admin/adminLayout/adminLayout";
import HomePage from "./pages/HomePage";
import { RoomsPage } from "./pages/RoomsPage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./components/Dashboard";
import AdminDashboard from "../admin/pages/AdminDashboard";
import RoomsManagement from "../admin/pages/RoomManagement";



function App() {
  return (
    <Routes>
      {/* USER ROUTES */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="rooms" element={<RoomsManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
