import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {Navbar} from './components/navbar'

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/auth" element={<h1>Auth</h1>} />
          <Route path="/rated" element={<h1>Rated Page</h1>} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
