import React from 'react'
import { Photocard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map(item => <Photocard key={item} />)}
    </ul>
  )
}
