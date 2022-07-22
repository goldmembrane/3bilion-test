import { useState } from 'react'
import './ImageItem.css'

const ImageItem = (props) => {

    const [likeClick, setLikeClick] = useState(false)
    const [hateClick, setHateClick] = useState(false)

    const likeClicked = () => {
        setLikeClick(!likeClick)
    }

    const hateClicked = () => {
        setHateClick(!hateClick)
    }
    return (
       <div className = 'animal-container'>
            
            <img src={props.item.img_url} className = 'animal-image' alt=''/>
            <div className = 'button-container'>
                <button className = {likeClick === true ? 'like-clicked' : 'button'} onClick={() => {likeClicked(); props.like(props.item.img_url);}}>
                    <p className = {likeClick === true ? 'like-clicked-name' : 'button-name'}>좋아요</p>
                </button>
                <button className = {hateClick === true ? 'hate-clicked' : 'button'} onClick={() => {hateClicked(); props.hate(props.item.img_url);}}>
                    <p className = {hateClick === true ? 'hate-clicked-name' : 'button-name'} >싫어요</p>
                </button>
            </div>
       </div>
    )
}

export default ImageItem;