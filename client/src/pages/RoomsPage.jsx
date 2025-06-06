import React, { useState } from "react";
import roomTypes from "../data/RoomData";
import { RoomFilters } from "../components/RoomFilter";
import { RoomCard } from "../components/RoomCard";

export const RoomsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Rooms");
  console.log("Active Filter:", activeFilter);
  // Filter rooms based on active filter
  const filteredRooms = roomTypes.filter(room => {
    if (activeFilter === "All Rooms") return true;
    return room.name.includes(activeFilter);
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Rooms & Suites</h1>
          <p className="text-xl md:w-2/3 text-gray-300">
            Experience unparalleled comfort and luxury in our carefully designed accommodations,
            tailored to meet the needs of every traveler.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <RoomFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* No Results */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No rooms match your criteria</h3>
            <p className="text-gray-600">Please try adjusting your filters.</p>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">Booking Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Policies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Check-in: 3:00 PM, Check-out: 12:00 PM</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Free cancellation up to 48 hours before check-in</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Photo ID required at check-in</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Extra person charges may apply</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4">Included with Every Room</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Complimentary breakfast buffet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Access to fitness center and swimming pool</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>High-speed wireless internet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-amber-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>24/7 concierge service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}