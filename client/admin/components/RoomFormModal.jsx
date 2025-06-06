import React, { useState } from 'react';

const RoomFormModal = ({ onClose, onSubmit, initialData }) => {
  const [roomNumber, setRoomNumber] = useState(initialData?.roomNumber || '');
  const [roomType, setRoomType] = useState(initialData?.roomType || '');
  const [pricePerNight, setPricePerNight] = useState(initialData?.pricePerNight || '');
  const [availabilityStatus, setAvailabilityStatus] = useState(initialData?.availabilityStatus || 'available');
  const [photos, setPhotos] = useState([]);

  const handleFileChange = (e) => {
    setPhotos([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('roomNumber', roomNumber);
    formData.append('roomType', roomType);
    formData.append('pricePerNight', pricePerNight);
    formData.append('availabilityStatus', availabilityStatus);

    for (let i = 0; i < photos.length; i++) {
      formData.append('photos', photos[i]);
    }

    if (initialData?.id) {
      formData.append('id', initialData.id);
    }

    onSubmit(formData, !!initialData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative"
      >
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit Room' : 'Add Room'}</h2>

        <label className="block mb-2">
          Room Number:
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full mt-1 border rounded px-3 py-2"
            required
          />
        </label>

        <label className="block mb-2">
          Room Type:
          <input
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full mt-1 border rounded px-3 py-2"
            required
          />
        </label>

        <label className="block mb-2">
          Price Per Night:
          <input
            type="number"
            value={pricePerNight}
            onChange={(e) => setPricePerNight(e.target.value)}
            className="w-full mt-1 border rounded px-3 py-2"
            required
          />
        </label>

        <label className="block mb-2">
          Availability Status:
          <select
            value={availabilityStatus}
            onChange={(e) => setAvailabilityStatus(e.target.value)}
            className="w-full mt-1 border rounded px-3 py-2"
          >
            <option value="available">Available</option>
            <option value="booked">Booked</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </label>

        <label className="block mb-4">
          {initialData ? 'Update Photos:' : 'Upload Photos:'}
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full mt-1"
          />
        </label>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {initialData ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomFormModal;
