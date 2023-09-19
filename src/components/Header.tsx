import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { NextPage } from 'next'

interface HeaderProps {
  isHeaderVisible: boolean;
}

const Header: NextPage<HeaderProps> = ({ isHeaderVisible }) => {

  const headerClass = `header w-full fixed h-16 sm:h-32 bg-slate-950 border-b top-0 inset-x-0 border-gray-100 z-50 ${
    isHeaderVisible ? '' : 'hidden' // 헤더가 나타나거나 사라지도록 hidden 클래스를 추가
  }`;

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // 메뉴 항목의 데이터 배열
  const menuItems = [
    { text: 'Main', href: '/' },
    { text: 'sub', href: '/sub' },
    { text: 'Login', href: '/login' },
    { text: 'Contact', href: '/contact' },
  ]


  // 화면 너비에 따라 메뉴 항목의 클래스 결정
  const ulClass = windowWidth <= 640 ? 'flex-wrap' : 'md:flex-nowrap' 
  const liClass = windowWidth <= 640 ? 'md:w-1/2 w-1/2' : 'md:w-1/4 w-1/4' 
  const liTopBorderClass = windowWidth <= 640 ? 'border-t border-gray-100 border-r' : ''

  return (
    <header className={headerClass}>
      <nav className="w-full h-full sm:h-1/2">
        <ul className={`w-full h-full flex ${ulClass}`}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`h-full ${liClass} ${
                windowWidth > 640 && index < menuItems.length - 1
                  ? 'border-r border-gray-100'
                  : ''
              } ${
                windowWidth <= 640 && (index === 1 || index === 3)
                  ? 'border-r-0'
                  : ''
              } ${
                windowWidth <= 640 && (index === 2 || index === 3)
                  ? 'border-b border-gray-100'
                  : ''
              } ${liTopBorderClass}`}
            >
              <Link
                href={item.href}
                className="text-slate-100 w-full h-full flex justify-center items-center text-lg px-3 md:px-5 hover:tracking-widest duration-300"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
   );
 }

export default Header