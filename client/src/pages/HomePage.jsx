// HomePage.jsx
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="bg-gray-800 h-full w-full object-cover" style={{ position: 'relative' }}>
            <div className="absolute inset-0 bg-indigo-900 opacity-30"></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Welcome to Urban Oasis Hotel</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Experience luxury, comfort, and exceptional service. Our hotel offers an unforgettable stay with top-notch amenities and breathtaking views.
          </p>
          <div className="mt-10">
            <Link
              to="/booking"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Book Now
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 ml-4"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-2xl text-indigo-600 font-semibold tracking-wide uppercase ">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Luxurious Experience
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our hotel offers the perfect blend of luxury, comfort, and convenience to make your stay memorable.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Prime Location</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Located in the heart of the city with easy access to major attractions, shopping centers, and dining options.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Luxury Amenities</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Enjoy our spa, fitness center, rooftop pool, and fine dining restaurant during your stay.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Premium Service</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our professional staff is available 24/7 to ensure your comfort and satisfaction throughout your stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Rooms Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Accommodations</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Featured Rooms
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover our carefully designed rooms and suites that offer comfort, luxury, and style.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Room 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Deluxe Room</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Perfect for solo travelers or couples, our Deluxe Room offers modern comfort with elegant design.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    From $199/night
                  </span>
                </div>
                <div className="mt-5">
                  <Link
                    to="/rooms/deluxe"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-300"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Executive Suite</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Spacious suite with separate living area, perfect for business travelers or families.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    From $299/night
                  </span>
                </div>
                <div className="mt-5">
                  <Link
                    to="/rooms/executive"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-400"></div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Luxury Penthouse</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Our premium penthouse suite offers panoramic views and unparalleled luxury.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    From $499/night
                  </span>
                </div>
                <div className="mt-5">
                  <Link
                    to="/rooms/penthouse"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/rooms"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              View All Rooms <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimonials</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              What Our Guests Say
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* Testimonial 1 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="text-yellow-400">★★★★★</span>
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Amazing Experience</p>
                    <p className="mt-3 text-base text-gray-500">
                      "The staff was incredibly attentive and the room exceeded our expectations. The location is perfect for exploring the city. We will definitely return!"
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="text-yellow-400">★★★★★</span>
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Perfect Stay</p>
                    <p className="mt-3 text-base text-gray-500">
                      "From check-in to check-out, everything was perfect. The suite was spacious and the amenities were top-notch. Highly recommended!"
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">James Wilson</p>
                    <p className="text-sm text-gray-500">London, UK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="text-yellow-400">★★★★★</span>
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">Luxury at its Finest</p>
                    <p className="mt-3 text-base text-gray-500">
                      "The spa services were exceptional and the restaurant's cuisine was outstanding. This hotel truly understands luxury hospitality."
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Elena Rodriguez</p>
                    <p className="text-sm text-gray-500">Madrid, Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;