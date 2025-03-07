
'use client';
import React, { useState } from "react";
import emailjs from "emailjs-com";

interface PopupFormProps {
  show: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ show, onClose }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!show) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const templateParams = {
      email,
      firstName,
      lastName,
    };

    try {
      await emailjs.send(
        "service_p4uf08n", // Replace with your EmailJS Service ID
        "template_9wvfmpl", // Replace with your EmailJS Template ID
        templateParams,
        "qCZl5gDxYUgKE_EDu" // Replace with your EmailJS User ID
      );
      setMessage("Email sent successfully!");
    } catch (error) {
      setMessage("Failed to send email. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div
        className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg relative flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 z-10"
          onClick={onClose}
          style={{ transform: "translate(50%, -50%)" }}
        >
          ✖
        </button>

        {/* Popup Title */}
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Contact Form</h2>

        {/* Popup Content */}
        <div className="overflow-y-auto flex-grow">
          <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
            {/*}
            <li>Do you want to show CO2 emission data on every product page?</li>
            <li>We have created a special widget for you to do that.</li>
            <li>We can provide over 20,000 product CO2 data for your web store. All data is updated dynamically for you.</li>
            <li>We have a unique component-based calculation method that provides really accurate CO2 emission data from all electronics.</li>
            <li>We have visualized CO2 values to make real-life examples of how much consumers can make a difference. Select visualization directly from our library.</li>
            <li>The widget is a plug & play JS script component with a high-security level and authentication.</li>
            <li>Implementation time for you is less than a day.</li>
            */}
            Leave your contact information to get free pilot access to the new era of CO2-free shopping.
          </ul>

          {/* Form Section */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
                  required
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
                  required
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600"
              disabled={loading}
            >
              {loading ? "Sending..." : "Leave access request"}
            </button>
            {message && (
              <p className="text-center text-sm mt-2 font-semibold text-black">{message}</p>
            )}
            <p className="text-center font-bold text-black text-sm mt-2">
              No obligation, No credit card required
            </p>
            <p className="text-center text-gray-500 text-xs mt-1">
              By clicking this you will accept all the terms and conditions
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
