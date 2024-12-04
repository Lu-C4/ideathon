import React, { useState } from 'react';

interface MapButtonProps {
  url?: string;
  text?: string;
}

const MapButton: React.FC<MapButtonProps> = ({
  url = "https://www.google.com/maps",
  text = "Explore Maps"
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button
        className="relative overflow-hidden bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className='text-lg'>{text}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="w-32 h-32 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full shadow-md transform rotate-45"></div>
      </button>
    </a>
  );
};

export default MapButton;

