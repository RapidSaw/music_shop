import { NavLink } from 'react-router-dom'
import './Footer.css'


export default function Footer (props) {
    return (
        <footer>
            <div className='footer-content-wrapper'>
                <div className='main-info'>
                    <img src="" alt="" />
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                    <p>{props.data.main.copyrights}</p>
                    <p>{props.data.main.address1}</p>
                    <p>{props.data.main.address2}</p>
                </div>
                <div className='about-us'>
                    <h2>{props.data.aboutus.title}</h2>
                    <p><NavLink to={`/${props.data.aboutus.link1}`}>{props.data.aboutus.link1}</NavLink></p>
                    <p><NavLink to={`/${props.data.aboutus.link2}`}>{props.data.aboutus.link2}</NavLink></p>
                    <p><NavLink to={`/${props.data.aboutus.link3}`}>{props.data.aboutus.link3}</NavLink></p>
                    <p><NavLink to={`/${props.data.aboutus.link4}`}>{props.data.aboutus.link4}</NavLink></p>
                </div>
                <div className='info'>
                    <h2>{props.data.info.title}</h2>
                    <p><NavLink to={`/${props.data.info.link1}`}>{props.data.info.link1}</NavLink></p>
                    <p><NavLink to={`/${props.data.info.link2}`}>{props.data.info.link2}</NavLink></p>
                    <p><NavLink to={`/${props.data.info.link3}`}>{props.data.info.link3}</NavLink></p>
                    <p><NavLink to={`/${props.data.info.link4}`}>{props.data.info.link4}</NavLink></p>
                    <p><NavLink to={`/${props.data.info.link5}`}>{props.data.info.link5}</NavLink></p>
                    <p><NavLink to={`/${props.data.info.link6}`}>{props.data.info.link6}</NavLink></p>
                </div>
                <div className='brands'>
                    <h2>{props.data.brands.title}</h2>
                    <p><NavLink to={`/${props.data.brands.link1}`}>{props.data.brands.link1}</NavLink></p>
                    <p><NavLink to={`/${props.data.brands.link2}`}>{props.data.brands.link2}</NavLink></p>
                    <p><NavLink to={`/${props.data.brands.link3}`}>{props.data.brands.link3}</NavLink></p>
                    <p><NavLink to={`/${props.data.brands.link4}`}>{props.data.brands.link4}</NavLink></p>
                    <p><NavLink to={`/${props.data.brands.link5}`}>{props.data.brands.link5}</NavLink></p>
                    <p><NavLink to={`/${props.data.brands.link6}`}>{props.data.brands.link6}</NavLink></p>
                </div>
            </div>
            <div className='payments'>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </footer>
    )
}