import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import AddRoom from "../components/AddRoom";
import EditRoom from "../components/EditRoom";
import AddRoomType from "../components/AddRoomType";

const RoomsManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddRoomTypeModal, setShowAddRoomTypeModal] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [editRoomData, setEditRoomData] = useState(null);
  const [deleteRoomLoading, setDeleteRoomLoading] = useState(false);

  // Filter state
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    search: "",
  });

  const fetchRooms = async (queryFilters = filters) => {
    try {
      const queryParams = new URLSearchParams();
      if (queryFilters.type) queryParams.append("type", queryFilters.type);
      if (queryFilters.status) queryParams.append("status", queryFilters.status);
      if (queryFilters.search) queryParams.append("search", queryFilters.search);

      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/admin/room/getFilteredRooms?${queryParams.toString()}`,
        { withCredentials: true }
      );

      setRooms(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const handleDeleteRoom = async (roomNumber) => {
    try {
      setDeleteRoomLoading(true);
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/admin/room/delete/${roomNumber}`, {
        withCredentials: true,
      });
      await fetchRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
    } finally {
      setDeleteRoomLoading(false);
    }
  };

  // Fetch whenever filters change
  useEffect(() => {
    fetchRooms();
  }, [filters]);

  // Initial fetch
  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Rooms Management</h1>
          <p className="text-gray-600">Manage all hotel rooms</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setShowAddRoomTypeModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md"
          >
            Add Room Type
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Add Room
          </button>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            value={filters.type}
            onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
          >
            <option value="">All Room Types</option>
            <option value="Single">Single</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
            <option value="Family">Family</option>
          </select>

          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            value={filters.status}
            onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
          >
            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="occupied">Occupied</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search by room number..."
          className="border border-gray-300 rounded-md px-3 py-2"
          value={filters.search}
          onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
        />
      </div>

      {/* Rooms Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Capacity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price/Night</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rooms.map((room) => (
                <tr key={room.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{room.roomNumber}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{room.typeName}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{room.capacity} Persons</td>
                  <td className="px-6 py-4 text-sm text-gray-500">₹{room.pricePerNight}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                      room.status === "available" ? "bg-green-100 text-green-800" :
                      room.status === "occupied" ? "bg-blue-100 text-blue-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {room.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={() => {
                        setEditRoomData(room);
                        setShowEditModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteRoom(room.roomNumber)}
                      disabled={deleteRoomLoading}
                    >
                      {deleteRoomLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {showAddModal && <AddRoom setShowAddModal={setShowAddModal} fetchRooms={fetchRooms} />}
      {showEditModal && (
        <EditRoom
          room={editRoomData}
          setShowEditModal={setShowEditModal}
          fetchRooms={fetchRooms}
        />
      )}
      {showAddRoomTypeModal && (
        <AddRoomType setShowAddRoomTypeModal={setShowAddRoomTypeModal} />
      )}
    </div>
  );
};

export default RoomsManagement;
