import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const Photocard = ({ id, likes = 0, src = DEFAULT_IMG }) => { 
  const [show, element] = useNearScreen()   
  const key = `like-${id}`  
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article style={{ padding: '10px' }} ref={element}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMG} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size={32} /> {likes} likes!
            </Button>
        </>}
    </Article>
  )
}
