import React from 'react'
import {iphoneModels, IphoneModelsType} from "../data";

const Iphone: React.FC = () => {
    return (
        <div className=" w-full h-full flex flex-col items-center justify-around bg-white p-8">
            <h3 className={`2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8`}>
                Which Iphone is right for you?
            </h3>
            <div className='flex w-full justify-between'>
                {iphoneModels.map((iphone: IphoneModelsType) => (
                    <div key={Math.random()} className={`flex flex-col items-center justify-between gap-y-2`}>
                        <img
                            src={iphone.img}
                            alt={iphone.name}
                            className={`2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain`}
                        />
                        <a href={"#"}
                           className={`2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 mt-2`}>
                            {iphone.name}
                        </a>
                        <p className={`2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2 `}>
                            {iphone.description}
                        </p>
                        <span className={`2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2`}>
                    {iphone.price}
                </span>
                        <button type={'button'}
                                className={`text-sm rounded-full text-white bg-blue-400 px-5 py-2.5 cursor-pointer`}>
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Iphone
