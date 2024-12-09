
import Image from 'next/image';

export default function Product() {
    const products = [
        {
          name: 'Fresh Lime',
          price: '$38.00',
          salePrice: '$45.00',
          image: '/Mask Group (4).png',
        },
        {
          name: 'Chocolate Muffin',
          price: '$28.00',
          image: '/Mask group (5).png', 
        },
        {
          name: 'Burger',
          price: '$21.00',
          image: '/Mask Group (6).png', 
                },
        {
          name: 'Fresh Lime',
          price: '$38.00',
          salePrice: '$45.00',
          image: '/Mask Group (7).png', 
        },
      ];
  return (
    <>
<div className="bg-black text-white">
  <div className="container mx-auto px-4 py-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      <div className="relative">
        <Image
          src="/Image contant.png" 
          alt="Product Image"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
       
        <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 text-sm text-white rounded-bl-lg">
          <p>In Stock</p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Yummy Chicken Chup</h1>
        <p className="text-lg mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
          vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
          mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex items-center mb-6">
          <span className="text-3xl font-bold text-yellow-400">$54.00</span>
          <div className="ml-6 flex items-center text-sm text-yellow-500">
            <span>★★★★★</span>
            <span className="ml-2">5.0 Rating | 22 Reviews</span>
          </div>
        </div>
        <div className="flex items-center mb-6 space-x-4">
          <input 
            type="number" 
            min="1" 
            value="1" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-16 text-center focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
        <div className="flex items-center mb-6 space-x-4">
          <button className="text-gray-400 hover:text-gray-300 text-lg font-medium">
            Add to Wishlist
          </button>
          <button className="text-gray-400 hover:text-gray-300 text-lg font-medium">
            Compare
          </button>
        </div>
        <p className="text-gray-400">Category: Pizza</p>
        <p className="text-gray-400">Tag: Our Shop</p>
        <div className="flex mt-6 space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 text-lg">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <section className="bg-black text-white py-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Similar Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition duration-300"
            />
            {product.salePrice && (
              <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-lg">
                Sale
              </div>
            )}
            <div className="p-4 bg-black bg-opacity-75 rounded-b-lg">
              <h3 className="text-lg font-semibold text-white">{product.name}</h3>
              <div className="flex items-center text-white">
                <span className="text-xl font-bold">${product.price}</span>
                {product.salePrice && (
                  <span className="text-sm line-through ml-2 text-gray-400">${product.salePrice}</span>
                )}
              </div>
            </div>
            <div className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 rounded-tr-lg">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
    </>
  );
}

