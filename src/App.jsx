import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './screens/LoginPage'
import OrderPage from './screens/Order'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/order' element={<OrderPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
