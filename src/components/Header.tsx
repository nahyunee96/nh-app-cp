import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { NextPage } from 'next'



const Header: NextPage = () => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // 클라이언트 측에서만 실행되도록 조건부 처리
        if (typeof window !== 'undefined') {
            // 윈도우 객체에 접근할 수 있는 클라이언트 측에서만 실행되는 코드
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
    ];

 
    // 화면 너비에 따라 메뉴 항목의 클래스 결정
    const ulClass = windowWidth <= 640 ? 'flex-wrap' : 'md:flex-nowrap'; // 640px 이하일 때 flex-wrap
    const liClass = windowWidth <= 640 ? 'md:w-1/2 w-1/2' : 'md:w-1/4 w-1/4'; // 오른쪽 선 유지
    const liTopBorderClass = windowWidth <= 640 ? 'border-t border-gray-100 border-r' : ''; // 640px 이하일 때 윗선 없애기
  
    return (
      <header className="header w-full fixed h-16 md:h-24 bg-slate-950 border-b top-0 inset-x-0 border-gray-100 z-50">
        <nav className="w-full h-full">
          <ul className={`w-full h-full flex ${ulClass}`}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`h-full ${liClass} ${
                  windowWidth > 640 && index < menuItems.length - 1
                    ? 'border-r border-gray-100'
                    : ''
                } ${liTopBorderClass}`}
              >
                <Link
                  href={item.href}
                  className="text-slate-100 w-full h-full flex justify-center items-center text-lg md:text-xl px-3 md:px-5 hover:tracking-widest duration-300"
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