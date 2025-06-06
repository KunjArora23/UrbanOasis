export const RoomFilters = ({ activeFilter, setActiveFilter }) => {
    const filters = ["All Rooms", "Single", "Double", "Executive", "Deluxe", "Junior Suite", "Presidential"];
    
    return (
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-amber-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  };
  