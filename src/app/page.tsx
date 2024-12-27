import Link from "next/link";
import Image from "next/image";
import AmazonNav from "@/components/AmazonNav";
import AmazonFooter from "@/components/AmazonFooter";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15 Plus",
      price: "€999.00",
      delivery: "Fri, Dec 27",
      image: "/img/iPhone-15-Plus-(4)-7443.jpg",
    },
    {
      id: 2,
      title: "Apple iPhone 14 Blue (Renewed Premium)",
      price: "€575.70",
      delivery: "Fri, Dec 27",
      image: "/img/iPhone-14-Blue-7810.jpg",
    },
    {
      id: 3,
      title: "Apple iPhone 13 Green",
      price: "€499.00",
      delivery: "Wed, Jan 1",
      image: "/img/iPhone-13-Green-1718.jpg",
    },
    {
      id: 4,
      title: "Apple Watch Series 8 (GPS, 45mm)(Renewed Premium)",
      price: "€199.72",
      delivery: "Fri, Dec 27",
      image: "/img/apple_watch_se_gps_midnight_aluminum_midnight_sport_band_pdp_image_2023_position-1__en-me.jpg",
    },
    {
      id: 5,
      title: "iPad 12.9-inch iPad Pro Wi-Fi+Cellular 128GB",
      price: "€1039.00",
      delivery: "Fri, Dec 27",
      image: "/img/2469-11447.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <AmazonNav />
      <main className="flex-grow p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-black">Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                <div className="w-full h-40 relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h2 className="text-sm font-medium h-12 overflow-hidden text-black font-bold">
                  {product.title}
                </h2>
                <p className="text-lg font-bold text-gray-800">{product.price}</p>
                <p className="text-sm text-gray-500">{product.delivery}</p>
                <button className="mt-2 bg-yellow-500 text-black font-medium px-4 py-1 rounded hover:bg-yellow-600">
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <AmazonFooter />
    </div>
  );
}
