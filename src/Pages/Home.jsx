import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <>
    <Helmet>
      <title>Petgram - Tu app de fotos de mascotas</title>
      <meta name='description' content='En esta app encontraras fotos de mascotas' />
    </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
