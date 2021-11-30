import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import github from '../assets/pictures/githubLogo.png'
import linkedin from '../assets/pictures/linkedinLogo.png'
import facebook from '../assets/pictures/facebookLogo.png'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitted = () => {
        toast('Email Sent!', {
            className:'custom-toast',
            draggable: true,
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose:2000,
            theme:'dark',
            style:{
                backgroundColor:'#54bcf0',
                color:'black',
                textAlign:'center',
            },
        })
    }
    
    const sendEmail = () => {
        // submitted()
        axios.post('/message', {name, email, message})
            .then((res) => {
                console.log(res.data)
                // alert('Email sent!')
                setName('')
                setEmail('')
                setMessage('')
                submitted()
            })
            .catch(err => {
                console.log(err)
                // console.log(err.data)
                console.log('Email send error')
            })
    }

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

            
            <section className='contactFull'>
                <section className='contactGreeter'>
                    I would love to hear from you!
                    <br/>
                    If you have any questions, or
                    would like a copy of my resume, please send me a message here!
                </section>
                <br/>
                    <section className='contact-form'>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='name-input'/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='email-input'/>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='message-input'/>
                        <button className='submit-button' onClick={sendEmail}>Send</button>
                        
                    </section>
                    <br/>
                    <br/>
                <section className='connection-section'>
                    <section className='connection-prompt'>You can also find me on:</section>
                    <br/>
                    <section className='connection-icons'>
                        <a href='https://www.linkedin.com/in/kyle-baugh' target='_blank' rel="noreferrer noopener">
                            <img src={linkedin} alt='LinkedIn' className='logo'/>
                        </a>
                        <a href='https://github.com/kylebaugh' target='_blank' rel="noreferrer noopener">
                            <img src={github} alt='GitHub' className='logo'/>
                        </a>
                        <a href='https://www.facebook.com/kyle.baugh.12/' target='_blank' rel="noreferrer noopener">
                            <img src={facebook} alt='Facebook' className='logo'/>
                        </a>
                    </section>
                </section>
            </section>
            <>
                <ToastContainer />
            </>
        </div>
    )
}

export default Contact