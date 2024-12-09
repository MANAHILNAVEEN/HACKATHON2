
export default function Checkout() {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-2 gap-8">
          {/* Left Section: Shipping Address Form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
                >
                  <option>Choose country</option>
                </select>
                <select
                  className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
                >
                  <option>Choose city</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Zip code"
                  className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Address 1"
                  className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Address 2"
                className="w-full bg-gray-800 p-3 rounded-md text-sm focus:outline-none"
              />
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-orange-500 rounded border-gray-600 focus:ring-0"
                  />
                  <span className="ml-2 text-sm">Same as shipping address</span>
                </label>
              </div>
              <button
                type="button"
                className="bg-orange-500 w-full py-3 rounded-md font-bold text-sm hover:bg-orange-600"
              >
                Proceed to shipping
              </button>
            </form>
          </div>
  
          {/* Right Section: Order Summary */}
          <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="bg-gray-800 p-6 rounded-md space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between items-center">
                  <img
                    src="/Chiken.png"
                    alt="Chicken Tikka Kabab"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="text-sm">
                    <p className="font-semibold">Chicken Tikka Kabab</p>
                    <p className="text-gray-400">150 gm net</p>
                  </div>
                  <p>$50</p>
                </div>
              ))}
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <p>Sub-total</p>
                  <p>$130</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>25%</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>$54.76</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p>$432.65</p>
                </div>
              </div>
              <button
                type="button"
                className="bg-orange-500 w-full py-3 rounded-md font-bold text-sm hover:bg-orange-600"
              >
                Place an order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }