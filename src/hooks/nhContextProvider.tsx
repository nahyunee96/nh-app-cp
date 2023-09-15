// MyContextProvider.tsx
import React from 'react'
import MyContext from './nhContext'

const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contextValue = 'Your context value here' // 컨텍스트에 전달할 값

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider