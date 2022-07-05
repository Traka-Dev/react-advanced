import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useLikePhoto } from '../../hooks/useLikePhoto'
import { Link } from '@reach/router'
import propTypes from 'prop-types'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen()
  const [toggleLike] = useLikePhoto()

  const handleFavBtnClick = () => {
    toggleLike({ variables: { input: { id } } })
  }

  return (
    <Article style={{ padding: '10px' }} ref={element}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavBtnClick} />
        </>}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if(propValue === undefined){
      return new Error(`${propName} Value must be defined`)
    }

    if(propValue < 0){
      return new Error(`${propName} Value must be greater than 0`)      
    }
  }
}