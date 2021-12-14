import {Link} from 'react-router-dom'
import '../cssFiles/home.css'
// import '../../src/home.css'

const Home = () => {

    return (
        <div className='home-body'>
            <section className='home-header'>
                <section className='home-develop'>
                    <section className='header-name'>Kyle Baugh</section>
                    <section className='header-tag'>Full-Stack Web Developer</section>
                </section>
                <section className='home-links'>
                    {/* <Link to='/'>
                        <button className='link-button'>Home</button>
                    </Link> */}
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
            <section className='home-hero'>
                <section className='hero-tombstone'>Creative</section>
                <section className='hero-tombstone'>Adaptive</section>
                <section className='hero-tombstone'>Responsive</section>
            </section>
            <section className='hero-description'>
                <section>
                    A graduate from DevMountain with a passion for buildling
                    full-stack, efficient, and visually stimulating programs.
                </section>
            </section>
        </div>
    )
}

export default Home