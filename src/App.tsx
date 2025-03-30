import React, {useState} from "react";
import Controls from "./components/Controls.tsx";

const App: React.FC = () => {
    const [frameZoom, setFrameZoom] = useState<boolean>(false);

    const toggleZoom = (): void => {
        setFrameZoom(!frameZoom)
    };

    return (
        <div className={"w-full h-screen grid place-items-center"}>
            <div className={` ${frameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'} w-[70vw] h-[85vh] max-w-[90vw] max-h-[90vh]
                 border border-gray-200 resize overflow-auto rounded-2xl relative
              `}>
                <Controls frameZoom={frameZoom} toggleZoom={toggleZoom}/>
            </div>
        </div>
    )
}
export default App;