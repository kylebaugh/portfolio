import {Link} from 'react-router-dom'

const Projects = () => {

    return (
        <div className='home-body'>
            <section className='home-header'>
                <section className='home-develop'>
                    <section>Projects Page</section>
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
        </div>
    )
}

export default Projects