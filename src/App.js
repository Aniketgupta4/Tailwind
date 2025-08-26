import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";

function App(){
    return(
        <>

         <Header></Header>

         <div className="max-w-sm overflow-hidden bg-teal-200 shadow-lg rounded-lg">
            <div className="m-4 p-4">
                <img className="w-full h-48 object-cover rounded-2xl" src="https://i.pinimg.com/736x/d5/21/78/d52178c08c4d103f2908a97a00be0443.jpg"></img>
            </div>
            <div className="">
                <h1>Biography</h1>
            </div>
            <div>
                <p>Archi is so cute</p>
            </div>
            <div>
                <button>Know more</button>
            </div>
         </div>
        
        </>
    ) 
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)