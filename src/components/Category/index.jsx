import React from 'react'
import { Image, Anchor } from './styles'

const DEDAULT_IMG = 'https://i-imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEDAULT_IMG, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
