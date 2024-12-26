'use client'
import React from "react";

interface PopupFormProps {
  show: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
        <p>Do you want to show CO2 emission data in every product page?
            We have created a special widget for you to do that. 
            We can provide over 20 000 product CO2 data for your web store. All data is updated dynamically to you.
            We have unique component based calculation method that provides really accurate CO2 emission data from all electronics. 
            We have visualized CO2 values to make real life examples how much consumers can make a difference. Select visualization directly from our library
            Widget is plug & play js. script component with high security level and authentication. Implementation time for you less that a day.
             Leave your contact information to get free pilot access to new era of CO2 free shopping.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
