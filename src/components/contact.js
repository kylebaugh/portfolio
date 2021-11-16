import {Link} from 'react-router-dom'
import {useState} from 'react'

import github from '../assets/pictures/githubLogo.png'
import linkedin from '../assets/pictures/linkedinLogo.png'
import facebook from '../assets/pictures/facebookLogo.png'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className='contact-body'>
            <section className='contact-header'>

                <section className='home-develop'>
                    <section>Contact Page</section>
                </section>

                <section className='home-links'>
                    <Link to='/'>
                        <button className='link-button'>Home</button>
                    </Link>
                    <Link to='/projects'>
                        <button className='link-button'>Projects</button>
                    </Link>
                    <Link to='/about'>
                        <button className='link-button'>About</button>
                    </Link>
                    <Link to='/contact'>
                        <button className='link-button'>Contact</button>
                    </Link>
                </section>

            </section>
            
            <section>
                <section className='contact-form'>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='name-input'/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='email-input'/>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='message-input'/>
                    <button className='submit-button'>Send</button>
                </section>
            </section>

            <section className='connection-section'>
                <section className='connection-prompt'>Connect with me on:</section>
                <br/>
                <section className='connection-icons'>
                    <img src={github} alt='GitHub' className='logo'/>
                    <img src={linkedin} alt='LinkedIn' className='logo'/>
                    <img src={facebook} alt='Facebook' className='logo'/>
                </section>
            </section>
        </div>
    )
}

export default Contact