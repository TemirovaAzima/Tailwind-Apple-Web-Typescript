import React from 'react'
import {items, ItemsType} from "../data";

interface HomeProps {
    onNavigate: (pageIndex: number) => void;
}

const Home: React.FC<HomeProps> = ({onNavigate}) => {
    return (
        <div className='w-full h-full bg-gray-50 grid grid-cols-2 grid-rows-2 gap-4 '>
            {items.map((item: ItemsType) => (
                <div key={Math.random()} className=' flex flex-col grow items-center justify-center bg-white'
                     onClick={() => onNavigate(item.pageIndex)}>
                <span
                    className='text-xl font-bold bg-gradient-to-b from-blue-700 to-red-500 bg-clip-text text-transparent tracking-wide mb-12'>
                    {item.label}
                </span>
                    <img
                        src={item.img}
                        alt={item.label}
                        className={' max-w-[65%] max-h-[65%] object-contain'}
                        draggable={"false"}
                    />
                </div>
            ))}
        </div>
    )
}
export default Home
