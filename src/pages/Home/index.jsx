import './style.scss';
import { useNavigate, useParams } from 'react-router-dom'
import UserHeader from '../../components/UserHeader';
import { useState, useEffect } from 'react';
import { getUserDataInformation, getUserDataActivity, getUserDataAverageSessions, getUserDataPerformance } from '../../services';

import InfoCard from '../../components/InfoCard';
import SimpleBarChart from '../../components/SimpleBarChart';
import SimpleLineChart from '../../components/SimpleLineChart'
import SimpleRadarChart from '../../components/SimpleRadarChart';
import SimplePieChart from '../../components/SimplePieChart';

import caloriesIcon from '../../assets/icons/calories-icon.svg'
import proteinesIcon from '../../assets/icons/proteines-icon.svg'
import glucidesIcon from '../../assets/icons/glucides-icon.svg'
import lipidesIcon from '../../assets/icons/lipides-icon.svg'




function Home() {

  const { id } = useParams()
  const [userDataInformation, setUserDataInformation] = useState({})
  const [userDataActivity, setUserDataActivity] = useState({})
  const [userDataAverageSessions, setUserDataAverageSessions] = useState({})
  const [userDataPerformance, setUserDataPerfomance] = useState({})
  const navigate = useNavigate()




  useEffect(() => {
    async function fetchAllData() {
      try {
        const { userDataInfo } = await getUserDataInformation(id)
        setUserDataInformation(userDataInfo)

        const { userDataActiv } = await getUserDataActivity(id)
        setUserDataActivity(userDataActiv)

        const { userDataAverageSessionsFetched } = await getUserDataAverageSessions(id)
        setUserDataAverageSessions(userDataAverageSessionsFetched)

        const { userDataPerformanceFetched } = await getUserDataPerformance(id)
        setUserDataPerfomance(userDataPerformanceFetched)

      } catch (error) {
        console.log("Utilisateur introuvable ", error)
        navigate("/error")

      }
    }
    fetchAllData()
  }, [id, navigate])

  return (
    <main className='home-page'>
      {userDataInformation.userInfos &&
        userDataActivity.userId &&
        userDataAverageSessions.sessions &&
        userDataPerformance.performances &&
        userDataInformation.keyData &&
        (
          <>
            <UserHeader userData={userDataInformation} />
            <section className="section-principal">
              <section className='section-graph'>
                <SimpleBarChart data={userDataActivity.sessions} />

                <div className='section-horizontal-graphs'>
                  <SimpleLineChart data={userDataAverageSessions.sessions} />
                  <SimpleRadarChart data={userDataPerformance.performances} />
                  <SimplePieChart data={userDataInformation} />
                </div>

              </section>
              <aside className='section-info-cards'>
                <InfoCard icon={caloriesIcon} title="Calories" value={userDataInformation.keyData.calorieCount} mesureUnit="kCal" />
                <InfoCard icon={proteinesIcon} title="Proteines" value={userDataInformation.keyData.proteinCount} mesureUnit="g" />
                <InfoCard icon={glucidesIcon} title="Glucides" value={userDataInformation.keyData.carbohydrateCount} mesureUnit="g" />
                <InfoCard icon={lipidesIcon} title="Lipides" value={userDataInformation.keyData.lipidCount} mesureUnit="g" />
              </aside>
            </section>
          </>)}
    </main>
  );
}

export default Home;
