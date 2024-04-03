import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
    </Routes>
  )
}
