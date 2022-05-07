import React from 'react'
import { Photocard } from '../PhotoCard'
import { useQuery, gql } from "@apollo/client";

const whitPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;


export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(whitPhotos);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map(item => <Photocard key={item.id} {...item} />)}
    </ul>
  )
}
