import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <div className='home-body'>
            <section className='home-header'>
                <section className='home-develop'>
                    <section>Kyle Baugh</section>
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
            <section className='home-hero'>
                <section className='hero-tombstone'>Creative</section>
                <section className='hero-tombstone'>Adaptive</section>
                <section className='hero-tombstone'>Responsive</section>
            </section>
            <section className='hero-description'>
                <section>Pariatur ad sit dolor ad. Consectetur ipsum enim ad cillum esse consequat irure. Qui sunt laboris proident cillum et ut ad sint aute. Deserunt cupidatat magna occaecat occaecat enim voluptate id in voluptate.</section>
            </section>
        </div>
    )
}

export default Home