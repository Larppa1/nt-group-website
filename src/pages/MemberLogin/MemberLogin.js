import './MemberLogin.css'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'

export default function MemberLogin() {
    const navigate = useNavigate()

    const loginUser = async () => {
        const userEmail = document.getElementById('userEmail').value
        const userPassword = document.getElementById('userPass').value
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(() => {
                navigate('/memberPage')
            })
            .catch((err) => {
                alert('Wrong email or password')
                console.log(err)
            })
    }

    return(
        <div className="container">
            <section>
                <article className="prose">
                    <h1>NT Group</h1>
                    <h3>Kirjaudu sisään</h3>
                </article>
            </section>
            <section id='form'>
                <input
                    id='userEmail'
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    placeholder="Sähköposti"
                    autoComplete='off'
                />
                <input
                    id='userPass'
                    className="input input-bordered w-full max-w-xs"
                    type="password"
                    placeholder="Salasana"
                />
                <button
                    className='btn'
                    onClick={loginUser}>Kirjaudu
                </button>
            </section>
        </div>
    )
}