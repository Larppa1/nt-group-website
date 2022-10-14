import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import News from './pages/News'
import ShareIssue from './pages/ShareIssue'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Landing /> }/>
        <Route path='/uutiset' element={ <News /> }/>
        <Route path='/osakeanti' element={ <ShareIssue /> }/>
        <Route path='/tietoja' element={ <About /> }/>
        <Route path='/yhteystiedot' element={ <Contact /> }/>
      </Routes>
    </Router>
  )
}
