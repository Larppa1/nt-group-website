import { useEffect, useState } from 'react'
import Navbar from '../../components//Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import './About.css'

export default function About() {
    const pageTitle = "Tietoja"
    const [faqPosition, setFaqPosition] = useState(0)

    useEffect(() => {
        setFaqPosition(document.getElementById('faqContainer')
                            .getBoundingClientRect().top + 20)
    }, [])

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='aboutMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        <article className='prose'>
                            <h4>Huom! Usein kysytyt kysymykset löydät&nbsp;
                                <span onClick={() => window.scrollTo({
                                    top: faqPosition,
                                    behavior: 'smooth',
                                    })}>FAQ
                                </span>-osiosta.
                            </h4>
                        </article>
                    </section>
                    <section id='faqContainer'>

                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='aboutMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        <article className='prose'>
                            <h3>Huom! Usein kysytyt kysymykset löydät&nbsp;
                                <span onClick={() => window.scrollTo({
                                    top: faqPosition,
                                    behavior: 'smooth',
                                    })}>FAQ
                                </span>-osiosta.
                            </h3>
                        </article>
                    </section>
                    <section id='faqContainer'>

                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}