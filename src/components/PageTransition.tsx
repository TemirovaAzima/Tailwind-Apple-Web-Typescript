import React, {ReactNode, useEffect, useState} from 'react'

interface PageTransitionProps {
    children: ReactNode[]
    activePage: number
}

const PageTransition: React.FC<PageTransitionProps> = ({activePage, children}) => {
    const [currentPage, setCurrentPage] = useState<number>(activePage);
    const [transitioning, setTransitioning] = useState<boolean>(false);

    useEffect(() => {
        if (currentPage !== activePage) {
            setTransitioning(true)
            const timeout = setTimeout(() => {
                setCurrentPage(activePage);
                setTransitioning(false);
            }, 555);
            return () => clearTimeout(timeout);
        }
    }, [activePage, currentPage]);

    return (
        <div className={`w-full h-full overflow-hidden relative`} style={{backgroundImage: "url(images/pages-bg.png)"}}>
            <div className={`absolute w-full h-full transition-transform duration-500 ${
                transitioning ? '-translate-y-full' : 'translate-y-0'
            }`}>
                {children[currentPage]}
            </div>
        </div>
    )
}
export default PageTransition
