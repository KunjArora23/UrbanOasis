import { useState } from "react";
import { Link } from "react-router-dom";

export const RoomCard = ({ room }) => {
    const [showDetails, setShowDetails] = useState(false);
    
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-serif font-bold text-gray-800">{room.name}</h3>
            <p className="text-amber-600 font-bold">
              <span className="text-2xl">${room.price}</span>
              <span className="text-sm text-gray-500">/night</span>
            </p>
          </div>
          
          <p className="text-gray-600 mb-4">{room.description}</p>
          
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <p>Size: {room.size}</p>
            <p>Max Occupancy: {room.occupancy}</p>
          </div>
          
          <div className="mb-6">
            <button 
              onClick={() => setShowDetails(!showDetails)} 
              className="text-amber-600 hover:text-amber-800 text-sm flex items-center"
            >
              {showDetails ? 'Hide Details' : 'View Details'}
              <svg 
                className={`ml-1 w-4 h-4 transform transition-transform ${showDetails ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          
          {showDetails && (
            <div className="mt-4 border-t pt-4">
              <h4 className="font-bold text-gray-700 mb-2">Room Amenities:</h4>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                {room.amenities.map((amenity, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-6">
            <Link 
              to={`/booking/${room.id}`}
              className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-md text-center transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    );
  };