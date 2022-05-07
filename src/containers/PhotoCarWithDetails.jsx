import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery, gql } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWhitDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, { variables: { id } })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
