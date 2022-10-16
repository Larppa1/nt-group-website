import './PageTitle.css'

export default function PageTitle(props) {
    return(
        <section id='pageTitle'>
            <article className='prose'>
                <h1>{props.title}</h1>
            </article>
        </section>
    )
}