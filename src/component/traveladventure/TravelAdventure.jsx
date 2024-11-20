import React from "react";

const TravelAdventure = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('src/assets/time-to-travel-flyer-design-template-f96cbfae996a749e3ea665a70a15810c_screen.jpg')" }}>
            {/* Navigation Bar */}
            <nav className="absolute top-0 left-13 right-0 flex justify-between items-center px-8 py-4 bg-transparent gap-2">
                
                <ul className="flex space-x-6 text-white">
                    <li>Home</li>
                    <li>Join Tour</li>
                    <li>Tour Guides</li>
                    <li>Restaurants</li>
                    <li>Bookings</li>
                    <li>Pages</li>
                    <li>Dashboard</li>
                </ul>
                <div className="flex items-center">
                    <img src="src/assets/png-clipart-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-thumbnail.png" alt="Profile" className="w-10 h-10 rounded-full" />
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center text-center h-full">
                <h1 className="text-white text-4xl sm:text-6xl font-bold">UNFORGETTABLE TRAVEL AWAITS THE</h1>
                <h2 className="text-white text-5xl sm:text-7xl font-extrabold mt-2">ADVENTURE</h2>
                <p className="text-white text-lg sm:text-xl mt-4">
                    Experience the thrill of exploring the world's most fascinating destinations with
                    our expertly curated travel packages.
                </p>

                {/* Search Box */}
                <div className="bg-white bg-opacity-70 backdrop-blur-md p-6 mt-8 rounded-lg shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <div className="flex flex-col mb-4 sm:mb-0">
                            <label className="text-gray-700 font-semibold mb-2">Destination</label>
                            <select className="border rounded-md p-2 text-gray-700">
                                <option>Afghanistan</option>
                                {/* Add more options here */}
                            </select>
                        </div>
                        <div className="flex flex-col mb-4 sm:mb-0">
                            <label className="text-gray-700 font-semibold mb-2">Date</label>
                            <input type="text" className="border rounded-md p-2 text-gray-700" placeholder="Dec 2 - Dec 4" />
                        </div>
                        <div className="flex flex-col mb-4 sm:mb-0">
                            <label className="text-gray-700 font-semibold mb-2">Price</label>
                            <input type="text" className="border rounded-md p-2 text-gray-700" placeholder="$1000 - $2000" />
                        </div>
                    </div>
                    <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded-md hover:bg-green-600">
                        Search
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-4 w-full text-center text-white">
                <h3 className="text-xl font-bold">OUR CLIENTS</h3>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
        </div>
        



    );
};

export default TravelAdventure;
