import { useEffect, useState } from 'react'
import './ActionContainer.css'
import { collection, query, getDocs, orderBy } from "firebase/firestore"; 
import { db } from '../../firebase-config'
import NewsContainerCompact from '../NewsContainerCompact/NewsContainerCompact';

export default function ActionContainer() {
    const [action, setAction] = useState('default')
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

    switch(action) {
        case 'default':
            return(
                <section className='shadow-xl'>
                    <section>
                        <article className='prose'>
                            <h2>Valitse toiminto</h2>
                        </article>
                    </section>
                    <section>
                        <button className="btn btn-lg" onClick={() => setAction('add')}>Uusi teksti</button>
                        <button className="btn btn-lg" onClick={() => setAction('edit')}>Muokkaa tekstiä</button>
                        <button className="btn btn-lg" onClick={() => setAction('remove')}>Poista teksti</button>
                    </section>
                </section>
            );
        case 'add':
            return(
                <section id='actionContainer' className='shadow-xl'>
                    <button id='backBtn' className="btn btn-xs" onClick={() => setAction('default')}>Takaisin</button>
                    
                </section>
            );
        case 'edit':
            return(
                <section id='actionContainer' className='shadow-xl'>
                    <button id='backBtn' className="btn btn-xs" onClick={() => setAction('default')}>Takaisin</button>
                    {articles && articles.map((article) => (
                            <NewsContainerCompact key={article.key} date={article.date} title={article.title} type={article.type} action="edit" />
                    ))}
                </section>
            );
        case 'remove':
            return(
                <section id='actionContainer' className='shadow-xl'>
                    <button id='backBtn' className="btn btn-xs" onClick={() => setAction('default')}>Takaisin</button>
                    {articles && articles.map((article) => (
                            <NewsContainerCompact key={article.key} date={article.date} title={article.title} type={article.type} action="remove" />
                    ))}
                </section>
            );
        default: break;
    }
}