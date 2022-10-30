import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import './ShareIssue.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function ShareIssue() {
    const pageTitle = "Osakeanti"
    const form = useRef()

    const sendDetails = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_hh87ikt', 'template_6c3dosn', form.current, 'n5MdbvlDxAKYVvX49')
            .then(() => {
                document.getElementById('emailInput').value = ''
                document.getElementById('sendConfirmation').style.opacity = 1
            })
            .catch((err) => {
                console.log(err.text)
            })
    }

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='shareIssueMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        <article className='prose'>
                            <h4>Kuule ensimmäisten joukossa osakeannistamme liittymällä sähköpostilistalle!</h4>
                        </article>
                        <form ref={form} onSubmit={sendDetails}>
                            <input
                                id='emailInput'
                                className="input input-bordered w-full max-w-xs"
                                type="email"
                                name="user_email"
                                placeholder="Sähköposti"
                                required="true"
                            />
                            <button className="btn">Liity</button>
                        </form>
                    <article className='prose'>
                        <h4 id='sendConfirmation'>Sähköpostiosoitteesi on vastaanotettu!</h4>
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
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='shareIssueMain'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        <article className='prose'>
                            <h3>Kuule ensimmäisten joukossa osakeannistamme liittymällä sähköpostilistalle!</h3>
                        </article>
                        <form ref={form} onSubmit={sendDetails}>
                            <input
                                id='emailInput'
                                className="input input-bordered w-full max-w-xs"
                                type="email"
                                name="user_email"
                                placeholder="Sähköposti"
                                required="true"
                            />
                            <button className="btn">Liity</button>
                        </form>
                    <article className='prose'>
                        <h4 id='sendConfirmation'>Sähköpostiosoitteesi on vastaanotettu!</h4>
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