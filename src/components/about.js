import {Link} from 'react-router-dom'
// import profilePicture from '../assets/pictures/profileNoBackground.png'
import '../cssFiles/about.css'
import profilePicture from '../assets/pictures/Headshot.jpg'

const About = () => {

    return (
        <div className='home-body'>
            <section className='home-header'>
                <section className='home-develop'>
                    <section>About Me</section>
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
            <section className='about-me'>
                <section className='about-picture'>
                    <img class='profilePic' src={profilePicture} alt='Profile Pic' />
                </section>
                <section className='about-text'>
                    Culpa ullamco minim aliqua commodo occaecat adipisicing ipsum ullamco incididunt elit enim. Et est aute incididunt do labore cupidatat in occaecat. Elit deserunt dolore ea dolor dolor qui ad. Labore ullamco laborum magna irure sint ut sunt tempor aute nulla non magna.
                </section>
            </section>
        </div>
    )
}

export default About