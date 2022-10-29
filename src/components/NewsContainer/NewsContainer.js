import { useNavigate } from 'react-router-dom'
import './NewsContainer.css'

export default function NewsContainer(props) {
    const navigate = useNavigate()

    const openNews = () => {
        navigate('/artikkeli', {state: {title: props.title, type: props.type, date: props.date, content: props.content}})
    }

    if(window.innerWidth < 768) {
        return(
            <article id='newsContainer' className="card w-96 bg-base-100 shadow-xl" onClick={openNews}>
                <div className="card-body">
                    <article className='prose'>
                        <h2 className="card-title">{props.title}</h2>
                        <div className="badge">{props.type}</div>
                        <p>{props.content.slice(0, 80) + '...'}</p>
                    </article>
                    <div className="card-actions justify-end">
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </article>
        )
    }else {
        return(
            <article id='newsContainer' className="card card-compact w-52 bg-base-100 shadow-xl" onClick={openNews}>
                <div className="card-body">
                    <article className='prose'>
                        <h2 className="card-title">{props.title}</h2>
                        <div className="badge">{props.type}</div>
                        <p>{props.content.slice(0, 100) + '...'}</p>
                    </article>
                    <div className="card-actions justify-end">
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </article>
        )
    }
}