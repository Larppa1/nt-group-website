import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import PageTitle from '../../components/PageTitle/PageTitle'
import './News.css'
import NewsContainer from '../../components/NewsContainer/NewsContainer'
import { useEffect, useState } from 'react'
import { collection, query, getDocs, orderBy } from "firebase/firestore"; 
import { db } from '../../firebase-config'

export default function News() {
    const pageTitle = "Uutiset"
    const [articles, setArticles] = useState([])

    useEffect(() => {
        async function fetchData() {
            const articlesRef = collection(db, 'articles')
            const q = query((articlesRef), orderBy('date', 'desc'))
            const querySnapshot = await getDocs(q)

            let articles = []
            querySnapshot.forEach((doc) => {
                articles.push({...doc.data(), id: doc.id})
            })
            setArticles(articles)
        }
        fetchData()
    }, [])

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        {articles && articles.map((article) => (
                            <NewsContainer key={article.id} content={article.content} date={article.date} title={article.title} type={article.type} />
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
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='newsMainDesktop'>
                    <PageTitle title={pageTitle} />
                    <div className="divider"></div>
                    <section>
                        {articles && articles.map((article) => (
                            <NewsContainer key={article.id} content={article.content} date={article.date} title={article.title} type={article.type} />
                        ))}
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}