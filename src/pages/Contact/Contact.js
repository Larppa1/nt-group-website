import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import ContactForm from '../../components/ContactForm/ContactForm'
import PageTitle from '../../components/PageTitle/PageTitle'
import './Contact.css'

export default function Contact() {
    const pageTitle = "Yhteystiedot"

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='contactMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
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
                    </section>
                    <ContactForm />
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
                <main id='contactMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
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
                    </section>
                    <ContactForm />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}