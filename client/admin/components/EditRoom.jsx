import React, { useState, useEffect } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

function EditRoom({ setShowEditModal, room, fetchRooms }) {
    const [editRoomLoading, setEditRoomLoading] = useState(false);
    const [updatedRoom, setUpdatedRoom] = useState({
        type: "",
        price: 0,
        status: "",
    });

    useEffect(() => {
        // Initialize form fields with existing room data
        // console.log(updatedRoom)
        if (room) {
            setUpdatedRoom({
                type: room.typeName || "Single",
                price: room.pricePerNight || 0,
                status:  "Available",
            });
                console.log(updatedRoom)
        }
    }, [room]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRoom((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditRoom = async () => {
        try {
            setEditRoomLoading(true);
            await axios.patch(
                `${import.meta.env.VITE_BACKEND_URL}/admin/room/edit/${room.roomNumber}`,
                {
                    newRoomType: updatedRoom.type,
                    newPricePerNight: updatedRoom.price,
                    newStatus: updatedRoom.status,
                },
                { withCredentials: true }
            );
            await fetchRooms();
            setShowEditModal(false);
        } catch (error) {
            console.error("Error updating room:", error);
        } finally {
            setEditRoomLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-bold mb-4">Edit Room</h3>

                {/* Read-only Room Number */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1 text-gray-700">Room Number</label>
                    <input
                        type="text"
                        value={room.roomNumber}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-700 cursor-not-allowed"
                    />
                </div>

                {/* Room Type */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">Room Type</label>
                    <select
                        name="type"
                        value={updatedRoom.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="Single">Single</option>
                        <option value="Standard">Standard</option>
                        <option value="Deluxe">Deluxe</option>
                        <option value="Suite">Suite</option>
                        <option value="Family">Family</option>
                    </select>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">Price/Night (₹)</label>
                    <input
                        type="number"
                        name="price"
                        min="0"
                        value={updatedRoom.price}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">Status</label>
                    <select
                        name="status"
                        value={updatedRoom.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="Available">Available</option>
                        <option value="Occupied">Occupied</option>
                        <option value="Maintenance">Maintenance</option>
                    </select>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => setShowEditModal(false)}
                        className="px-4 py-2 bg-gray-300 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleEditRoom}
                        disabled={editRoomLoading}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        {editRoomLoading ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Saving...
                            </span>
                        ) : (
                            "Update Room"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditRoom;
