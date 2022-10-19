import './MemberLogin.css'

export default function MemberLogin() {
    return(
        <div className="container">
            <section>
                <article className="prose">
                    <h1>NT Group</h1>
                    <h3>Kirjaudu sisään</h3>
                </article>
            </section>
            <section>
                <form>
                    <input type="text" placeholder="Käyttäjänimi" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Salasana" className="input input-bordered w-full max-w-xs" />
                    <button className='btn'>Kirjaudu</button>
                </form>
            </section>
        </div>
    )
}