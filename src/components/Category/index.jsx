import React from 'react'
import { Image, Link } from './styles'

const DEDAULT_IMG = 'https://i-imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEDAULT_IMG, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
