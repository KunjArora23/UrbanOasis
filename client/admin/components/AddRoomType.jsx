import React, { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

function AddRoomType({ setShowAddRoomTypeModal, fetchRoomTypes }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    typeName: "",
    description: "",
    capacity: 1,
    photos: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setForm((prev) => ({ ...prev, photos: files }));
  };

  const handleAddRoomType = async () => {
    if (form.photos.length !== 4) {
      alert("Please upload exactly 4 photos.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("typeName", form.typeName);
      formData.append("description", form.description);
      formData.append("capacity", form.capacity);
      form.photos.forEach((photo, index) => {
        formData.append("photos", photo);
      });

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/room/addRoomTypes`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (fetchRoomTypes) await fetchRoomTypes();
      setShowAddRoomTypeModal(false);
    } catch (error) {
      console.error("Error adding room type:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add Room Type</h2>

        {/* Type Name */}
        <div className="mb-4">
          <label className="block font-medium text-sm mb-1">Type Name</label>
          <input
            type="text"
            name="typeName"
            value={form.typeName}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block font-medium text-sm mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>

        {/* Capacity */}
        <div className="mb-4">
          <label className="block font-medium text-sm mb-1">Capacity (Persons)</label>
          <input
            type="number"
            name="capacity"
            min="1"
            value={form.capacity}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Photos */}
        <div className="mb-4">
          <label className="block font-medium text-sm mb-1">Upload 4 Photos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-1">You must upload exactly 4 images.</p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShowAddRoomTypeModal(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddRoomType}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </span>
            ) : (
              "Add Room Type"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRoomType;
