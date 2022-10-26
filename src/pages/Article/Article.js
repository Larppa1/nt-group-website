import './Article.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Article() {
    const location = useLocation()

    useEffect(() => {
        document.getElementById('content').innerHTML = location.state.content
    })

    if(window.innerWidth < 768) {
        return(
            <div className='container'>
                <header>
                    <Navbar />
                </header>
                <main id='articleMain'>
                    <article className='prose'>
                        <section>
                            <h1>{location.state.title}</h1>
                            <div>
                                <div className="badge">{location.state.type}</div>
                            </div>
                        </section>
                        <p id='content'></p>
                        <h6>{location.state.date}</h6>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className='container'>
                <header>
                    <Navbar />
                </header>
                <main id='articleMain'>
                    <article className='prose'>
                        <section>
                            <h1 className='text-5xl'>{location.state.title}</h1>
                            <div>
                                <div className="badge">{location.state.type}</div>
                            </div>
                        </section>
                        <p id='content'></p>
                        <h6>{location.state.date}</h6>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}