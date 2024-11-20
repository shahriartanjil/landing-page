const CustomerDelight = () => {
    return (
      <div className="relative bg-cover bg-center py-12" style={{ backgroundImage: "url('path-to-your-background-image.jpg')" }}>
        {/* Logos at the top */}
        <div className="flex justify-center space-x-8 mb-8">
          <img src="path-to-logo1.png" alt="Logo 1" className="w-16 h-16" />
          <img src="path-to-logo2.png" alt="Logo 2" className="w-16 h-16" />
          <img src="path-to-logo3.png" alt="Logo 3" className="w-16 h-16" />
          <img src="path-to-logo4.png" alt="Logo 4" className="w-16 h-16" />
          <img src="path-to-logo5.png" alt="Logo 5" className="w-16 h-16" />
          <img src="path-to-logo6.png" alt="Logo 6" className="w-16 h-16" />
        </div>
  
        {/* Customer Delight Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {/* Single Customer Delight Card */}
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12l2 2 4-4M9 16h.01M13 16h.01M17 16h.01M12 16h.01M11 12h.01M15 12h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Delight</h3>
                <p className="text-center text-gray-600">
                  We deliver the best service and experience for our customer.
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default CustomerDelight;
  