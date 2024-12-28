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

interface icon {
  src: string; // Image URL
  label: string; // Descriptive label
}
interface Product {
  title: string;
  image: string;
  price: string;
  colors: string[];
  intro: string;
  description: string;
  brand: string;
  os: string;
  screenSize: string;
  resolution: string;
  refreshRate: string;
  memoryOptions: MemoryOption[];
  memoryData: Partial<Record<MemoryOption, { co2e: number; liters: number; hours: number }>>;
  icons: icon[];
  categories: string;
  conditions: boolean;
}
type MemoryOption = "128GB" | "256GB" | "512GB" | "1TB" | "2TB" | "41mm" | "45mm";

const ProductDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : null;

  const productData: Record<string, Product> = {
    "1": {
      title: "Apple iPhone 15 Plus",
      image: "/img/iPhone-15-Plus-(4)-7443.jpg",
      price: "€999.00",
      colors: ["#000000", "#FF0000", "#00FF00"],
      intro: `This product is not Apple certified, but has been professionally inspected and tested by Eco360-qualified suppliers. The product may have minimal scratches or dents, and a battery with at least 80% capacity. Box may be generic and accessories may not be original, but will be compatible and fully functional. This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
      description: `6.7inch Super Retina XDR display. Aluminum with color-infused glass back. Ring/Silent switch
        Dynamic Island. A magical way to interact with iPhone. A16 Bionic chip with 5-core GPU
        Advanced dual-camera system. 48MP Main | Ultra Wide. Super-high-resolution photos (24MP and 48MP). Next-generation portraits with Focus and Depth Control. 4X optical zoom range
        Emergency SOS via satellite. Crash Detection. Roadside Assistance via satellite
        Up to 26 hours video playback. USB C, Supports USB 2. Face ID`,
      brand: "Apple",
      os: "iOS 17",
      screenSize: "6.7 inches",
      resolution: "2796 x 1290",
      refreshRate: "120 Hz",
      memoryOptions: ["128GB", "256GB", "512GB"],
      memoryData: {
        "128GB": { co2e: 61,  hours: 76, liters: 332},
        "256GB": { co2e: 68,  hours: 85, liters: 370 },
        "512GB": { co2e: 82,  hours: 103, liters: 446 },
      },
      icons: [
        { src: "/img/oven.png", label: "Hours" },
        { src: "/img/car.png", label: "Km" },
      ],
      categories: "phone",
      conditions: false,
    },
    "2": {
      title: "Apple iPhone 14 Blue (Renewed Premium)",
      image: "/img/iPhone-14-Blue-7810.jpg",
      price: "€575.70",
      colors: ["#0000FF", "#000000"],
      intro: `This product is not Apple certified, but has been professionally inspected and tested by Eco360-qualified suppliers. The product may have minimal scratches or dents, and a battery with at least 80% capacity. Box may be generic and accessories may not be original, but will be compatible and fully functional. This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
      description: `This phone is unlocked and compatible with any carrier of choice on GSM and CDMA networks (e.g. AT&T, T-Mobile, Sprint, Verizon, US Cellular, Cricket, Metro, Tracfone, Mint Mobile, etc.).
                    Please check with your carrier to verify compatibility.
                    When you receive the phone, insert a SIM card from a compatible carrier. Then, turn it on, connect to Wi-Fi, and follow the on screen prompts to activate service.
                    The device does not come with headphones or a SIM card. It does include a generic (Mfi certified) charging cable.
                    Tested for battery health and guaranteed to have a minimum battery capacity of 80%.`,
      brand: "Apple",
      os: "iOS 16",
      screenSize: "6.1 inches",
      resolution: "2532 x 1170",
      refreshRate: "60 Hz",
      memoryOptions: ["128GB", "256GB", "512GB"],
      memoryData: {
        "128GB": { co2e: 61, hours: 76, liters: 332 },
        "256GB": { co2e: 67, hours: 84, liters: 364 },
        "512GB": { co2e: 83, hours: 104, liters: 451 },
      },
      icons: [
        { src: "/img/oven.png", label: "Hours" },
        { src: "/img/car.png", label: "Km" },
      ],
      categories: "phone",
      conditions: true,
    },
    "3": {
      title: "Apple iPhone 13 Green",
      image: "/img/iPhone-13-Green-1718.jpg",
      price: "€499.00",
      colors: ["#00FF00", "#000000"],
      intro: `This product is not Apple certified, but has been professionally inspected and tested by Eco360-qualified suppliers. The product may have minimal scratches or dents, and a battery with at least 80% capacity. Box may be generic and accessories may not be original, but will be compatible and fully functional. This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.`,
      description: `6.7inch Super Retina XDR display. Aluminum with color-infused glass back. Ring/Silent switch
        A16 Bionic chip with 5-core GPU
        Advanced dual-camera system. 48MP Main | Ultra Wide. Super-high-resolution photos (24MP and 48MP). Next-generation portraits with Focus and Depth Control. 4X optical zoom range
        Emergency SOS via satellite. Crash Detection. Roadside Assistance via satellite
        Up to 26 hours video playback. USB C, Supports USB 2. Face ID`,
      brand: "Apple",
      os: "iOS 15",
      screenSize: "6.1 inches",
      resolution: "2532 x 1170",
      refreshRate: "60 Hz",
      memoryOptions: ["128GB", "256GB", "512GB"],
      memoryData: {
        "128GB": { co2e: 64, hours: 80, liters: 348 },
        "256GB": { co2e: 71, hours: 89, liters: 386 },
        "512GB": { co2e: 83, hours: 104, liters: 451 },
      },
      icons: [
        { src: "/img/oven.png", label: "Hours" },
        { src: "/img/car.png", label: "Km" },
      ],
      categories: "phone",
      conditions: false,
    },
    "4": {
      title: "Apple Watch Series 8 (GPS, 45mm) Midnight Aluminum Case with Midnight Sport Band (Renewed Premium)",
      image: "/img/apple_watch_se_gps_midnight_aluminum_midnight_sport_band_pdp_image_2023_position-1__en-me.jpg",
      price: "€199.72",
      colors: ["#000000"],
      intro: `Renewed Premium products are shipped and sold by Eco360 and have been certified to work and look like new. They have an increased battery life (min 90% battery capacity) and come with an Eco360-branded box and generic accessories which are in brand new condition. Renewed Premium products are not Apple certified but come with a one-year full satisfaction guarantee.`,
      description:
        `WHY Apple WATCH SERIES 8 - Your essential companion for a healthy life is now even more powerful. Advanced sensors provide insights to help you better understand your health. Safety features can get you help when you need it. The bright, Always-On Retina display is easy to read, even when your wrist is down.
        EASILY CUSTOMIZABLE - Available in a range of sizes and materials, with dozens of bands to choose from and watch faces with complications tailored to whatever you’re into.
        INNOVATIVE SAFETY FEATURES - Crash Detection and Fall Detection can automatically connect you with emergency services in the event of a severe car crash or a hard fall. And Emergency SOS provides urgent assistance with the press of a button.
        ADVANCED HEALTH FEATURES - Temperature sensing is a breakthrough feature that provides deep insights into women’s health. Keep an eye on your blood oxygen. Take an ECG anytime. Get notifications if you have an irregular rhythm. And see how much time you spent in REM, Core, or Deep sleep with Sleep Stages.
        Requires iPhone 8 or later with iOS 16 or later.`,
      brand: "Apple",
      os: "WatchOS 9",
      screenSize: "1.78 inches",
      resolution: "448 x 368",
      refreshRate: "60 Hz",
      memoryOptions: ["41mm", "45mm"],
      memoryData: {
        "41mm": { co2e: 33, hours: 330, liters: 179 },
        "45mm": { co2e: 35, hours: 350, liters: 190 },
      },
      icons: [
        { src: "/img/tv.png", label: "Hours" },
        { src: "/img/car.png", label: "Km" },
      ],
      categories: "watch",
      conditions: true,
    },
    "5": {
      title: "iPad 12.9-inch iPad Pro Wi-Fi+Cellular 128GB - Space Gray (5th Generation)",
      image: "/img/2469-11447.jpg",
      price: "€1039.00",
      colors: ["#FFFFFF"],
      intro: `Renewed Premium products are shipped and sold by Eco360 and have been certified to work and look like new. They have an increased battery life (min 90% battery capacity) and come with an Eco360-branded box and generic accessories which are in brand new condition. Renewed Premium products are not Apple certified but come with a one-year full satisfaction guarantee.`,
      description: `Apple M1 chip for next-level performance
        Brilliant 12.9-inch Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color
        TrueDepth camera system featuring Ultra Wide camera with Center Stage
        12MP Wide camera, 10MP Ultra Wide camera, and LiDAR Scanner for immersive AR
        Stay connected with ultrafast Wi-Fi
        Go further with all-day battery life
        Thunderbolt port for connecting to fast external storage, displays, and docks
        Face ID for secure authentication and Apple Pay
        Four speaker audio and five studio-quality microphones
        Support for Apple Pencil (2nd generation), Magic Keyboard, and Smart Keyboard Folio`,
      brand: "Apple",
      os: "N/A",
      screenSize: "12.9 inches",
      resolution: "2732-by-2048-pixel resolution at 264 pixels per inch (ppi)",
      refreshRate: "60hz",
      memoryOptions: ["128GB", "256GB", "512GB", "1TB", "2TB"],
      memoryData: {
        "128GB": { co2e: 138, hours: 173, liters: 750 },
        "256GB": { co2e: 166, hours: 208, liters: 902 },
        "512GB": { co2e: 187, hours: 234, liters: 1016 },
        "1TB":   { co2e: 228, hours: 285, liters: 1239 },
        "2TB":   { co2e: 286, hours: 358, liters: 1554 },
      },
      icons: [
        { src: "/img/oven.png", label: "Hours" },
        { src: "/img/car.png", label: "Km" },
      ],
      categories: "tablet",
      conditions: false,
    }
  };
  

  const product = productData[id as string];

  const [selectedMemory, setSelectedMemory] = useState<MemoryOption>(
    product?.memoryOptions[0] || "128GB"
  );

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

  //const selectedData = product.memoryData[selectedMemory];
  const selectedData = product.memoryData[selectedMemory] || { co2e: 0, liters: 0, hours: 0 };
  //const pcategories = product.categories;
  //const pconditions = product.conditions;

  //test
  /*
  const [formState, setFormState] = useState({
    show: false,
    categories: "",
    conditions: "",
  });

  const handleOpenForm = () => {
    setFormState({
      show: true,
      categories: product.categories,
      conditions: product.conditions,
    });
  };*/
  //end test

  return (
    <div className="flex flex-col min-h-screen">
      <AmazonNav />

      <main className="flex-grow bg-white p-6 relative">
        <Link href="/" className="text-blue-500 mb-4 inline-block hover:underline">
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: Product Image and Thumbnails */}
          <div className="p-6 flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain mb-4"
            />
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
          <div>
            <h1 className="text-3xl font-bold mb-2 text-black">{product.title}</h1>
            <div className="flex items-center mb-4">
              <p className="text-black text-lg font-bold">4.1</p>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gray-300"
                >
                  <path d="M12 .587l3.668 7.431L24 9.587l-6 5.841 1.416 8.243L12 18.896V.587z" />
                </svg>
              </div>
              <span className="ml-2 text-blue-400">3,325 ratings</span>
            </div>

            {/*}
            <p className="text-gray-600 font-semibold mb-2">
              This item cannot be shipped to your selected delivery location. Please choose a different delivery location.
            </p>
            */}

            <div className="flex items-center gap-2 mb-4">
              <p className="font-semibold text-black">Color:</p>
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            {/*<div className="flex items-center mb-4">
              <div className="flex space-x-2">
                {product.memoryOptions.map((memory) => (
                  <button
                    key={memory}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedMemory === memory ? "bg-green-500 text-white" : ""
                    }`}
                    onClick={() => setSelectedMemory(memory)}
                  >
                    {memory}
                  </button>
                ))}
              </div>
            </div>*/}
            <div className="flex flex-wrap items-center mb-4">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {product.memoryOptions.map((memory) => (
                  <button
                    key={memory}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedMemory === memory ? "bg-green-500 text-white" : ""
                    }`}
                    onClick={() => setSelectedMemory(memory)}
                  >
                    {memory}
                  </button>
                ))}
              </div>
            </div>


            {/*<p className="text-gray-700 mb-4">{product.description}</p>*/}
            <p className="text-gray-600">{product.intro}</p>
            
            

            <div className="mt-4 border-t pt-4">
              <h2 className="text-xl font-bold mb-2 text-black">Specifications</h2>
              <ul className="text-gray-600">
                <li><strong>Brand:</strong> {product.brand}</li>
                <li><strong>Operating System:</strong> {product.os}</li>
                <li><strong>Screen Size:</strong> {product.screenSize}</li>
                <li><strong>Resolution:</strong> {product.resolution}</li>
                <li><strong>Refresh Rate:</strong> {product.refreshRate}</li>
              </ul>
            </div>
            <div className="mt-4 border-t pt-4">
              <h2 className="text-xl font-bold mb-2 text-black">About This Product</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {product.description.split("\n").map((point, index) => (
                    <li key={index}>{point.trim()}</li>
                  ))}
                </ul>
            </div>
          </div>
          

          {/* Column 3: Cart and Wizard */}
          <div className="flex flex-col">
            <Cart product={product} />
            <div className="mt-6">
              <Wizard
                onOpenForm={() => setShowForm(true)}
                memory={selectedMemory}
                data={selectedData}
                icons={product.icons}
                categories={product.categories}
                conditions= {product.conditions}
              />
            </div>
          </div>
        </div>

        <PopupForm show={showForm} onClose={() => setShowForm(false)} />
      </main>
      <AmazonFooter />
    </div>
  );
};

export default ProductDetails;
