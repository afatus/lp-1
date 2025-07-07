import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div>
            <img 
              src="https://www.yenibiris.com/Assets/img/svg/yenibiris_logo.svg?v=1" 
              alt="Yenibiriş Logo" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;