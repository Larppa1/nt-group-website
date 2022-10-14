import Navbar from '../components/mobile/Navbar/Navbar'
import DesktopNavbar from '../components/desktop/Navbar/DesktopNavbar'
import Footer from '../components/universal/Footer/Footer'

export default function About() {
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
    }else {
        return(
            <div className="container">
                <header>
                    <DesktopNavbar />
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