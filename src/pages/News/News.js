import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import './News.css'
import NewsContainer from '../../components/NewsContainer/NewsContainer'

export default function News() {
    const pageTitle = "Uutiset"

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                            type="Uutinen"
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                            type="Uutinen"
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                            type="Blogi"
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
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='newsMainDesktop'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                            type="Uutinen"
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                            type="Uutinen"
                        />
                        <NewsContainer
                            date="13/10/2022"
                            title="NT Groupin hallitus on muodostettu!"
                            content="Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta."
                            type="Blogi"
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