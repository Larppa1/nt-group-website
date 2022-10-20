import './MemberPage.css'

export default function MemberPage() {
    return(
        <div id='memberPage' className='container'>
            <header>
                <article className="prose">
                    <h1>NT Group</h1>
                </article>
            </header>
            <main>
                <section className='shadow-xl'>
                    <section>
                        <article className='prose'>
                            <h2>Valitse toiminto</h2>
                        </article>
                    </section>
                    <section>
                        <button className="btn btn-lg">Uusi teksti</button>
                        <button className="btn btn-lg">Muokkaa tekstiä</button>
                        <button className="btn btn-lg">Poista teksti</button>
                    </section>
                </section>
            </main>
        </div>
    )
}