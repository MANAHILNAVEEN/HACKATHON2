
import Image from 'next/image';

export default function Home() {
  const products = [
    { name: 'Fresh Lime', price: 38, originalPrice: 45, image: '/Mask Group.png' },
    { name: 'Chocolate Muffin', price: 28, originalPrice: null, image: '/Mask Group (1).png' },
    { name: 'Burger', price: 21, originalPrice: 45, image: '/Mask Group (2).png', sale: true },
    { name: 'Country Burger', price: 45, image: '/Mask Group (3).png' },
    { name: 'Drink', price: 23, originalPrice: 45, image: '/d.png' },
    { name: 'Pizza', price: 43, image: '/a.png' },
    { name: 'Cheese Butter', price: 10, image: '/b.png' },
    { name: 'Sandwiches', price: 25, image: '/c.png' },
    { name: 'Chicken Chup', price: 12, image: '/d.png', sale: true },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10">
      {/* Main container with black background */}
      <div className="max-w-7xl w-full p-6 bg-black rounded-lg shadow-xl">
        {/* Grid for products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black text-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full object-cover rounded-md"
                />
                {/* Sale Tag */}
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold py-1 px-2 rounded-full">
                    Sale
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-gray-400">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}