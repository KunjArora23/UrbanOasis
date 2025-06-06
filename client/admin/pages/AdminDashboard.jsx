import { DashboardStats } from "../components/DashboardStats";
import { QuickActions } from "../components/QuickActions";
import { RecentBookings } from "../components/RecentBookings";
import axios from "axios";

const AdminDashboard = () => {

  
  const dashboardStats = [
    { title: "Total Rooms", value: 120, icon: "👯️", color: "bg-blue-100 text-blue-800" },
    { title: "Occupied Rooms", value: 87, icon: "🔑", color: "bg-green-100 text-green-800" },
    { title: "Available Rooms", value: 33, icon: "🗕️", color: "bg-yellow-100 text-yellow-800" },
    { title: "Today's Bookings", value: 12, icon: "📝", color: "bg-purple-100 text-purple-800" },
  ];

  const recentBookings = [
    { id: "B12345", guest: "John Smith", room: "Deluxe 101", checkIn: "2025-04-28", checkOut: "2025-05-02", status: "Checked In" },
    { id: "B12346", guest: "Sarah Johnson", room: "Suite 205", checkIn: "2025-04-29", checkOut: "2025-05-01", status: "Reserved" },
    { id: "B12347", guest: "Michael Brown", room: "Standard 118", checkIn: "2025-04-30", checkOut: "2025-05-05", status: "Reserved" },
    { id: "B12348", guest: "Emily Wilson", room: "Deluxe 110", checkIn: "2025-04-27", checkOut: "2025-04-29", status: "Checked Out" },
  ];

  // fetching the data of the rooms from backend



  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today at Urban Oasis.</p>
      </div>

      <DashboardStats stats={dashboardStats} />
      <RecentBookings bookings={recentBookings} />
      <QuickActions />
    </div>
  );
};

export default AdminDashboard