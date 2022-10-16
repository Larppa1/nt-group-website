import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/universal/Footer/Footer'
import Stats from '../../components/universal/Stats/Stats'
import NewsContainer from '../../components/universal/NewsContainer/NewsContainer'

export default function Landing() {
    if(window.innerWidth < 768){
        return(
            <div className="container">
                <header id='landingHeaderMobile'>
                    <Navbar />
                </header>
                <main id='landingMainMobile'>
                    <Stats />
                    <article className="prose">
                        <h3>Ajankohtaista</h3>
                    </article>
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
                <header id='landingHeaderDesktop'>
                    <Navbar />
                    <article className="prose">
                        <h3>Sijoitustoimintaa vuodesta 2022</h3>
                    </article>
                    <Stats />
                </header>
                <main id='landingMainDesktop'>
                    <article className="prose">
                        <h2>Ajankohtaista</h2>
                    </article>
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