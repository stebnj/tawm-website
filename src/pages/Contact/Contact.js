import './Contact.scss'
import resume from '../../assets/resume.pdf'


export default function Contact(){
    return(
        <main className='contact'>
            <section className='contact__title'>
                <h1 className='contact__title-text'>
                    Contact Me
                </h1>
            </section>
            <section className='contact__message'>
                <p className='contact__message-text'>
                    I'm always interested in discussing engineering opportunities,
                     technical challenges, or potential collaborations. 
                     Looking forward to connecting with you!
                </p>
            </section>
            <footer className='contact__content'>
                <ul className='contact__content-list'>
                    <li className='contact__content-resume'>
                        <a href='/resume.pdf' target="_blank" rel="noopener noreferrer">
                            View My Resume
                        </a>
                        
                    </li>
                    <li className='contact__content-linkedin'>
                        <a href='https://www.linkedin.com/in/thomas-duran-iii-152400193/'>
                            LinkedIn 
                        </a>
                        
                    </li>
                    <li className='contact__content-email'>
                        My Email
                    </li>
                </ul>
            </footer>
            
        </main>
    )
}