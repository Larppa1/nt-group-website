import './NewsContainerCompact.css'
import { db } from '../../firebase-config'
import { doc, deleteDoc } from "firebase/firestore";

export default function NewsContainerCompact(props) {
    const editArticle = async () => {
        console.log('edit')
    }
    
    const deleteArticle = async (id) => {
        await deleteDoc(doc(db, 'articles', id))
        props.setAction()
    }

    return(
        <div id='newsContainerCompact'>
            <article>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <h3>{props.type}</h3>
            </article>
            <button className="btn btn-sm" onClick={() => props.action === 'edit' ? editArticle() : deleteArticle(props.id)}>{props.action === 'edit' ? 'Muokkaa' : 'Poista'}</button>
        </div>
    )
}