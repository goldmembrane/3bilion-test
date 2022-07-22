import './Classification.css'
import { useLocation } from 'react-router-dom';

const Classification = () => {

  const { state } = useLocation();

  console.log(state)

  return (
    <>

      <div className = 'title-box'>
        <p className = 'title'>내가 좋아하는 동물</p>
      </div>


      <div className="classification-container">

      <div className="like-animal-container">

        <p className='like-title'>좋아요</p>

        {state.like ? state.like.map((item) => (
          <img src = {item} alt = "" className='image' />
        )): null}
      </div>

      <div className="hate-animal-container">

        <p className='hate-title'>싫어요</p>

        {state.hate ? state.hate.map((item) => (
          <img src = {item} alt = "" className='image' />
        )): null}

      </div>

      </div>
    </>

  
  );
};

export default Classification;
