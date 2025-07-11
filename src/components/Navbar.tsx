// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center rounded-b-xl">
      <div className="text-2xl font-bold text-blue-600">ImageSoc AI</div>
      <div className="space-x-6">
        <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Features</a>
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">How It Works</a>
        <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Testimonials</a>
        <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Pricing</a>
        <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">FAQ</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transition-colors duration-200">Sign Up</button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">Sign In</button>
      </div>
    </nav>
  );
}
