import Link from 'next/link';
import Image from 'next/image';


    const Navbar = () => {
      return (
        <nav className="bg-black text-white px-6 py-4 shadow-lg">
       
        <div className="flex justify-center items-center w-full">
          <div className="text-3xl font-bold flex items-center space-x-2">
            <span className="text-orange-400">Food</span>
            <span className="text-white">Tuck</span>
          </div>
        </div>
      
        
        <div className="hidden md:flex space-x-8 justify-center mt-4">
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">Home</a>
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">Menu</a>
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">Blog</a>
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">Pages</a>
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">About</a>
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">Shop</a>
          <a href="#" className="text-lg hover:text-orange-400 transition duration-300">Contact</a>
        </div>
      
        
        <div className="flex justify-center items-center mt-4">
          <div className="flex items-center bg-black rounded-lg px-4 py-2 space-x-2 border-2 border-orange-400">
            <input
              type="text"
              placeholder="Search..."
              className="bg-black text-white border-none outline-none placeholder-gray-400 text-sm w-64"
            />
            <Link href="/shopdetails">
              <Image src="/MagnifyingGlass.png" alt="Search" width={24} height={24} className="cursor-pointer hover:opacity-80 transition duration-300" />
            </Link>
          </div>
      
          
          <div className="flex space-x-4 ml-6">
            <Link href="/ourshop">
              <Image src="/Tote.png" alt="Cart" width={24} height={24} className="cursor-pointer hover:opacity-80 transition duration-300" />
            </Link>
            <Link href="/signup">
              <Image src="/User (1).png" alt="User" width={24} height={24} className="cursor-pointer hover:opacity-80 transition duration-300" />
            </Link>
          </div>
        </div>
      
       
        <div className="md:hidden bg-black text-white p-4 mt-2 space-y-4 rounded-lg shadow-lg">
          <a href="#" className="text-lg hover:text-orange-400">Home</a>
          <a href="#" className="text-lg hover:text-orange-400">Menu</a>
          <a href="#" className="text-lg hover:text-orange-400">Blog</a>
          <a href="#" className="text-lg hover:text-orange-400">Pages</a>
          <a href="#" className="text-lg hover:text-orange-400">About</a>
          <a href="#" className="text-lg hover:text-orange-400">Shop</a>
          <a href="#" className="text-lg hover:text-orange-400">Contact</a>
        </div>
      </nav>
  );
};

export default Navbar;