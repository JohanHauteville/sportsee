// import { useFetch } from "../utils/hooks";
import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from '../mock/data'
const isProduction = process.env.REACT_APP_PROD_ENV === 'true';




export const getUserDataInformation = async (id) => {
    let data;
    try {
        if (isProduction) {
            console.log("En production...")

            const response = await fetch(`http://localhost:3000/user/${id}`);
            if (!response.ok) {
                throw new Error('Erreur de réseau ou de requête');
            }
            data = await response.json();
        } else {
            console.log("En Developpement...")

            data = {
                data:
                    USER_MAIN_DATA.find((element) => element.id === parseInt(id, 10))
            }
        }

        const userDataInfo = {
            ...data.data,
            todayScore: data.data.todayScore ? data.data.todayScore : data.data.score,
        }

        userDataInfo && delete userDataInfo.score
        return { userDataInfo };
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }

}

export const getUserDataActivity = async (id) => {
    let data
    try {
        if (isProduction) {
            const response = await fetch(`http://localhost:3000/user/${id}/activity`);
            if (!response.ok) {
                throw new Error('Erreur de réseau ou de requête');
            }
            data = await response.json();
        } else {
            data = {
                data:
                    USER_ACTIVITY.find((element) => element.userId === parseInt(id, 10))
            }
        }
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
    let data
    try {
        if (isProduction) {
            const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
            if (!response.ok) {
                throw new Error('Erreur de réseau ou de requête');
            }
            data = await response.json();
        } else {
            data = {
                data:
                    USER_AVERAGE_SESSIONS.find((element) => element.userId === parseInt(id, 10))
            }
        }
        const formattedSessions = data.data.sessions.map((session, index) => ({
            ...session,
            day: days[index]
        }))

        const lastSessionIndice = (data.data.sessions.length - 1)
        formattedSessions.unshift({
            day: "",
            sessionLength: data.data.sessions[0].sessionLength
        })
        formattedSessions.push({
            day: "",
            sessionLength: data.data.sessions[lastSessionIndice].sessionLength
        })


        const userDataAverageSessionsFetched = {
            userId: data.data.userId,
            sessions: formattedSessions
        }


        return { userDataAverageSessionsFetched }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}

export const getUserDataPerformance = async (id) => {
    let data
    try {
        if (isProduction) {
            const response = await fetch(`http://localhost:3000/user/${id}/performance`);
            if (!response.ok) {
                throw new Error('Erreur de réseau ou de requête');
            }
            data = await response.json();
        } else {
            data = {
                data:
                    USER_PERFORMANCE.find((element) => element.userId === parseInt(id, 10))
            }
        }
        const formattedSessions = data.data.data.map((dataPerf) => ({
            ...dataPerf,
            kind: data.data.kind[dataPerf.kind]
        }))

        const userDataPerformanceFetched = {
            userId: data.data.userId,
            performances: formattedSessions
        }

        return { userDataPerformanceFetched }
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}

