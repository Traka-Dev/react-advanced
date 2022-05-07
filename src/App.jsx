import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { PhotoCardWhitDetails } from './containers/PhotoCarWithDetails'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.dir(detailId)
  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId
        ? (
          <PhotoCardWhitDetails id={detailId} />
          )
        : (
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
          )}
    </>
  )
}
