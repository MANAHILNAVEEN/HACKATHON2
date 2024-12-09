
"use client";

import Image from 'next/image';
import burgerImage from '/public/pasta.png';

export default function MenuComponent() {
  return (
    <> 
      <div className="flex flex-col md:flex-row bg-black text-white py-10 px-6">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-semibold mb-8">Main Course</h1>
          <div className="space-y-6">
            {[
              {
                name: "Optic Big Breakfast Combo Menu",
                price: "$32",
                description: "Toasted French bread topped with romano, cheddar",
                calories: "560 CAL",
              },
              {
                name: "Cashew Chicken With Stir-Fry",
                price: "$43",
                description: "Gorgonzola, ricotta, mozzarella, taleggio",
                calories: "700 CAL",
              },
              {
                name: "Vegetables & Green Salad",
                price: "$14",
                description: "Ground cumin, avocados, peeled and cubed",
                calories: "1000 CAL",
              },
              {
                name: "Spicy Vegan Potato Curry",
                price: "$35",
                description: "Spreadable cream cheese, crumbled blue cheese",
                calories: "560 CAL",
              },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-gray-700">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">{item.description}</p>
                  <p className="text-gray-400">{item.calories}</p>
                </div>
                <span className="text-orange-500 font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <Image
            src={burgerImage}
            alt="Burger"
            className="object-cover rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row bg-black text-white py-10 px-6">
        <div className="w-full md:w-1/3 p-4">
          <img
            src="/bburger.png"
            alt="Starter Dish"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 bg-black text-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-semibold mb-6 text-yellow-400">☕ Starter Menu</h1>
          <ul>
            {[
              {
                name: "Alder Grilled Chinook Salmon",
                description: "Toasted French bread topped with romano, cheddar",
                calories: "560 CAL",
                price: "$32",
              },
              {
                name: "Berries and Creme Tart",
                description: "Gorgonzola, ricotta, mozzarella, taleggio",
                calories: "700 CAL",
                price: "$43",
                highlight: true,
              },
              {
                name: "Tormentoso Bush Pizza Pintoage",
                description: "Ground cumin, avocados, peeled and cubed",
                calories: "1000 CAL",
                price: "$14",
              },
              {
                name: "Spicy Vegan Potato Curry",
                description: "Spreadable cream cheese, crumbled blue cheese",
                calories: "560 CAL",
                price: "$35",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`flex justify-between items-start py-4 border-b border-gray-700 ${item.highlight ? "text-yellow-400" : ""}`}
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-400">{item.description}</p>
                  <p className="text-sm mt-1">{item.calories}</p>
                </div>
                <div className="text-lg font-bold">{item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-black text-white py-10 px-6">
        <div className="w-full md:w-1/2 p-8 bg-black text-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-semibold mb-6">Drinks</h1>
          <div className="space-y-6">
            {[
              { name: "Caffè macchiato", price: "$32", calories: "560 CAL" },
              { name: "Aperol Spritz Capacianno", price: "$43", calories: "700 CAL" },
              { name: "Caffe Latte Campuri", price: "$14", calories: "1000 CAL" },
              { name: "Tormentoso BushTea Pintoage", price: "$35", calories: "560 CAL" },
            ].map((item, index) => (
              <div key={index} className="py-4 border-b border-gray-700">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">{item.calories}</p>
                <p className="text-orange-400 text-xl font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <img
            src="/drink.png"
            alt="Drinks"
            className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Dessert Section */}
      <div className="flex flex-col md:flex-row bg-black text-white py-12 px-6">
        <div className="w-full md:w-1/2">
          <img
            src="/cake.png"
            alt="Dessert"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-12 p-8 bg-black text-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold mb-8">Dessert</h2>
          <div className="space-y-6">
            {[
              { name: "Fig and Lemon Cake", price: "$32", calories: "560 CAL" },
              { name: "Creamy Mascarpone Cake", price: "$43", calories: "700 CAL" },
              { name: "Pastry, Blueberries, Lemon Juice", price: "$14", calories: "1000 CAL" },
              { name: "Pain au Chocolat", price: "$35", calories: "560 CAL" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between py-4 border-b border-gray-700">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-400">{item.calories}</p>
                </div>
                <span className="text-orange-500 text-xl font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

<div className="bg-white text-black py-12 px-6">
  <h2 className="text-center text-gray-400 text-lg mb-4">Partners & Clients</h2>
  <h1 className="text-center text-3xl font-semibold mb-8">We work with the best people</h1>
  <div className="flex justify-center items-center space-x-8">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src="/log1.png" alt="Restaurant Logo" className="h-16 object-contain" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src="/log2.png" alt="Bakery Logo" className="h-16 object-contain" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src="/log3.png" alt="Fork & Spoon Logo" className="h-16 object-contain" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src="/log4.png" alt="Wolf Coffee Logo" className="h-16 object-contain" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src="/log5.png" alt="Bistro Logo" className="h-16 object-contain" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <img src="/log6.png" alt="Bakery Slogan Logo" className="h-16 object-contain" />
    </div>
  </div>
</div>
    </>
  );
}