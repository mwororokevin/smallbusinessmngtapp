// import { useState } from "react"

// import UserModal from './components/users/UserModal'
import UsersPage from './components/users/Users'

function App() {
  // const [isModalOpen, setModal] = useState(false)

  // const openModal = () => {
  //   setModal(true)
  //   console.log(isModalOpen)
  // }

  return (
    <>
      <UsersPage />
      {/* <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <UserModal />} */}
    </>
  )
}

export default App
