import { useEffect } from 'react'
import './ContactForm.css'

export default function ContactForm() {
    useEffect(() => {
        const emailRadio = document.getElementById('emailRadio')
        const emailInput = document.getElementById('emailInput')
        const phoneRadio = document.getElementById('phoneRadio')
        const phoneInput = document.getElementById('phoneInput')

        emailRadio.addEventListener('click', function(event) {
            if(emailRadio.checked) {
                emailInput.required = true
                phoneInput.required = false
            }
        })
        phoneRadio.addEventListener('click', function(event) {
            if(phoneRadio.checked) {
                phoneInput.required = true
                emailInput.required = false
            }
        })
    })
    return (
        <form id='contactForm'>
            <article className='prose'>
                <h4>Ota yhteyttä</h4>
            </article>
            <input type="text" placeholder="Nimi" required="true" className="input input-bordered w-full max-w-xs" />
            <input type="tel" placeholder="Puhelin" id='phoneInput' className="input input-bordered w-full max-w-xs" />
            <input type="email" placeholder="Sähköposti" id='emailInput' className="input input-bordered w-full max-w-xs" />
            <textarea type="text" placeholder="Viesti" required="true" className="input input-bordered w-full max-w-xs" />
            <article className='prose'>
                <h6>Haluan, että minuun ollaan yhteydessä</h6>
            </article>
            <section>
                <p>Sähköposti</p>
                <input type="radio" name="radio-1" id='emailRadio' className="radio" checked />
            </section>
            <section>
                <p>Puhelin</p>
                <input type="radio" name="radio-1" id='phoneRadio' className="radio" />
            </section>
            <button className="btn">Lähetä</button>
        </form>
    )
}