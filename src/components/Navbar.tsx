"use client";

export default function Navbar() {
  return (
    <nav className="bg-purple-900 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/brce.webp"
              alt="Logo"
              className="w-24 sm:w-32 lg:w-40 mr-2 object-contain"
            />
          </div>
          
        </div>
      </div>
      
    </nav>
  );
}