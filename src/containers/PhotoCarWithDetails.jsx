import React from 'react'
import { Photocard } from '../components/PhotoCard'
import { useQuery, gql } from '@apollo/client'

const query = gql`
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
  const { loading, error, data } = useQuery(query, { variables: { id } })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <Photocard {...data.photo} />
  )
}
