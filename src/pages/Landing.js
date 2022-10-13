import '../styles.css'
import Navbar from '../components/mobile/Navbar'
import Footer from '../components/universal/Footer/Footer'

export default function Landing() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main>

                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}