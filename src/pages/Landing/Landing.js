import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Stats from '../../components/Stats/Stats'
import NewsContainer from '../../components/NewsContainer/NewsContainer'

export default function Landing() {
    if(window.innerWidth < 768){
        return(
            <div className="container">
                <header id='landingHeader'>
                    <Navbar page="landing" />
                </header>
                <main id='landingMain'>
                    <Stats />
                    <section>
                        <article className="prose">
                            <h3>Ajankohtaista</h3>
                        </article>
                    </section>
                    <section>
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                        />
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className='container'>
                <header id='landingHeader'>
                    <Navbar page="landing" />
                    <article className="prose">
                        <h3>Sijoitustoimintaa vuodesta 2022</h3>
                    </article>
                    <Stats />
                </header>
                <main id='landingMain'>
                    <section>
                        <article className="prose">
                            <h2>Ajankohtaista</h2>
                        </article>
                    </section>
                    <section>
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                        />
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}