
export default function Footer() {
    return (
      <footer className="bg-black text-gray-400">
  <div className="container mx-auto px-6 py-12">
    
    <div className="text-center sm:text-left mb-12">
      <h2 className="text-2xl text-white font-semibold mb-3">
        Need Our Support?
      </h2>
      <p className="mb-6 text-sm max-w-lg mx-auto sm:mx-0">
        Don’t wait, make a smart & logical choice. Get in touch today and enjoy seamless service.
      </p>
      <div className="flex justify-center sm:justify-start items-center space-x-4">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-6 py-3 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
        />
        <button className="px-6 py-3 bg-yellow-400 text-black rounded-r-lg font-medium hover:bg-yellow-500 transition duration-200">
          Subscribe Now
        </button>
      </div>
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <div>
        <h3 className="text-white text-xl font-semibold mb-3">About Us</h3>
        <p className="text-sm mb-3">
          Corporate clients and leisure travelers rely on us for safe and dependable chauffeured car services in major cities across the world.
        </p>
        <div className="mt-3">
          <h4 className="text-yellow-400 text-sm font-semibold">Opening Hours:</h4>
          <p className="text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
      </div>

     
      <div>
        <h3 className="text-white text-xl font-semibold mb-3">Useful Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">News</a></li>
          <li><a href="#" className="hover:text-yellow-400">Partners</a></li>
          <li><a href="#" className="hover:text-yellow-400">Team</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contacts</a></li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-white text-xl font-semibold mb-3">Help</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-yellow-400">FAQ</a></li>
          <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-yellow-400">Reporting</a></li>
          <li><a href="#" className="hover:text-yellow-400">Documentation</a></li>
          <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="text-white text-xl font-semibold mb-3">Recent Posts</h3>
        <ul className="space-y-2 text-sm">
          <li><span className="text-yellow-400">28 Feb 2022</span> - Keep Your Business Ahead</li>
          <li><span className="text-yellow-400">26 Feb 2022</span> - Grow Your Brand Effectively</li>
          <li><span className="text-yellow-400">26 Feb 2022</span> - Boost Sales in 2023</li>
        </ul>
      </div>
    </div>

  
    <div className="mt-12 border-t border-gray-700 pt-6 text-center">
      <p className="text-sm text-gray-400">
        Copyright © 2022 by Manahil Naveen. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
    );
  }