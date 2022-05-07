import { useState } from 'react'

export const useLocalStorage = (key, inititalValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : inititalValue
    } catch (error) {
      console.log(error)
      return inititalValue
    }
  })
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.log(e)
    }
  }

  return [value, setLocalStorage]
}
