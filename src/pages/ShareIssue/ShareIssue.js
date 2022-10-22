import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import './ShareIssue.css'

export default function ShareIssue() {
    const pageTitle = "Osakeanti"

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
                        <form>
                            <input
                                id='emailInput'
                                className="input input-bordered w-full max-w-xs"
                                type="email"
                                placeholder="Sähköposti"
                                required="true"
                            />
                            <button className="btn">Liity</button>
                        </form>
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
                        <form>
                            <input
                                id='emailInput'
                                className="input input-bordered w-full max-w-xs"
                                type="email"
                                placeholder="Sähköposti"
                                required="true"
                            />
                            <button className="btn">Liity</button>
                        </form>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}