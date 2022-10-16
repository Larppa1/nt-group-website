import './ContactInfo.css'

export default function ContactInfo(props) {
    return(
        <section id='contactInfo'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <article className='prose'>
                <h3>{props.name}</h3>
                <h4>{props.position}</h4>
                <h5>Sähköposti: {props.email}</h5>
                <h5>Puhelin: {props.phoneNum}</h5>
            </article>
        </section>
    )
}