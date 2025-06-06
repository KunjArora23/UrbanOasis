import React, { useState } from "react";
import axios from "axios";

function AddRoom({ setShowAddModal, fetchRooms }) {
  const [newRoom, setNewRoom] = useState({
    number: "",
    type: "Single",
    price: 1000,
    status: "Available",
  });
  const [addRoomLoading, setAddRoomLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRoom = async () => {
    setAddRoomLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/admin/room/add`, {
        roomNumber: newRoom.number,
        roomType: newRoom.type,
        pricePerNight: newRoom.price,
        status: newRoom.status,
      }, { withCredentials: true });

      await fetchRooms();
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding room:", error);
    } finally {
      setAddRoomLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">Add New Room</h3>

        <input
          type="text"
          name="number"
          placeholder="Room Number"
          value={newRoom.number}
          onChange={handleInputChange}
          className="mb-4 w-full px-3 py-2 border rounded"
        />
        <select name="type" value={newRoom.type} onChange={handleInputChange} className="mb-4 w-full px-3 py-2 border rounded">
          <option>Single</option>
          <option>Standard</option>
          <option>Deluxe</option>
          <option>Suite</option>
          <option>Family</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newRoom.price}
          onChange={handleInputChange}
          className="mb-4 w-full px-3 py-2 border rounded"
        />
        <select name="status" value={newRoom.status} onChange={handleInputChange} className="mb-4 w-full px-3 py-2 border rounded">
          <option>Available</option>
          <option>Occupied</option>
          <option>Maintenance</option>
        </select>

        <div className="flex justify-end gap-3">
          <button onClick={() => setShowAddModal(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={handleAddRoom} disabled={addRoomLoading} className="px-4 py-2 bg-blue-600 text-white rounded">
            {addRoomLoading ? "Adding..." : "Add Room"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;
