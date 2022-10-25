import { useEffect, useState } from 'react'
import './ActionContainer.css'
import { collection, query, getDocs, orderBy, setDoc, doc, addDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../../firebase-config'
import NewsContainerCompact from '../NewsContainerCompact/NewsContainerCompact';

export default function ActionContainer() {
    const [action, setAction] = useState('default')
    const [articles, setArticles] = useState([])

    const addText = async () => {
        const newDocRef = await addDoc(collection(db, 'articles'), {
            content: document.getElementById('content').value,
            title: document.getElementById('title').value,
            date: new Date().toDateString(),
            type: document.getElementById('newsRadio').checked ? 'Uutinen' : 'Blogi',
        })
        await updateDoc(doc(db, 'articles', newDocRef.id), {
            key: newDocRef.id,
        })
        setAction('default')
    }

    const changeAction = () => {
        setAction('default')
    }

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
                <section id='actionContainerDefault' className='actionContainer shadow-xl'>
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
                <section id='actionContainerAdd' className='actionContainer shadow-xl'>
                    <button id='backBtn' className="btn btn-xs" onClick={() => setAction('default')}>Takaisin</button>
                    <section>
                        <input id='title' type="text" placeholder="Otsikko" autoComplete='off' className="input input-bordered w-full max-w-xs" />
                        <textarea id='content' type="text" placeholder="Teksti" className="input input-bordered w-full max-w-xs" />
                        <section>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Uutinen</span> 
                                    <input id='newsRadio' type="radio" name="radio-6" className="radio" checked="true" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Blogi</span> 
                                    <input id='blogRadio' type="radio" name="radio-6" className="radio" checked="true" />
                                </label>
                            </div>
                        </section>
                        <button className="btn btn-lg" onClick={addText}>Julkaise</button>
                    </section>
                </section>
            );
        case 'edit':
            return(
                <section id='actionContainerEdit' className='actionContainer shadow-xl'>
                    <button id='backBtn' className="btn btn-xs" onClick={() => setAction('default')}>Takaisin</button>
                    <section>
                        {articles && articles.map((article) => (
                                <NewsContainerCompact key={article.key} id={article.key} date={article.date} title={article.title} type={article.type} action="edit" />
                        ))}
                    </section>
                </section>
            );
        case 'remove':
            return(
                <section id='actionContainerRemove' className='actionContainer shadow-xl'>
                    <button id='backBtn' className="btn btn-xs" onClick={() => setAction('default')}>Takaisin</button>
                    {articles && articles.map((article) => (
                            <NewsContainerCompact key={article.key} id={article.key} date={article.date} title={article.title} type={article.type} setAction={changeAction} action="remove" />
                    ))}
                </section>
            );
        default: break;
    }
}