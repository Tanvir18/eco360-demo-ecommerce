import React from "react";

const AmazonNav = () => {
  return (
    <nav className="bg-green-900 text-white">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2">
        {/* Left: Logo and Deliver */}
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <div className="text-xl md:text-2xl font-bold">ECO360</div>
          <div className="text-xs md:text-sm">
            <span className="text-gray-300">Deliver to</span>
            <div className="font-semibold">Finland</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-full md:max-w-2xl flex-grow mb-2 md:mb-0">
          <select className="border border-gray-400 text-black p-2 text-sm md:text-base">
            <option>Cell Phones &amp; Accessories</option>
            <option>Electronics</option>
            <option>Books</option>
          </select>
          <input
            type="text"
            placeholder="Search Eco360"
            className="flex-grow p-2 outline-none text-black text-sm md:text-base"
          />
          <button className="bg-pink-600 px-2 md:px-4 py-2 text-sm md:text-base">🔍</button>
        </div>

        {/* Right: Options */}
        <div className="flex items-center gap-4 md:gap-6 text-xs md:text-base">
          <div>EN ▼</div>
          <div>
            <p className="hidden md:block text-xs">Hello, sign in</p>
            <p className="font-semibold">Account &amp; Lists</p>
          </div>
          <div>
            <p className="hidden md:block text-xs">Returns</p>
            <p className="font-semibold">&amp; Orders</p>
          </div>
          <div className="text-xl md:text-2xl">🛒 Cart</div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-green-800 flex flex-wrap gap-2 md:gap-4 px-4 py-2 text-xs md:text-base">
        <button className="font-semibold">☰ All</button>
        <button>Today&apos;s Deals</button>
        <button>Customer Service</button>
        <button>Registry</button>
        <button>Gift Cards</button>
        <button>Sell</button>
      </div>
    </nav>
  );
};

export default AmazonNav;

