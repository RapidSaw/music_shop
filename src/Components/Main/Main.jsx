import Representation from '../Representation/Representation'
import './Main.css'

export default function Main (props) {
    return (
        <section className='main'>
            <div className='main-content'>
                <h1>{props.data.title}</h1>
                <p>{props.data.description}</p>
            </div>
        </section>
    )
}