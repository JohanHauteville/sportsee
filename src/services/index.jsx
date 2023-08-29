import { useFetch } from "../utils/hooks";



export const getUserDataInformation = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        if (!response.ok) {
            throw new Error('Erreur de réseau ou de requête');
        }
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }

}

