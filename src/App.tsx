import React, {useState} from "react";
import Controls from "./components/Controls.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";

const App: React.FC = () => {
    const [frameZoom, setFrameZoom] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<number>(0);

    const toggleZoom = (): void => {
        setFrameZoom(!frameZoom)
    };

    const handleNavClick = (pageIndex: number): void => {
        setActivePage(pageIndex)
    }
    return (
        <div className={"w-full h-screen grid place-items-center"}>
            <div className={` ${frameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'} w-[70vw] h-[85vh] max-w-[90vw] max-h-[90vh]
                 border border-gray-200 resize overflow-auto rounded-2xl relative flex transition-all duration-300
              `}>
                <Controls frameZoom={frameZoom} toggleZoom={toggleZoom}/>
                <Navbar activePage={activePage} handleNavClick={handleNavClick}/>
                <div className='grow'>
                    <Home/>
                </div>
            </div>
        </div>
    )
}
export default App;