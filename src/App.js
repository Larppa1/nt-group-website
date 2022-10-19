import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import News from './pages/News/News'
import ShareIssue from './pages/ShareIssue/ShareIssue'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import MemberLogin from './pages/MemberLogin/MemberLogin'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Landing /> }/>
        <Route path='/uutiset' element={ <News /> }/>
        <Route path='/osakeanti' element={ <ShareIssue /> }/>
        <Route path='/tietoja' element={ <About /> }/>
        <Route path='/yhteystiedot' element={ <Contact /> }/>
        <Route path='/memberLogin' element={ <MemberLogin /> }/>
      </Routes>
    </Router>
  )
}
