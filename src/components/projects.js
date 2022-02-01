import {Link} from 'react-router-dom'
import '../cssFiles/projects.css'
import audacityLogo from '../assets/icons/audacityLogo.png'
import awsLogo from '../assets/icons/awsLogo.png'
import axiosLogo from '../assets/icons/axiosLogo.png'
import bcryptLogo from '../assets/icons/bcryptLogo.jpeg'
import emailJsLogo from '../assets/icons/emailJsLogo.png'
import nodeJsLogo from '../assets/icons/nodeJsLogo.png'
import reactLogo from '../assets/icons/reactLogo.png'
import reduxLogo from '../assets/icons/reduxLogo.png'
import mainLogo from '../assets/logos/circle.png'
// import mainLogo from '../assets/logos/no-eye.png'
// import mainLogo from '../assets/logos/bottom-eye.png'

const Projects = () => {

    return (
        <div className='projects-body'>
            <section className='projects-header'>
                <section className='projects-develop'>
                    <Link to='/'>
                        <img src={mainLogo} alt='main logo' class='projectLogo'/>
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

            <section className='projectsList'>
                <section class='content'>
 <section className='project'>
                        <section class='projectLeft'>
                            <p className='projectName'>Terminology Glossary</p>
                            <iframe 
                                className='projectVideo'
                                // width="504"
                                // height="283.5" 
                                src="https://youtube.com/embed/uwqwWoJihA0" 
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
                        </section>
                            <section class='projectRight'>
                            <br/>
                            <br/>

                            <p className='projectDescription'>
                                This was my very first solo full-stack application! I created a terminology glossary to help bootcamp students stay on top of the different terms that go with the various technologies.
                                <br/>
                                <br/>
                                <a class='repoUrl' href='https://github.com/kylebaugh/personal-project'>GitHub Repo</a>
                            </p>
                            <br/>
                            <p className='techIntro'>Technologies:</p>
                            <br/>

                            <section className='projectTechs'>
                                <img src={reactLogo} alt='React Icon' className='techImage'/>
                                <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                                <img src={axiosLogo} alt='Axios Icon' className='techImage'/>
                                {/* <img src={bcryptLogo} alt='Bcrypt Icon' className='techImage'/> */}
                                <img src={reduxLogo} alt='Redux Icon' className='techImage'/>
                                <img src={awsLogo} alt='AWS Icon' className='techImage'/>

                            </section>
                        </section>
                    </section>
                    <section className='project'>
                        <section class='projectLeft'>
                            <p className='projectName'>Hypogean Dominion</p>
                            <iframe 
                                className='projectVideo'
                                // width="504"
                                // height="283.5" 
                                src="https://www.youtube.com/embed/07Z07zlzl-A" 
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
                        </section>
                        <section class='projectRight'>
                            <br/>
                            <br/>
                        <br/>
                            <p className='projectDescription'>
                                This was my capstone project for graduation at Devmountain. It is a fully-functional Rogue-like game, built entirely in React!
                            </p>
                            <br/>
                            
                            <section><a class='repoUrl' href='https://hypogeandominion.com/'>Live Site</a> | <a class='repoUrl' href='https://github.com/wlr-1-rogues/roguelike'>GitHub Repo</a></section>
                            <br/>
                            

                            <p className='techIntro'>Technologies:</p>
                            <br/>
                            <section className='projectTechs'>
                                <img src={reactLogo} alt='React Icon' className='techImage'/>
                                <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                                <img src={audacityLogo} alt='Audacity Icon' className='techImage'/>
                                
                            </section>
                        </section>
                    </section>
                    <br/>
                   

                    <section className='project'>
                    <section class='projectLeft'>
                            <p className='projectName'>Find TQC</p>
                            <iframe 
                                className='projectVideo'
                                // width="504"
                                // height="283.5" 
                                src="https://www.youtube.com/embed/0P-LEd6MEUg" 
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
                        </section>

                        <section class='projectRight'>
                            <br/>
                        <br/>
                            <p className='projectDescription'>
                                This was the first site I built after graduating from Devmountain! It is a lead-generation application to help hiring managers find qualfied candidates for their open positions.
                                <br/>
                                <br/>
                                <section><a class='repoUrl' href='https://findtqc.com/'>Live Site</a> | <a class='repoUrl' href='https://github.com/kylebaugh/qualified-candidates'>GitHub Repo</a></section>
                            </p>
                            <br/>
                            <p className='techIntro'>Technologies:</p>
                            <br/>
                            <section className='projectTechs'>
                                <img src={reactLogo} alt='React Icon' className='techImage'/>
                                <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                                <img src={emailJsLogo} alt='Email.js Icon' className='techImage'/>
                            </section>
                        </section>
                    </section>
                    <br/>

                    <section className='lastProject'>

                    <section class='projectLeft'>
                            <p className='projectName'>Who's At</p>
                            <iframe 
                                className='projectVideo'
                                // width="504"
                                // height="283.5" 
                                src="https://www.youtube.com/embed/GUf0nKm7Duc" 
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
                        </section>
                        <section class='projectRight'>
                            <br/>
                            <br/>
                            <p className='projectDescription'>
                                This site was built to explain the basics of the Who's At application, as well as help customers find and download the app to their specific device.
                                <br/>
                                <br/>
                                <section><a class='repoUrl' href='https://whosatapp.com/'>Live Site</a> | <a class='repoUrl' href='https://github.com/kylebaugh/whos-at'>GitHub Repo</a></section>
                            </p>
                            <br/>
                            <p className='techIntro'>Technologies:</p>
                            <br/>
                            <section className='projectTechs'>
                                <img src={reactLogo} alt='React Icon' className='techImage'/>
                                <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                            </section>
                        </section>
                    </section>
                    <br/>


                    <br/>



                    
                
                
                {/* <section className='projectsTop'>
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
                    <section className='projectTechs'>
                    <img src={reactLogo} alt='React Icon' className='techImage'/>
                    <img src={nodeJsLogo} alt='Node.js Icon' className='techImage'/>
                    <img src={axiosLogo} alt='Axios Icon' className='techImage'/>
                    <img src={bcryptLogo} alt='Bcrypt Icon' className='techImage'/>
                    <img src={reduxLogo} alt='Redux Icon' className='techImage'/>
                    <img src={awsLogo} alt='AWS Icon' className='techImage'/>
                    
                    </section>
                    </section>
                    
                </section> */}

                </section>
            </section>
        </div>
    )
}

export default Projects