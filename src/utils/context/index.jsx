import { createContext } from "react";
import { useFetch } from "../hooks";

export const DataContext = createContext()

export const DataProvider = ({ children, id }) => {

    const { data, isLoading, error } = useFetch(`http://localhost:3000/user/${id}`)
    // console.log(data);
    const userData = { ...data }
    // console.log(userData)
    // class DataModeling {
    //     user(userData) {
    //         if (userData) {
    //             return {
    //                 firstName: userData.userInfos.firstName,
    //                 lastName: userData.userInfos.lastName,
    //                 age: userData.userInfos.age
    //             }
    //         }
    //         return null
    //     }
    // }

    // const dataModeling = new DataModeling()

    // console.log(isLoading);
    // const userDataModeled = isLoading ? null : dataModeling.user(data)


    // console.log(userDataModeled);

    return (
        <DataContext.Provider value={userData}>
            {children}
        </DataContext.Provider>
    )

}