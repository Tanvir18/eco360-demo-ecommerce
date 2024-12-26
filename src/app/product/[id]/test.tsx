// "use client"; // Mark as client component

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import AmazonNav from "@/components/AmazonNav";
// import AmazonFooter from "@/components/AmazonFooter";
// import Wizard from "@/components/Wizard";

// const ProductDetails = () => {
//   const params = useParams();
//   const { id } = params;

//   // Product data mapped by ID
//   const productData: Record<string, any> = {
//     1: {
//       title: "Apple iPhone 15 Plus",
//       image: "/img/iPhone-15-Plus-(4)-7443.jpg",
//       price: "$899.99",
//       colors: ["#000000", "#FF0000", "#00FF00"],
//       description: "The latest iPhone 15 Plus with exceptional performance and camera.",
//       brand: "Apple",
//       os: "iOS 17",
//       screenSize: "6.7 inches",
//       resolution: "2796 x 1290",
//       refreshRate: "120 Hz",
//     },
    // 2: {
    //   title: "Apple iPhone 14 Blue",
    //   image: "/img/iPhone-14-Blue-7810.jpg",
    //   price: "$799.99",
    //   colors: ["#0000FF", "#000000"],
    //   description: "The iPhone 14 features excellent battery life and display.",
    //   brand: "Apple",
    //   os: "iOS 16",
    //   screenSize: "6.1 inches",
    //   resolution: "2532 x 1170",
    //   refreshRate: "60 Hz",
    // },
    // 3: {
    //   title: "Apple iPhone 13 Green",
    //   image: "/img/iPhone-13-Green-1718.jpg",
    //   price: "$699.99",
    //   colors: ["#00FF00", "#000000"],
    //   description: "Green iPhone 13, a stylish and powerful device.",
    //   brand: "Apple",
    //   os: "iOS 15",
    //   screenSize: "6.1 inches",
    //   resolution: "2532 x 1170",
    //   refreshRate: "60 Hz",
    // },
    // 4: {
    //   title: "Apple Watch SE GPS Midnight",
    //   image: "/img/apple_watch_se_gps_midnight_aluminum_midnight_sport_band_pdp_image_2023_position-1__en-me.jpg",
    //   price: "$249.99",
    //   colors: ["#000000"],
    //   description: "Apple Watch SE with GPS functionality and stylish Midnight finish.",
    //   brand: "Apple",
    //   os: "WatchOS 9",
    //   screenSize: "1.78 inches",
    //   resolution: "448 x 368",
    //   refreshRate: "60 Hz",
    // },
    // 5: {
    //   title: "iPhone 15 Pro Screen Replacement",
    //   image: "/img/2469-11447.jpg",
    //   price: "$179.99",
    //   colors: ["#FFFFFF"],
    //   description: "Replacement screen for iPhone 15 Pro, professionally assembled.",
    //   brand: "Apple",
    //   os: "N/A",
    //   screenSize: "6.1 inches",
    //   resolution: "N/A",
    //   refreshRate: "N/A",
    // },
//   };

//   const product = productData[id as string];

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
//         <Link href="/" className="text-blue-500 mt-4 hover:underline">
//           Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Amazon Navigation */}
//       <AmazonNav />

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 p-6">
//         <Link href="/" className="text-blue-500 mb-4 inline-block hover:underline">
//           Back to Home
//         </Link>

//         <div className="bg-white rounded-lg p-8 shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Product Image */}
//           <div className="flex justify-center">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full max-w-md object-contain"
//             />
//           </div>

//           {/* Product Details */}
//           <div>
//             <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//             <p className="text-green-600 font-semibold text-2xl mb-2">{product.price}</p>

//             {/* Color Options */}
//             <div className="flex items-center gap-2 mb-4">
//               <p className="font-semibold">Color:</p>
//               {product.colors.map((color: string, index: number) => (
//                 <span
//                   key={index}
//                   className="w-6 h-6 rounded-full border border-gray-300"
//                   style={{ backgroundColor: color }}
//                 ></span>
//               ))}
//             </div>

