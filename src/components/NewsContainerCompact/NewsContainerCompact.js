import './NewsContainerCompact.css'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase-config'

export default function NewsContainerCompact(props) {
    const editArticle = async () => {
        console.log('edit')
    }
    
    const deleteArticle = async () => {
        console.log('delete')
    }

    return(
        <div id='newsContainerCompact'>
            <article>
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <h3>{props.type}</h3>
            </article>
            <button className="btn btn-sm" onClick={() => props.action === 'edit' ? editArticle() : deleteArticle()}>{props.action === 'edit' ? 'Muokkaa' : 'Poista'}</button>
        </div>
    )
}