import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './Main.css'
import ImageItem from './ImageItem';
import Loading from './Loading';

const Main = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  const [like, setLike] = useState([])
  const [hate, setHate] = useState([])

  const fetchData = async() => {
      await axios({
        method: 'GET',
        url: 'https://script.googleusercontent.com/macros/echo?user_content_key=toZILMFl79PEZ3ljxT3EBMHMvRwnzccs0FEf7cP1B4sq2zc5K8lZbQ3OncpDH7Afx9rUgK75CkdlqbBIAqg4HhxSAagErkucm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMnlFFJdsZ45o9OHBZtd23PRzGqnMMtwVXxZatTcZ_ElWWQARivlerawy0qOn_ogddlOaIY5A3XJYuWNj0SVUwM&lib=MQ5y52npMqnCycenuTos7mqgLslxuhQuA'
      })
      .then((res) => {
        console.log(res)
        setData(res)
        setLoading(false)
      })
  }

  const inputLike = (item) => {

    if ( !like.includes(item) ) {
      setLike(like.concat(item))
    }else {
      setLike(like.filter((element) => element !== item))
    }

    console.log("current list: " , like)
  }

  const inputHate = (item) => {

    if ( !hate.includes(item) ) {
      setHate(hate.concat(item))
    }else {
      setHate(hate.filter((element) => element !== item))
    }

    console.log(hate)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className = 'title-box'>
        <p className = 'title'>내가 좋아하는 동물</p>
      </div>

      <div className = 'container'>

        <div className = 'animal-image-container'>
          {loading ? (<Loading />) :
          data.data.map((item) => (
            <ImageItem item = {item} like = {inputLike} hate = {inputHate}/>
          ))}
        </div>

        <div className = 'divide-like-animal-container'>
          <div className = 'animal-collection'>
              {loading ? (<Loading />) : 
              data.data.map((item) => (
                <p className={ like.includes(item.img_url) 
                  ? 'like-animal-label' 
                  : hate.includes(item.img_url) 
                  ? 'hate-animal-label'
                  : 'animal-label'}>{item.name}</p>
              ))}
          </div>
          <Link className = "divide-animals-button-label" to={{ pathname : '/classification', state: {like: like, hate: hate}}}>
          <div className = 'divide-favorite-animals-button'>
            좋아하는 동물들 나누기
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
