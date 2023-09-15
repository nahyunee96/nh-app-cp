import React, { createContext, useContext } from 'react'

const MyContext = createContext<any>(null) // 초기값을 설정하세요.

export function useMyContext() {
  const context = useContext(MyContext)

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider')
  }

  return context
}

export default MyContext