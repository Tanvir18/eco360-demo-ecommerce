'use client';
import React, { useState } from "react";
import PopupForm from "@/components/PopupForm";
const AmazonFooter = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    
    <footer className="bg-gray-900 text-white text-sm">
      <div className="bg-gray-800 py-4 text-center text-gray-400">
      </div>
      {/* Footer Content */}
      <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-4">Do you want to show CO2 emission data in your product pages?</h3>
          <p>
            We can provide over 50,000 product CO2 data for your web store. All data is updated dynamically to you. We have a unique component-based calculation method that provides really accurate CO2 emission data from all electronics.
          </p>
          <p className="mt-4">
            We have visualized CO2 values to make real-life examples of how much consumers can make a difference. Select visualization directly from our library.
          </p>
          <p className="mt-4">
            Widget is a plug-and-play JS script component with a high-security level and authentication. Implementation time for you: less than a day.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center">
          <p className="mb-4">Leave your contact information to get free pilot access to a new era of CO2-free shopping.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg" onClick={() => setShowForm(true)}>Contact us</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 py-4 text-center text-gray-400">
      </div>
        <PopupForm show={showForm} onClose={() => setShowForm(false)} />
    </footer>
  );
};

export default AmazonFooter;
