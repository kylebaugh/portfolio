import {Link} from 'react-router-dom'
import audacityLogo from '../assets/icons/audacityLogo.png'
import awsLogo from '../assets/icons/awsLogo.png'
import axiosLogo from '../assets/icons/axiosLogo.png'
import bcryptLogo from '../assets/icons/bcryptLogo.jpeg'
import emailJsLogo from '../assets/icons/emailJsLogo.png'
import nodeJsLogo from '../assets/icons/nodeJsLogo.png'
import reactLogo from '../assets/icons/reactLogo.png'
import reduxLogo from '../assets/icons/reduxLogo.png'

const Projects = () => {

    return (
        <div className='projects-body'>
            <section className='projects-header'>
                <section className='projects-develop'>
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
            <section className='projectsList'>
                <section className='projectsTop'>
                    <section className='project'>
                        <p className='projectName'>Hypogean Dominion</p>
                        <iframe 
                            className='projectVideo'
                            width="327"
                            height="185" 
                            src="https://www.youtube.com/embed/TI2uGmdzhzw" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture;" 
                            allowFullScreen='allowfullscreen'
                            >
                        </iframe>
                        <p className='projectDescription'>
                            Ad laboris deserunt veniam ad elit duis. Aliquip ad veniam elit fugiat fugiat. Dolor anim sint incididunt ad aute et ullamco.
                        </p>
                        <br/>
                        {/* <p className='techIntro'>Technologies:</p> */}
                        <section className='projectTechs'>
                            <img src={reactLogo} alt='React Icon' className='techImage'/>
                            <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                            <img src={audacityLogo} alt='Audacity Icon' className='techImage'/>
                            
                        </section>
                    </section>

                    <section className='project'>
                        <p className='projectName'>Whos At</p>
                        <iframe 
                            className='projectVideo'
                            width="327"
                            height="185" 
                            src="https://www.youtube.com/embed/TI2uGmdzhzw" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture;" 
                            allowFullScreen='allowfullscreen'
                            >
                        </iframe>
                        <p className='projectDescription'>
                            Ad laboris deserunt veniam ad elit duis. Aliquip ad veniam elit fugiat fugiat. Dolor anim sint incididunt ad aute et ullamco.
                        </p>
                        <br/>
                        {/* <p className='techIntro'>Technologies:</p> */}
                        <section className='projectTechs'>
                            <img src={reactLogo} alt='React Icon' className='techImage'/>
                            <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                        </section>
                    </section>
                </section>

                <section className='projectsBottom'>

                    <section className='project'>
                        <p className='projectName'>Find TQC</p>
                        <iframe 
                            className='projectVideo'
                            width="327"
                            height="185" 
                            src="https://www.youtube.com/embed/TI2uGmdzhzw" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture;" 
                            allowFullScreen='allowfullscreen'
                            >
                        </iframe>

                        <p className='projectDescription'>
                            Ad laboris deserunt veniam ad elit duis. Aliquip ad veniam elit fugiat fugiat. Dolor anim sint incididunt ad aute et ullamco.
                        </p>
                        <br/>
                        {/* <p className='techIntro'>Technologies:</p> */}
                        <section className='projectTechs'>
                            <img src={reactLogo} alt='React Icon' className='techImage'/>
                            <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                            <img src={emailJsLogo} alt='Email.js Icon' className='techImage'/>
                        </section>
                    </section>

                    <section className='project'>
                        <p className='projectName'>Terminology Glossary</p>
                        <iframe 
                            className='projectVideo'
                            width="327"
                            height="185" 
                            src="https://www.youtube.com/embed/TI2uGmdzhzw" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture;" 
                            allowFullScreen='allowfullscreen'
                            >
                        </iframe>
                        <p className='projectDescription'>
                            Ad laboris deserunt veniam ad elit duis. Aliquip ad veniam elit fugiat fugiat. Dolor anim sint incididunt ad aute et ullamco.
                        </p>
                        <br/>
                        {/* <p className='techIntro'>Technologies:</p> */}
                        <section className='projectTechs'>
                            <img src={reactLogo} alt='React Icon' className='techImage'/>
                            <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                            <img src={axiosLogo} alt='Axios Icon' className='techImage'/>
                            <img src={bcryptLogo} alt='Bcrypt Icon' className='techImage'/>
                            <img src={reduxLogo} alt='Redux Icon' className='techImage'/>
                            <img src={awsLogo} alt='AWS Icon' className='techImage'/>

                        </section>
                    </section>

                </section>

            </section>
        </div>
    )
}

export default Projects