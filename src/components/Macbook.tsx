import React, {useState} from 'react'
import {macbookModels, MacbookModelsType} from "../data";

const Macbook: React.FC = () => {
    const [selectedChip, setSelectedChip] = useState<number>(0);
    const [selectedColor, setSelectedColor] = useState<number>(0);

    const currentMb = macbookModels[selectedChip];
    const currentColor = currentMb.colors[selectedColor];

    const handleSelectedChip = (chip: number): void => {
        setSelectedChip(chip);
        setSelectedColor(0);
    }
    return (
        <div className={`flex flex-col items-center justify-around bg-white p-3`}>
            <h1 className={`2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-3`}>
                Choose your new MacBook Air
            </h1>
            <div className={`flex`}>
                {macbookModels.map((macbook: MacbookModelsType, index: number) => (
                    <button
                        key={Math.random()}
                        className={` 2xl:w-36 md:w-26 w-28  2xl:h-18 2xl:hue-rotate-180 md:h-12 h-12 flex flex-col items-center justify-evenly border ${
                            index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'
                        }
                        ${index === selectedChip ? 'border-2 border-blue-400' : 'border-gray-800'}
                        `}
                        onClick={(): void => handleSelectedChip(index)}
                    >
                    <span className={` 2xl:text-2xl xl:text-sm text-xs  test-gray-800 font-bold `}>
                       With {macbook.chip} chip
                    </span>
                        <span className={`2xl:text-base xl:text-sm text-xs  text-gray-600`}>
                         {macbook.price}
                    </span>
                    </button>
                ))}
            </div>
            <div className={`flex flex-col 2xl:p-4 md:items-start items-center`}>
                <div className={`2xl:w-80 xl:w-52 w-48 h-auto 2xl:mb-0 `}>
                    <img
                        src={currentColor.img}
                        alt={`Macbook Air ${currentMb.chip} chip`}
                        className={`2xl:w-72 xl:52 w-48 h-full 2xl:mt-0 sm:mt-1`}
                    />
                </div>
                <span className={`2xl:text-lg xl:text-sm font-medium text-gray-800 text-center md:text-left`}>
                    {currentColor.label}
                </span>
                <div className={`flex space-x-2 mb-3 md:text-left justify-center md:justify-start`}>
                    {currentMb.colors.map((color: { label: string, bg: string, img: string }, index: number) => (
                        <button
                            key={Math.random()}
                            style={{background: color.bg}}
                            className={`2xl:w-6 sm:w-5 w-4 2xl:h-6 sm:h-5 h-4 bg-[${color.bg}] rounded-full border hover:border-blue-500
                        ${selectedColor === index ? 'border-2 border-blue-400' : 'border-transparent'}
                        `}
                            onClick={() => setSelectedColor(index)}
                        >
                        </button>
                    ))}
                </div>
                <img
                    src={currentMb.icon} alt={`Apple ${currentMb.chip}`} className={`w-12 h-12 2xl:mb-2`}
                />
                <div className={`2xl:mb-4 mt-4 xl:text-base text-center md:text-left`}>
                    {currentMb.specs.map((spec: string) => (
                        <p
                            key={Math.random()}
                            className={`2xl:text-lg xl:text-sm font-semibold text-gray-800 mb-0.5`}>
                            {spec}
                        </p>
                    ))}

                </div>
                <button
                    className={`min-w-min text-sm py-1 px-3 bg-blue-400 rounded-full text-white mt-4 md:mt-0`}
                >
                    Buy
                </button>
            </div>

        </div>
    )
}
export default Macbook

