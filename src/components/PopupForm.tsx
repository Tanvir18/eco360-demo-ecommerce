/*
'use client'
import React from "react";

interface PopupFormProps {
  show: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>
        <p className="text-sm text-gray-600 mb-4">
          Do you want to show CO2 emission data in every product page? We have created a special widget for you to do that. 
          We can provide over 20,000 product CO2 data for your web store. All data is updated dynamically to you. 
          We have a unique component-based calculation method that provides really accurate CO2 emission data from all electronics. 
          We have visualized CO2 values to make real-life examples of how much consumers can make a difference. Select visualization directly from our library. 
          The widget is a plug & play JS script component with a high-security level and authentication. Implementation time for you is less than a day. 
          Leave your contact information to get free pilot access to the new era of CO2-free shopping.
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
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
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
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
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
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
*/

'use client'
import React from "react";

interface PopupFormProps {
  show: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Contact Form</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            <li>Do you want to show CO2 emission data on every product page?</li>
            <li>We have created a special widget for you to do that.</li>
            <li>We can provide over 20,000 product CO2 data for your web store. All data is updated dynamically for you.</li>
            <li>We have a unique component-based calculation method that provides really accurate CO2 emission data from all electronics.</li>
            <li>We have visualized CO2 values to make real-life examples of how much consumers can make a difference. Select visualization directly from our library.</li>
            <li>The widget is a plug & play JS script component with a high-security level and authentication.</li>
            <li>Implementation time for you is less than a day.</li>
            <li>Leave your contact information to get free pilot access to the new era of CO2-free shopping.</li>
          </ul>

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600"
          >
            Get Started
          </button>
          <p className="text-center font-bold text-black text-sm mt-2">
            No obligation, No credit card required
          </p>
          <p className="text-center text-gray-500 text-xs mt-1">
            By clicking this you will accept all the terms and conditions
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
