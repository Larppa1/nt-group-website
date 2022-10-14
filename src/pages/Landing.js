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
                    <section>
                        <img src="https://i.ibb.co/PxLFLFw/wallpapersden-com-helsinki-finland-capital-3840x2160.jpg" alt="Header background" />
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
                    <article className="prose" style={{position: 'absolute', marginTop: '12vh', marginLeft: '1.5vw', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '1em', paddingInline: '0.5vw'}}>
                        <h3 style={{color: 'white', fontStyle: 'italic', fontWeight: '700'}}>Sijoitustoimintaa vuodesta 2022</h3>
                    </article>
                    <Stats />
                    <section>
                        <img src="https://i.ibb.co/PxLFLFw/wallpapersden-com-helsinki-finland-capital-3840x2160.jpg" alt="Header background" />
                    </section>
                </header>
                <main style={{paddingInline: '2vw'}}>
                    <article className="prose">
                        <h2 style={{color: 'black', marginTop: '3vh', fontWeight: '600'}}>Ajankohtaista</h2>
                    </article>
                    <section style={{marginBlockStart: '6vh', marginBlockEnd: '6vh', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '50vw', minHeight: '20vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>13/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>NT Groupin hallitus on muodostettu!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>Vihdoin NT Groupin hallitukseen kuuluvat henkilöt ovat selvillä - löydät tarkemmat tiedot Tietoja-osiosta.</p>
                        </article>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '50vw', minHeight: '20vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>10/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>Uusien nettisivujen suunnittelu alkaa!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>NT Groupin nettisivuja aletaan uudistamaan. Julkistus tapahtuu 31.10.2022 klo 12. Muista tulla tällöin testaamaan uudistetut sivumme!</p>
                        </article>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '50vw', minHeight: '20vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>08/10/2022</h6>
                            <h4 style={{marginTop: '0vh'}}>Uusien nettisivujen suunnittelu alkaa!</h4>
                            <p style={{color: 'black', fontSize: '0.9em'}}>NT Groupin nettisivuja aletaan uudistamaan. Julkistus tapahtuu 31.10.2022 klo 12. Muista tulla tällöin testaamaan uudistetut sivumme!</p>
                        </article>
                        <article className="prose shadow-xl" style={{borderRadius: '1em', width: '50vw', minHeight: '20vh', marginBlockEnd: '5vh', padding: '1em'}}>
                            <h6 style={{fontSize: '0.8em'}}>05/10/2022</h6>
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