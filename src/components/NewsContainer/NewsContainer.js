import './NewsContainer.css'

export default function NewsContainer(props) {
    if(window.innerWidth < 768) {
        return(
            <article id='newsContainer' className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <article className='prose'>
                        <h2 className="card-title">{props.title}</h2>
                        <div className="badge">{props.type}</div>
                        <p>{props.content}</p>
                    </article>
                    <div className="card-actions justify-end">
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </article>
        )
    }else {
        return(
            <article id='newsContainer' className="card card-compact w-52 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://placeimg.com/400/225/arch"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <article className='prose'>
                        <h2 className="card-title">{props.title}</h2>
                        <p>{props.content}</p>
                    </article>
                    <div className="card-actions justify-end">
                        <h6>{props.date}</h6>
                    </div>
                </div>
            </article>
        )
    }
}