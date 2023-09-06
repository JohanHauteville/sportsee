
// MODELING DES DATAS

export function modelingUserDataInformation(data) {


    // Formatage des données
    const userDataInfo = {
        ...data.data,
        keyData: {
            ...data.data.keyData,
            // Formatage du nombre de calories
            calorieCount: data.data.keyData.calorieCount.toLocaleString('en-US')
        },

        todayScore: data.data.todayScore ? data.data.todayScore : data.data.score,
    }

    const uSFormat = new Intl.NumberFormat('en-US')
    console.log(uSFormat.format(data.data.keyData.calorieCount));

    // Suppresion de "score"
    userDataInfo && delete userDataInfo.score

    return userDataInfo
}

export function modelingUserDataActivity(data) {

    // Formatage des données
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

    // Tableau des jours de la semaines
    const days = ["L", "M", "M", "J", "V", "S", "D"]

    // Formatage des jours de la semaine
    const formattedSessions = data.data.sessions.map((session, index) => ({
        ...session,
        day: days[index]
    }))

    // Copie des première et dernière données permettant d'obtenir un graphique fidèle à la maquette
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

    // Tableau de traduction
    const translation = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    }

    // Formatage des types de performances
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