import './style.scss';
import { useEffect } from 'react';
import { useFetch } from '../../utils/hooks';




function Home() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/user/12")

  console.log(data)

  return (

    <p>Home</p>

  );
}

export default Home;
