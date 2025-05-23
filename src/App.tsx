import React, {useEffect, useState} from "react";
import Controls from "./components/Controls.tsx";
import Navbar from "./components/Navbar.tsx";
import Watch from "./components/Watch.tsx";
import Iphone from "./components/Iphone.tsx";
import Home from "./components/Home.tsx";
import Macbook from "./components/Macbook.tsx"
import IMac from './components/IMac.tsx'
import PageTransition from "./components/PageTransition.tsx";

const App: React.FC = () => {
    const [frameZoom, setFrameZoom] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<number>(0);
    const [isLgScreen, setIsLgScreen] = useState<boolean>(window.innerWidth > 1024);
    const [isNavbarOpen,setIsNavbarOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = ():void=> {
            setIsLgScreen(window.innerWidth >= 1024);
            if (window.innerWidth < 1024) {
                setFrameZoom(true)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const toggleZoom = (): void => {
        if (isLgScreen) {
            setFrameZoom(!frameZoom)
        }
    };

    const resetPage = (): void => {
        setActivePage(0)
    }
    const handleNavClick = (pageIndex: number): void => {
        setActivePage(pageIndex)
    }
    const toggleNavbar = (): void => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    return (
        <div className={"w-full h-screen grid place-items-center"}>
            <div className={` ${frameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'} w-[70vw] h-[85vh] max-w-[90vw] max-h-[90vh]
                 border border-gray-200 resize overflow-auto rounded-2xl relative flex transition-all duration-300
              `}>
                <Controls frameZoom={frameZoom} toggleZoom={toggleZoom} resetPage={resetPage} activePage={activePage}/>
                <Navbar activePage={activePage} handleNavClick={handleNavClick} toggleNavbar={toggleNavbar} isNavbarOpen={isNavbarOpen}/>
                <div className='grow'>
                    <PageTransition activePage={activePage}>
                        <Home onNavigate={handleNavClick}/>
                        <Iphone/>
                        <Macbook/>
                        <Watch/>
                        <IMac/>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}
export default App;