//             {/* Product Description */}
//             <p className="text-gray-700 mb-4">{product.description}</p>

//             {/* Technical Details */}
//             <ul className="text-gray-600 space-y-1">
//               <li><strong>Brand:</strong> {product.brand}</li>
//               <li><strong>Operating System:</strong> {product.os}</li>
//               <li><strong>Screen Size:</strong> {product.screenSize}</li>
//               <li><strong>Resolution:</strong> {product.resolution}</li>
//               <li><strong>Refresh Rate:</strong> {product.refreshRate}</li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//           <Wizard />
//         </div>
//       </main>

//       {/* Amazon Footer */}
//       <AmazonFooter />
//     </div>
//   );
// };

// export default ProductDetails;














"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AmazonNav from "@/components/AmazonNav";
import AmazonFooter from "@/components/AmazonFooter";
import Wizard from "@/components/Wizard";
import Cart from "@/components/Cart";
import PopupForm from "@/components/PopupForm";
import { useState } from "react";

interface Product {
  title: string;
  image: string;
  price: string;
  colors: string[];
  description: string;
  brand: string;
  os: string;
  screenSize: string;
  resolution: string;
  refreshRate: string;
}
type MemoryOption = "128GB" | "256GB" | "512GB";
const ProductDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<MemoryOption>("128GB");
  const memoryData: Record<MemoryOption, { co2e: number; liters: number; hours: number }> = {
    "128GB": { co2e: 38, liters: 22, hours: 45 },
    "256GB": { co2e: 33, liters: 25, hours: 35 },
    "512GB": { co2e: 20, liters: 10, hours: 30 },
  };

  const selectedData = memoryData[selectedMemory];
  const params = useParams();
  //const { id } = params;

  //const params = useParams() as Params; // Explicitly type params
  //const { id } = params;
  const id = typeof params?.id === "string" ? params.id : null;



  const productData: Record<string, Product> = {
    1: {
      title: "Apple iPhone 15 Plus",
      image: "/img/iPhone-15-Plus-(4)-7443.jpg",
      price: "$899.99",
      colors: ["#000000", "#FF0000", "#00FF00"],
      description: "The latest iPhone 15 Plus with exceptional performance and camera.",
      brand: "Apple",
      os: "iOS 17",
      screenSize: "6.7 inches",
      resolution: "2796 x 1290",
      refreshRate: "120 Hz",
    },
    2: {
      title: "Apple iPhone 14 Blue",
      image: "/img/iPhone-14-Blue-7810.jpg",
      price: "$799.99",
      colors: ["#0000FF", "#000000"],
      description: "The iPhone 14 features excellent battery life and display.",
      brand: "Apple",
      os: "iOS 16",
      screenSize: "6.1 inches",
      resolution: "2532 x 1170",
      refreshRate: "60 Hz",
    },
    3: {
      title: "Apple iPhone 13 Green",
      image: "/img/iPhone-13-Green-1718.jpg",
      price: "$699.99",
      colors: ["#00FF00", "#000000"],
      description: "Green iPhone 13, a stylish and powerful device.",
      brand: "Apple",
      os: "iOS 15",
      screenSize: "6.1 inches",
      resolution: "2532 x 1170",
      refreshRate: "60 Hz",
    },
    4: {
      title: "Apple Watch SE GPS Midnight",
      image: "/img/apple_watch_se_gps_midnight_aluminum_midnight_sport_band_pdp_image_2023_position-1__en-me.jpg",
      price: "$249.99",
      colors: ["#000000"],
      description: "Apple Watch SE with GPS functionality and stylish Midnight finish.",
      brand: "Apple",
      os: "WatchOS 9",
      screenSize: "1.78 inches",
      resolution: "448 x 368",
      refreshRate: "60 Hz",
    },
    5: {
      title: "iPhone 15 Pro Screen Replacement",
      image: "/img/2469-11447.jpg",
      price: "$179.99",
      colors: ["#FFFFFF"],
      description: "Replacement screen for iPhone 15 Pro, professionally assembled.",
      brand: "Apple",
      os: "N/A",
      screenSize: "6.1 inches",
      resolution: "N/A",
      refreshRate: "N/A",
    },
  };

  const product = productData[id as string];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
        <Link href="/" className="text-blue-500 mt-4 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      <AmazonNav />

      <main className="flex-grow bg-white p-6 relative">
        <Link href="/" className="text-blue-500 mb-4 inline-block hover:underline">
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: Product Image and Thumbnails */}
          <div className=" p-6 flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain mb-4"
            />
            {/* Thumbnail Carousel */}
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center"
                >
                  <Image
                    src={product.image}
                    alt={`Thumbnail ${index}`}
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Product Details */}
          <div className="">
            {/* Title and Rating */}
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <p className="text-black text-lg font-bold">4.1</p>
               {/* Star Ratings */}
              <div className="flex items-center text-yellow-500 mr-2">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.431L24 9.587l-6 5.841 1.416 8.243L12 18.896l-7.416 4.775L6 15.428 0 9.587l8.332-1.569L12 .587z" />
                  </svg>
                ))}
                {/* Half Star */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-300"
                >
                  <path d="M12 .587l3.668 7.431L24 9.587l-6 5.841 1.416 8.243L12 18.896V.587z" />
                </svg>
              </div>
              {/* Rating Number and Count */}
              
              <span className="ml-2 text-blue-400">3,325 ratings</span>
            </div>

            {/* Delivery Message */}
            <p className="text-green-600 font-semibold mb-2">
              This item cannot be shipped to your selected delivery location. Please choose a different delivery location.
            </p>

            {/* Color Options */}
            <div className="flex items-center gap-2 mb-4">
              <p className="font-semibold">Color:</p>
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            {/* Memory Options */}
            {/* <div className="flex items-center mb-4">
              {/* <p className="font-semibold mr-4">Memory:</p> 
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-lg focus:ring focus:ring-green-500">
                  128GB
                </button>
                <button className="px-4 py-2 border rounded-lg focus:ring focus:ring-green-500">
                  256GB
                </button>
                <button className="px-4 py-2 border rounded-lg focus:ring focus:ring-green-500">
                  512GB
                </button>
              </div>
            </div> */}


            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                {["128GB", "256GB", "512GB"].map((memory, index) => (
                  <button
                    key={memory}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedMemory === memory ? "bg-green-500 text-white" : ""
                    }`}
                    onClick={() => setSelectedMemory(memory as MemoryOption)} // Cast to MemoryOption
                  >
                    {memory}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">
              {product.description}
            </p>

            {/* Technical Details */}
            <div className="mt-4 border-t pt-4">
              <h2 className="text-xl font-bold mb-2">Specifications</h2>
              <ul className="text-gray-600">
                <li><strong>Brand:</strong> {product.brand}</li>
                <li><strong>Operating System:</strong> {product.os}</li>
                <li><strong>Screen Size:</strong> {product.screenSize}</li>
                <li><strong>Resolution:</strong> {product.resolution}</li>
                <li><strong>Refresh Rate:</strong> {product.refreshRate}</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Cart and Wizard */}
          {/* <div className="flex flex-col">
            <Cart product={product} />
            <div className="mt-6">
              <Wizard onOpenForm={() => setShowForm(true)} />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col">
          <Cart product={product} />
            <div className="mt-6">
              <Wizard
                onOpenForm={() => setShowForm(true)}
                memory={selectedMemory}
                data={selectedData}
              />
            </div>
          </div>
        </div>

        {/* Popup Form */}
        <PopupForm show={showForm} onClose={() => setShowForm(false)} />
      </main>
      <AmazonFooter />
    </div>
  );
};



export default ProductDetails;
