import './Representation.css'

export default function Representation(props) {
    return (
        <section className='representation'>
            <h1 className='representation-title'>Офіційний представник брендів:</h1>
            <div className='representation-list'>
                <div className='representation-item'><img src={props.data.repr1} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr2} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr3} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr4} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr5} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr6} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr7} alt="" /></div>
                <div className='representation-item'><img src={props.data.repr8} alt="" /></div>
            </div>
        </section>
    )
}