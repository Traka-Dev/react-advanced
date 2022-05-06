import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const Photocard = ({ id, likes = 0, src }) => {
  return (
    <article style={{ padding: '10px' }}>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={DEFAULT_IMG} />
        </ImgWrapper>
      </a>
      <Button><MdFavoriteBorder size={32} /> {likes} likes!</Button>
    </article>
  )
}
