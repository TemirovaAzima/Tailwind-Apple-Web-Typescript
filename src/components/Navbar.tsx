import React from 'react'
import {navItems, NavItemsType} from "../data";

interface NavbarProp {
    activePage: number;
    handleNavClick: (pageIndex: number) => void;
    toggleNavbar: () => void;
    isNavbarOpen: boolean;
}

const Navbar: React.FC<NavbarProp> = ({activePage, handleNavClick, toggleNavbar, isNavbarOpen}) => {
    return (
        <>
            <div
                className={`2xl:w-80 xl:w-52 w-44 h-full bg-blue-600 flex flex-col justify-between pl-6 pt-5 pb-14 md:pb-0 absolute transition-transform duration-300 md:relative z-10 ${
                    isNavbarOpen ? 'translate-x-0' : '-translate-x-110 md:translate-x-0'} `}>
                <a href={"#"} className='2xl:text-2xl xl:text-xl text-base text-white font-bold tracking-wider'>
                    Apple Products
                </a>
                <div className='flex flex-col grow'>
                    {navItems.map((item: NavItemsType, index: number) => (
                        <a href={"#"} key={Math.random()}
                           className='xl:w-36 lg:w-34 w-30 text-left cursor-pointer flex items-center justify-between my-3.5'
                           onClick={() => handleNavClick(index)}>
                            <i className={`${item.icon} text-xl text-white`}></i>
                            <span className='text-gray-50 mx-2.5 text-sm tracking-wider mr-auto'>{item.label}</span>
                            <i className={`${activePage === index ? item.activeIcon : item.inactiveIcon} text-lg text-yellow-400`}></i>
                        </a>
                    ))}
                </div>
                <div className={'flex items-center justify-between pr-6 pb-2'}>
                    <a href={"#"}>
                        <i className='bx bxl-instagram text-2xl text-white'></i>
                    </a>
                    <a href={"#"}>
                        <i className='bx bxl-telegram text-2xl text-white'></i>
                    </a>
                    <a href={"#"}>
                        <i className='bx bxl-youtube text-2xl text-white'></i>
                    </a>
                </div>
            </div>
            <button className={`fixed md:hidden top-4 left-4 text-blue-400 text-4xl z-30 p-2`} onClick={toggleNavbar}>
                {
                    isNavbarOpen ?
                        <i className='bx bx-x'></i>
                        :
                        <i className='bx bx-menu'></i>
                }
            </button>
        </>
    )
}
export default Navbar
