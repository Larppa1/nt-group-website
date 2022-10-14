import '../styles.css'
import Navbar from '../components/mobile/Navbar/Navbar'
import Footer from '../components/universal/Footer/Footer'
import Stats from '../components/universal/Stats/Stats'
import DesktopNavbar from '../components/desktop/Navbar/DesktopNavbar'

export default function Landing() {
    if(window.innerWidth < 768){
        return(
            <div className="container">
                <header>
                    <Navbar />
                    <article className="prose" style={{position: 'absolute', marginTop: '8vh', marginLeft: '7vw'}}>
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Sijoitustoimintaa vuodesta 2022</h4>
                    </article>
                    <section>
                        <img src="https://cushmanwakefield.fi/wp-content/themes/cushman/api/serve_images.php?ID=336644" alt="Header background" />
                    </section>
                </header>
                <main>
                    <Stats />
                    <article className="prose">
                        <h3 style={{color: 'black', marginTop: '2vh', marginLeft: '4vw'}}>Ajankohtaista</h3>
                    </article>
                    <section style={{marginBlockStart: '2vh', marginBlockEnd: '6vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '90%', minHeight: '30vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>10/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>NT Groupin hallitus on muodostettu!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta.</p>
                        </article>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '90%', minHeight: '30vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>13/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>Uusien nettisivujen suunnittelu alkaa!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>NT Groupin nettisivuja aletaan uudistamaan. Julkistus tapahtuu 31.10.2022 klo 12. Muista tulla tällöin testaamaan uudistetut sivumme!</p>
                        </article>
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
                <header>
                    <DesktopNavbar />
                    <article className="prose" style={{position: 'absolute', marginTop: '8vh', marginLeft: '7vw'}}>
                        <h4 style={{color: 'white', fontStyle: 'italic'}}>Sijoitustoimintaa vuodesta 2022</h4>
                    </article>
                    <section>
                        <img src="https://cushmanwakefield.fi/wp-content/themes/cushman/api/serve_images.php?ID=336644" alt="Header background" />
                    </section>
                </header>
                <main>
                        <article className="prose">
                        <h3 style={{color: 'black', marginTop: '2vh', marginLeft: '4vw'}}>Ajankohtaista</h3>
                    </article>
                    <section style={{marginBlockStart: '2vh', marginBlockEnd: '6vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '90%', minHeight: '30vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>10/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>NT Groupin hallitus on muodostettu!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta.</p>
                        </article>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '90%', minHeight: '30vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>13/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>Uusien nettisivujen suunnittelu alkaa!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>NT Groupin nettisivuja aletaan uudistamaan. Julkistus tapahtuu 31.10.2022 klo 12. Muista tulla tällöin testaamaan uudistetut sivumme!</p>
                        </article>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}