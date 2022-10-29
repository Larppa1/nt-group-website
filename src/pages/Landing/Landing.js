import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import NewsContainer from '../../components/NewsContainer/NewsContainer'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, query, getDocs, orderBy } from "firebase/firestore"; 
import { db } from '../../firebase-config'

export default function Landing() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function fetchData() {
            const articlesRef = collection(db, 'articles')
            const q = query((articlesRef),
                            orderBy('date', 'desc'))
            const querySnapshot = await getDocs(q)

            let articles = []
            querySnapshot.forEach((doc) => {
                articles.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setArticles(articles)
        }
        fetchData()
    }, [])

    if(window.innerWidth < 768){
        return(
            <div className="container">
                <header id='landingHeader'>
                    <Navbar page="landing" />
                </header>
                <main id='landingMain'>
                    <section>
                        <article className="prose">
                            <h3>Ajankohtaista</h3>
                        </article>
                    </section>
                    <section>
                        {articles && articles.map((article) => (
                            <NewsContainer
                                key={article.id}
                                content={article.content}
                                date={article.date}
                                title={article.title}
                                type={article.type}
                            />
                        ))}
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div id='landingContainer' className='container'>
                <header id='landingHeader'>
                    <Navbar page="landing" />
                </header>
                <main id='landingMain'>
                    <section>
                        <article className="prose">
                            <h2>Ajankohtaista</h2>
                        </article>
                    </section>
                    <section>
                        {articles && articles.map((article) => (
                            <NewsContainer
                                key={article.id}
                                content={article.content}
                                date={article.date}
                                title={article.title}
                                type={article.type}
                            />
                        ))}
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
                <Link
                    to="/memberLogin">
                    <input
                        id='loginBtn'
                        type="image"
                        src="https://i.ibb.co/3z16wh1/icons8-lock-50.png"
                        alt='Jäsenportaaliin kirjautuminen'>
                    </input>
                </Link>
            </div>
        )
    }
}