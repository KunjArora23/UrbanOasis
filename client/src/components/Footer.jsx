import React from 'react';
import { Link } from 'react-router-dom';

// Separate component for social media icons
const SocialIcon = ({ name, imgSrc, url }) => {
    return (
        <Link to={url} className="flex items-center space-x-2">
            <img src={imgSrc} alt={name} className="w-6 h-6 " />
            <span className="text-sm">{name}</span>
        </Link>
    );
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-12 pb-6 mt-auto border-t-4 border-amber-500">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between">

                    {/* Hotel Logo & Info */}
                    <div className="mb-8 lg:mb-0 lg:w-1/4">
                        <h2 className="text-2xl font-serif font-bold text-amber-500 mb-4">URBAN OASIS</h2>
                        <p className="text-gray-300 mb-4">Experience unparalleled luxury and personalized service at our exclusive hotel destinations worldwide.</p>
                        <div className="flex space-x-4 mt-6">
                            <SocialIcon 
                                name="Facebook"
                                imgSrc="/images/facebook.png"
                                url="/facebook"
                            / >
                            <SocialIcon
                                name="Instagram"
                                imgSrc="/images/instagram.png"
                                url="/instagram"
                            />
                            <SocialIcon
                                name="Twitter"
                                imgSrc="/images/twitter.png"
                                url="/twitter"
                            />
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold mb-6 text-amber-500">Guest Services</h3>
                        <ul>
                            <li className="mb-3">
                                <Link to="/rooms" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Room Booking
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/amenities" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Amenities
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/dining" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Dining
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/spa" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Spa & Wellness
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/events" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Events & Meetings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Management Links */}
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-xl font-bold mb-6 text-amber-500">Management</h3>
                        <ul>
                            <li className="mb-3">
                                <Link to="/dashboard" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/reservations" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Reservations
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/staff" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Staff Management
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/inventory" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Inventory
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/reports" className="text-gray-300 hover:text-amber-400 transition-colors">
                                    Reports
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-amber-500">Contact Us</h3>
                        <address className="not-italic text-gray-300">
                            <p className="mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                123 Luxury Avenue, Resort City
                            </p>
                            <p className="mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                +1 (800) LUXURY
                            </p>
                            <p className="mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                                </svg>
                                reservations@luxuryhotel.com
                            </p>
                            <p className="mb-3 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                24/7 Service Available
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© {currentYear} Luxury Hotel Management System. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-6 text-sm">
                            <li>
                                <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/sitemap" className="text-gray-400 hover:text-amber-400 transition-colors">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}