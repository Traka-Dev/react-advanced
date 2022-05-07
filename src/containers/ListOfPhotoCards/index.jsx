import React from 'react'
import { Photocard } from '../../components/PhotoCard'
import { useQuery, gql } from '@apollo/client'

const whitPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(whitPhotos, { variables: { categoryId } })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {data.photos.map(item => <Photocard key={item.id} {...item} />)}
    </ul>
  )
}
