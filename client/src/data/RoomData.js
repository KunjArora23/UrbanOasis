// Room data array
const roomTypes = [
    {
        id: 1,
        name: "Single Room",
        description: "Perfect for solo travelers, our cozy Single Rooms offer comfort and convenience with all essential amenities.",
        price: 99,
        amenities: ["Queen Bed", "32\" TV", "Free WiFi", "Work Desk", "Private Bathroom"],
        image: "/api/placeholder/600/400",
        size: "22 sq m",
        occupancy: "1 Person"
    },
    {
        id: 2,
        name: "Double Room",
        description: "Ideal for couples or friends, our Double Rooms feature more space and upgraded amenities for a comfortable stay.",
        price: 149,
        amenities: ["King Bed or Twin Beds", "40\" Smart TV", "High-Speed WiFi", "Work Area", "Premium Toiletries"],
        image: "/api/placeholder/600/400",
        size: "28 sq m",
        occupancy: "2 People"
    },
    {
        id: 3,
        name: "Executive Room",
        description: "Experience enhanced comfort and business amenities in our Executive Rooms, designed for the discerning business traveler.",
        price: 199,
        amenities: ["King Bed", "55\" Smart TV", "Executive Lounge Access", "Ergonomic Work Station", "Espresso Machine"],
        image: "/api/placeholder/600/400",
        size: "35 sq m",
        occupancy: "2 People"
    },
    {
        id: 4,
        name: "Deluxe Room",
        description: "Our Deluxe Rooms offer premium furnishings and extra space for those who desire additional comfort during their stay.",
        price: 249,
        amenities: ["King Bed", "55\" Smart TV", "Sitting Area", "Mini Bar", "Luxury Bathroom"],
        image: "/api/placeholder/600/400",
        size: "40 sq m",
        occupancy: "2 People"
    },
    {
        id: 5,
        name: "Junior Suite",
        description: "Enjoy the luxury of a separate living area in our Junior Suites, perfect for longer stays or those seeking more space.",
        price: 349,
        amenities: ["King Bed", "Separate Living Area", "65\" Smart TV", "Premium Mini Bar", "Bathtub & Shower"],
        image: "/api/placeholder/600/400",
        size: "55 sq m",
        occupancy: "2-3 People"
    },
    {
        id: 6,
        name: "Presidential Suite",
        description: "The ultimate in luxury, our Presidential Suite offers unparalleled space, premium amenities, and personalized service.",
        price: 599,
        amenities: ["King Bed", "Separate Living & Dining Areas", "75\" Smart TV", "Private Terrace", "Jacuzzi"],
        image: "/api/placeholder/600/400",
        size: "90 sq m",
        occupancy: "2-4 People"
    }
];

export default roomTypes;