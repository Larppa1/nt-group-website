import { useEffect } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function ContactForm() {
    const form = useRef()

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

    const sendDetails = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_hh87ikt', 'template_6c3dosn', form.current, 'n5MdbvlDxAKYVvX49')
            .then((result) => {
                console.log(result.text)
            })
            .catch((err) => {
                console.log(err.text)
            })
    }

    return (
        <form id='contactForm' ref={form}>
            <article className='prose'>
                <h4>Ota yhteyttä</h4>
            </article>
            <input type="text" name="name" placeholder="Nimi" required="true" className="input input-bordered w-full max-w-xs" />
            <input type="tel" name="phoneNum" placeholder="Puhelin" id='phoneInput' className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="Sähköposti" id='emailInput' className="input input-bordered w-full max-w-xs" />
            <textarea type="text" name="message" placeholder="Viesti" required="true" className="input input-bordered w-full max-w-xs" />
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