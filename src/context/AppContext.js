import React, { useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [closeModal, setCloseModal] = useState(true)

  const toggleModal = () => {
    setCloseModal(!closeModal)
  }
  return (
    <AppContext.Provider
      value={{
        closeModal,
        setCloseModal,
        toggleModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext

export { AppProvider }
