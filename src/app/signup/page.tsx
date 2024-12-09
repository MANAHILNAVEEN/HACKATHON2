
export default function SignUp() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
  <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Sign Up</h2>
    <form>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your name"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="remember"
          className="h-5 w-5 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
        />
        <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
          Remember me?
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        Sign Up
      </button>
    </form>
    <div className="text-center mt-4">
      <a href="#" className="text-sm text-gray-500 hover:text-orange-500">
        Forgot password?
      </a>
    </div>
    <div className="flex items-center my-6">
      <div className="border-t border-gray-300 flex-grow"></div>
      <span className="mx-4 text-sm text-gray-500">OR</span>
      <div className="border-t border-gray-300 flex-grow"></div>
    </div>
    <button
      className="w-full flex items-center justify-center bg-gray-100 py-3 border rounded-md mb-3 hover:bg-gray-200"
    >
      <img
        src="/Google.png"
        alt="Google"
        className="w-5 h-5 mr-3"
      />
      Sign up with Google
    </button>
    <button
      className="w-full flex items-center justify-center bg-gray-100 py-3 border rounded-md hover:bg-gray-200"
    >
      <img
        src="/Apple.png"
        alt="Apple"
        className="w-5 h-5 mr-3"
      />
      Sign up with Apple
    </button>
  </div>
</div>
    );
  }
  