import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const Photocard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    Promise.resolve(
    typeof window.IntersectionObserver !== 'undefined'
    ? window.IntersectionObserver
    : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(entries => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return (
    <Article style={{ padding: '10px' }} ref={element}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMG} />
            </ImgWrapper>
          </a>
          <Button><MdFavoriteBorder size={32} /> {likes} likes!</Button>
        </>}
    </Article>
  )
}
