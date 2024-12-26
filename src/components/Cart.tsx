import React from "react";

interface CartProps {
  product: {
    price: string;
  };
}

const Cart: React.FC<CartProps> = ({ product }) => {
  return (
    <div className="w-72 border-gray-500 bg-white p-6 rounded-lg shadow-md flex flex-col">
      <p className="text-green-600 text-left font-bold text-xl mb-2">{product.price}</p>
      <p className="text-gray-700 mb-4">
        Delivery <span className="font-bold">Thursday, January 2</span>
      </p>
      <div className="flex items-center text-gray-700 mb-4">
        {/* Location Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c4.97 0 9 3.873 9 8.625 0 5.622-7.115 11.285-8.4 12.28a.752.752 0 01-.867 0C10.115 22.16 3 16.497 3 10.875c0-4.752 4.03-8.625 9-8.625z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.25a2.625 2.625 0 100 5.25 2.625 2.625 0 000-5.25z"
          />
        </svg>
        {/* Delivery Text */}
        <span className="text-blue-500">Deliver to Finland</span>
      </div>
      <p className="text-green-600 font-semibold mb-4">In Stock</p>
      {/* Quantity Selector */}
      <div className="mb-4 w-full">
        <select
          id="quantity"
          className="w-full border bg-gray-300 rounded-lg px-4 py-2 focus:ring-green-500"
        >
          <option value="1" selected>Quantity: 1</option>
          <option value="2">Quantity: 2</option>
          <option value="3">Quantity: 3</option>
          <option value="4">Quantity: 4</option>
          <option value="5">Quantity: 5</option>
        </select>
      </div>

      {/* Action Buttons */}
      <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 mb-2">
        Add to Cart
      </button>
      <button className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600">
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
