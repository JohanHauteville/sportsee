import './style.scss';
import { useParams } from 'react-router-dom'
import UserHeader from '../../components/UserHeader';
import { useState, useEffect } from 'react';
import { getUserDataInformation } from '../../services';





function Home() {

  const { id } = useParams()
  // console.log("juste après le fetch")
  const [userDataInformation, setUserDataInformation] = useState([])


  useEffect(() => {
    async function fetchAllData() {
      try {
        const userData = await getUserDataInformation(id)
        setUserDataInformation(userData)
        // console.log("userData: ");
        // console.log(userData)
      } catch (error) {
        console.log("Erreur: ", error)
      }
    }
    fetchAllData()
  }, [id])

  return (
    <main className='home-page'>
      {userDataInformation && userDataInformation.data &&
        (<UserHeader userData={userDataInformation} userFirstName={userDataInformation.data.userInfos.firstName} />)}
    </main>
  );
}

export default Home;
