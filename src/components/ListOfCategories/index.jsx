import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const url = 'https://petgram-server-traka-2fhrhuzjx-traka-dev.vercel.app/categories'
    window.fetch(url)
    .then(res => res.json())
    .then(response=>{
      setCategories(response)
    })
  }, [])

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
