import Navbar from '../../components//Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import './About.css'

export default function About() {
    const pageTitle = "Tietoja"

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='aboutMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <article className='prose'>
                        <h4>HUOM! Usein kysytyt kysymykset löydät <span>FAQ</span>-osiosta.</h4>
                    </article>
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
                <main>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}