import './style.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks';
import { DataProvider } from '../../utils/context';




function Home() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/user/12")
  const { id } = useParams()
  console.log(`Utilisateur : ${id}`)
  console.log(data)


  return (
    <DataProvider id={id}>
      <p>Home</p>
    </DataProvider>

  );
}

export default Home;
