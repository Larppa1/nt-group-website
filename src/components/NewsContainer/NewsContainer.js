import './NewsContainer.css'

export default function NewsContainer(props) {
    return(
        <article id='newsContainer' className="prose shadow-xl">
            <h6>{props.date}</h6>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </article>
    )
}