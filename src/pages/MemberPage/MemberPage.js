import ActionContainer from '../../components/ActionContainer/ActionContainer'
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
                <ActionContainer />
            </main>
        </div>
    )
}