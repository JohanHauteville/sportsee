// import { useFetch } from "../utils/hooks";



export const getUserDataInformation = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}`);
        if (!response.ok) {
            throw new Error('Erreur de réseau ou de requête');
        }
        const data = await response.json();

        const userDataInfo = {
            ...data.data,
            todayScore: data.data.todayScore ? data.data.todayScore : data.data.score,
        }

        userDataInfo && delete userDataInfo.score

        // const scoreData = data.data.todayScore ? data.data.todayScore : data.data.score
        // const userDataInfo = {
        //     id: data.data.id,
        //     todayScore: scoreData,
        //     userInfos: {
        //         firstName: data.data.userInfos.firstName,
        //         lastName: data.data.userInfos.lastName,
        //         age: data.data.userInfos.age
        //     },
        //     keyData: {
        //         calorieCount: data.data.keyData.calorieCount,
        //         proteinCount: data.data.keyData.proteinCount,
        //         carbohydrateCount: data.data.keyData.carbohydrateCount,
        //         lipidCount: data.data.keyData.lipidCount
        //     }
        // }
        return { userDataInfo };
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }

}

