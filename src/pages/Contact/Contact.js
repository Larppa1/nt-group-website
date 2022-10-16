import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/universal/Footer/Footer'
import ContactInfo from '../../components/universal/ContactInfo/ContactInfo'
import './Contact.css'

export default function Contact() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='contactMain'>
                    <article className='prose'>
                        <h2>Yhteystiedot</h2>
                    </article>
                    <ContactInfo
                        name="Mikael Jääskö"
                        position="Toimitusjohtaja"
                        email="mikael@ntgrp.fi"
                        phoneNum="+358 40 123 4567"
                    />
                    <ContactInfo
                        name="Jimi Hämäläinen"
                        position="Varatoimitusjohtaja"
                        email="jimi@ntgrp.fi"
                        phoneNum="+358 40 123 4567"
                    />
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