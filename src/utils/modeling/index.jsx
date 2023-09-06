
export function modelingUserDataInformation(data) {
    const userDataInfo = {
        ...data.data,
        todayScore: data.data.todayScore ? data.data.todayScore : data.data.score,
    }

    userDataInfo && delete userDataInfo.score
    return userDataInfo
}

export function modelingUserDataActivity(data) {
    const formattedSessions = data.data.sessions.map((session, index) => ({
        ...session,
        uniqueDay: index + 1
    }))

    const userDataActiv = {
        userId: data.data.userId,
        sessions: formattedSessions
    }

    return userDataActiv
}

export function modelingUserDataAverageSessions(data) {
    const days = ["L", "M", "M", "J", "V", "S", "D"]

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

    return userDataAverageSessionsFetched
}

export function modelingUserDataPerformance(data) {

    const translation = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    }

    const formattedSessions = data.data.data.map((dataPerf) => ({
        ...dataPerf,
        kind: translation[data.data.kind[dataPerf.kind]]
    }))

    const userDataPerformanceFetched = {
        userId: data.data.userId,
        performances: formattedSessions
    }

    return userDataPerformanceFetched
}