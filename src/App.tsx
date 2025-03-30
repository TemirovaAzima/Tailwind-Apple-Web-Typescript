import React from "react";

const App:React.FC = () =>{
    return (
        <div className={"w-full h-screen grid place-items-center"}>
           <div className='w-[70vw] min-h-[85vh] h-[85vh] min-w-[70vw] max-w-[90vw] max-h-[90vh]
                 border border-gray-200 resize overflow-auto rounded-2xl
              ' >
           </div>
        </div>
    )
}
export default App;