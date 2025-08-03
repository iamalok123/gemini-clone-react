import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ContextProvider from './context/Context'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <Sidebar/>
      <Main/>
    </ContextProvider>
  )
}

export default App
