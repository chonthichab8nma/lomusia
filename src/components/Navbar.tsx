import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <nav className="bg-[#821E1F] shadow-md fixed top-0 w-full z-[1000] font-sans">
    
      <div className="max-w-[1100px] mx-auto px-5 flex justify-between items-center h-[70px]">
        
        <a href="/" className="text-2xl font-bold text-blue-600 no-underline">
          MyBrand
        </a>

        <ul className={`
          /* Common Styles */
          flex list-none gap-[30px] transition-all duration-300 ease-in-out
          
          /* Mobile Styles (เมื่อจอเล็กกว่า 768px) */
          max-md:flex-col max-md:absolute max-md:top-[70px] max-md:left-0 max-md:w-full 
          max-md:bg-white max-md:text-center max-md:border-t max-md:border-gray-100 
          max-md:overflow-hidden
          
          /* Logic เปิด-ปิดบนมือถือ */
          ${isOpen ? 'max-md:max-h-[300px] max-md:py-5' : 'max-md:max-h-0 max-md:py-0'}
          
          /* Desktop Styles (เมื่อจอ 768px ขึ้นไป) */
          md:flex md:static md:max-h-full md:py-0
        `}>
          
          <li>
            <a href="#" className="text-write font-medium no-underline hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              หน้าหลัก
            </a>
          </li>
          <li>
            <a href="#" className="text-write font-medium no-underline hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              คุณสมบัติ
            </a>
          </li>
          <li>
            <a href="#" className="text-write font-medium no-underline hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              ราคา
            </a>
          </li>
          <li>
            <a href="#" className="text-write font-medium no-underline hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              ติดต่อเรา
            </a>
          </li>
        </ul>
        <button 
          className="hidden max-md:block bg-transparent border-none text-2xl cursor-pointer text-[#333]" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;