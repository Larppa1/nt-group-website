import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/universal/Footer/Footer'

export default function News() {
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