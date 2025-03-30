import React from 'react'
interface ControlsProp {
    frameZoom:boolean;
    toggleZoom:()=>void;
}
const Controls:React.FC<ControlsProp> = ({frameZoom,toggleZoom}) => {
    return (
        <div className='absolute top-3 right-3 space-x-2'>
            <button className='text-2xl text-blue-500 cursor-pointer' onClick={toggleZoom}>
                <i className={`${frameZoom ? 'bx bxs-zoom-out' : 'bx bxs-zoom-in'}`}></i>
            </button>
            <button className='text-2xl text-blue-500 cursor-pointer'>
                <i className='bx bx-x-circle'></i>
            </button>
        </div>
    )
}
export default Controls
