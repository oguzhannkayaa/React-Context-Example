import { createContext, useState } from "react"; //veri paketi

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {

    const [value,setValue] = useState("ok");


    console.log("global")

    return (
        <GlobalContext.Provider value={{value:value,setValue:setValue}} >
            {props.children}
        </GlobalContext.Provider>
    )
}