import React from 'react'
import {watchModels, WatchModulesType} from "../data";

const Watch: React.FC = () => {
    return (
        <div className={`flex flex-col items-center justify-around bg-white h-full p-8`}>
            <h1 className={`2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8`}>
                Which Apple Watch is right for you?
            </h1>
            <div className={`w-full flex justify-around`}>
                {watchModels.map((watchModel: WatchModulesType) => (
                    <div className={`w-60 h-[430px] flex flex-col justify-around group `}>
                        <div key={Math.random()} className={`w-full h-64 overflow-hidden relative`}>
                            <img
                                src={watchModel.imgs[0]}
                                alt={watchModel.name}
                                className={` absolute w-full h-full transition duration-300 opacity-100 group-hover:opacity-0 object-contain`}
                            />
                            <img
                                src={watchModel.imgs[1]}
                                alt={watchModel.name}
                                className={`absolute w-full h-full object-contain transition duration-300 opacity-0 group-hover:opacity-100`}
                            />
                        </div>
                        <h3 className={`2xl:text-xl xl:text:lg text-sm font-semibold`}>
                            {watchModel.name}
                        </h3>
                        <a
                            href={"#"}
                            className={`my-2 text-base text-blue-400`}
                        >
                            {watchModel.price}
                        </a>
                        <div className={`md:text-sm text-xs text-gray-700 my-2`}>
                            {watchModel.desc.map((item: string) => (
                                <span key={Math.random()} className={`block`}>{item}</span>
                            ))}
                        </div>
                        <button
                            className={`w-min hover:bg-blue-900 text-sm mt-4 p-1.5 cursor-pointer bg-blue-400 text-white rounded-full`}>
                            Shop
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Watch
