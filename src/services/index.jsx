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

export const getUserDataActivity = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/activity`);
        if (!response.ok) {
            throw new Error('Erreur de réseau ou de requête');
        }
        const data = await response.json();

        const formattedSessions = data.data.sessions.map((session, index) => ({
            ...session,
            uniqueDay: index + 1
        }))

        const userDataActiv = {
            userId: data.data.userId,
            sessions: formattedSessions
        }

        return { userDataActiv }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}

const days = ["L", "M", "M", "J", "V", "S", "D"]

export const getUserDataAverageSessions = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
        if (!response.ok) {
            throw new Error('Erreur de réseau ou de requête');
        }
        const data = await response.json();
        console.log(data);
        const formattedSessions = data.data.sessions.map((session, index) => ({
            ...session,
            day: days[index]
        }))

        const userDataAverageSessionsFetched = {
            userId: data.data.userId,
            sessions: formattedSessions
        }
        console.log(userDataAverageSessionsFetched);

        return { userDataAverageSessionsFetched }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}



