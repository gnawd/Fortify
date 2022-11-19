import './App.css'
import HomePage from './pages/HomePage'
import OrganizationsPage from './pages/OrganizationsPage'
import AboutPage from './pages/AboutPage'
import VolunteersPage from './pages/VolunteersPage'
import NotFoundPage from './pages/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/organizations" element={<OrganizationsPage />} />
            <Route path="/volunteers" element={<VolunteersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
