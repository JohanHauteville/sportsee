import './style.scss';
import { useParams } from 'react-router-dom'
import UserHeader from '../../components/UserHeader';
import { useState, useEffect } from 'react';
import { getUserDataInformation } from '../../services';
import InfoCard from '../../components/InfoCard';
import caloriesIcon from '../../assets/icons/calories-icon.svg'




function Home() {

  const { id } = useParams()
  // console.log("juste après le fetch")
  const [userDataInformation, setUserDataInformation] = useState([])


  useEffect(() => {
    async function fetchAllData() {
      try {
        const { userDataInfo } = await getUserDataInformation(id)
        setUserDataInformation(userDataInfo)
        console.log("UseEffect get userData");
        console.log(userDataInfo)
      } catch (error) {
        console.log("Erreur: ", error)
      }
    }
    fetchAllData()
  }, [id])

  return (
    <main className='home-page'>
      {userDataInformation.userInfos &&
        (<UserHeader userData={userDataInformation} />)}

      {userDataInformation.keyData && (
        <section className='section-info-cards'>
          <InfoCard icon={caloriesIcon} title="Calories" value={userDataInformation.keyData.calorieCount} mesureUnit="kCal" />
          <InfoCard icon={caloriesIcon} title="Calories" value={userDataInformation.keyData.calorieCount} mesureUnit="kCal" />
        </section>
      )}


    </main>
  );
}

export default Home;
