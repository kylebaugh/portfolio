import {Link} from 'react-router-dom'
// import profilePicture from '../assets/pictures/profileNoBackground.png'
import '../cssFiles/about.css'
import profilePicture from '../assets/pictures/Headshot.jpg'
import mainLogo from '../assets/logos/circle.png'
// import mainLogo from '../assets/logos/no-eye.png'
// import mainLogo from '../assets/logos/bottom-eye.png'

const About = () => {

    return (
        <div className='about-body'>
            <section className='home-header'>
                <section className='home-develop'>
                <Link to='/'>
                    <img src={mainLogo} alt='main logo' class='aboutLogo'/>
                </Link>
                    {/* <section className='header-name'>Kyle Baugh</section>
                    <section className='header-tag'>Full-Stack Web Developer</section>4 */}
                </section>
                <section className='home-links'>

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
                    Hello! My name is Kyle Baugh. I am a full-stack web developer who loves solving puzzles and learning new things! I graduated from the Web Development program at Devmountain in July of 2021, which is where I currently work as a Mentor for their Foundations program. When I'm not coding, you can find me on the stage, reading, or spending time with my wondferful dog.
                </section>
            </section>
        </div>
    )
}

export default About