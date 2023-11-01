import React from 'react';
import Image from "next/image";
import svgImage from '../../../public/rain.svg';

const Header = () => {
    return (
      <nav className="bg-slate-900 border-slate-900 p-4">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <Image src={svgImage} priority={true} alt="Rainmaker Logo" width={250} />
          </a>
        </div>
      </nav>
    );
  };
  
  export default Header;
  