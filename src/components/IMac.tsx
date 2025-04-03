import React, {useState} from 'react'
import {imacModels, ImacModelsType} from "../data";

const IMac: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>('green');
    const [visibleLabel, setVisibleLabel] = useState<string>('Green');

    const getCurrentModel = (): ImacModelsType | undefined => imacModels.find((model) => model.label.toLowerCase() === selectedColor);

    // Handle the case where no model is found
    if (!getCurrentModel) return <div className={`text-red-500 text-center`}>Model not found</div>

    return (
        <div className={`h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative `}>
            <div
                className={`h-full row-span-2 col-span-1 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50`}>
                <img
                    src={getCurrentModel()?.images.side}
                    alt={"IMac"}
                    className={`2xl:max-w-full xl:max-w-36 max-w-24`}
                />
            </div>
            <div className={`bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4 `}>
                <img
                    src={getCurrentModel()?.images.front}
                    alt={"IMac"}
                    className={`2xl:max-w-full xl:max-w-52 max-w-48`}
                />
            </div>
            <div className={`col-span-1 row-span-2 flex items-center justify-center p-4 bg-gray-50  `}>
                <img
                    src={getCurrentModel()?.images.back}
                    alt={`IMac`}
                    className={`2xl:max-w-full xl:max-w-36 max-w-24`}
                />
            </div>
            <div
                className={`absolute md:top-1/2 top-3/4 md:left-4 left-12 transform -translate-y-1/2 flex flex-col lg:space-y-2 space-y-1 bg-gray-50`}>
                {imacModels.map((model: ImacModelsType) => (
                    <div key={Math.random()} className={`flex items-center space-x-2`}>
                        <button
                            style={{backgroundColor: model.bg}}
                            className={`2x:w-8 2xl:h-8 md:w-5 md:h-5 w-4 h-4 rounded-full flex items-center justify-center ${
                                selectedColor === model.label.toLowerCase() ? 'border-2 border-blue-500' : ''
                            }`}
                            onClick={() => {
                                setSelectedColor(model.label.toLowerCase());
                                setVisibleLabel(model.label)
                            }}
                        />
                        {visibleLabel === model.label && <span className={`text-sm`}>{model.label}</span>}
                    </div>
                ))}

                <button type={"button"}
                        className={`text-sm w-min mt-4 bg-blue-400 hover:bg-blue-900 text-white py-1 px-2 cursor-pointer rounded-full`}>
                    Shop
                </button>
            </div>
        </div>
    )
}
export default IMac
