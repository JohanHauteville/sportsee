import { createContext } from "react";
import { useFetch } from "../hooks";

const DataContext = createContext()

export const DataProvider = ({ children, id }) => {

    console.log(`retour de l'id: ${id}`)

    return (
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )

}