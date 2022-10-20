import { useState } from 'react'
import './ActionContainer.css'

export default function ActionContainer() {
    const [action, setAction] = useState('default')

    switch(action) {
        case 'default':
            return(
                <section className='shadow-xl'>
                    <section>
                        <article className='prose'>
                            <h2>Valitse toiminto</h2>
                        </article>
                    </section>
                    <section>
                        <button className="btn btn-lg" onClick={() => setAction('add')}>Uusi teksti</button>
                        <button className="btn btn-lg" onClick={() => setAction('change')}>Muokkaa tekstiä</button>
                        <button className="btn btn-lg" onClick={() => setAction('remove')}>Poista teksti</button>
                    </section>
                </section>
            );
        case 'add':
            return(
                <section>
                    <p>add</p>
                </section>
            );
        case 'change':
            return(
                <section>
                    <p>change</p>
                </section>
            );
        case 'remove':
            return(
                <section>
                    <p>remove</p>
                </section>
            );
        default: break;
    }
}