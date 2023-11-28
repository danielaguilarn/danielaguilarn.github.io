import {useEffect} from 'react';
import { ProgressBar } from 'react-aria-components';

const HobbiesComponent = () => {

    useEffect(() => {
        document.title = 'Daniel Nova - Hobbies'
    }, []);

    return (
        <main id="main">
        <section>
            <h2></h2>
        </section>
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Hobbies</h2>
            <p>
                I've picked up a number of hobbies throughout my life. Many of which I pick up in a state of boredom, obsess over for roughly a month then either drop it and the cycle repeats itself or they linger as a core part of my life. Personally I prefer to be a jack of all trades rather than a master of one, you never know when a skill or trick will come in handy.
            </p>
            <p>

            </p>
            <p>
                Below are a few that have stuck around:
            </p>
            </div>

        </div>
        </section>
        <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Water Polo</h2>
            <div className='row'>
            <div className="col-lg-3 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
                <img src={require('../../images/waterpolo.jpeg')} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                <span>Picture of me playing for McMaster. I remember scoring on this exact play.</span>
                </div>
            </div>
            </div>
            <div className='col-lg-9 side-align'>
            <span>
                <a href='https://www.youtube.com/watch?v=X9NkKHYGFTI'>Here is a link that shows what the sport is like.</a>
            </span>
            <p>From when I was 7 years old to now, I have been a water polo player. It's not a common sport to play growing up in Canada but I quickly admired the focus on team play. There are star players but the quality of the utility players will often make or break the game. I never had the strongest shot so in order to be useful my main contributions for the team were often as a playmaker/defender. There is no better feeling than being on the bad end of a mismatch and blocking the shot of a guy that's twice your size.</p>
                        
            <p>
                My favourite achievements include getting the bronze medal at OUA's playing for McMaster's varsity team in 2018, winning the Ontario 14U Provincial championship in 2013 and winning an international tournament in Denmark.
            </p>
            </div>
            </div>
            </div>

        </div>
        </section>

        <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
            <h2>Fitness</h2>
            </div>
            <div className='row'>
            <div className="col-lg-8">
            <p>
                To say the least I am an extremely active person.
                In order to supplement water polo I began weightlifting in 2017. I routinely go to the gym 5 days a week, often mixed in with practices, swim sessions, run sessions, and other sports.
            </p>
            <p>
                Current goals include reaching the 1000 pound club (Bench press, squat and deadlift weights totalling 1000 lbs), and doing a half iron man.
            </p>
            </div>

            <div className="col-lg-4">

                <ProgressBar value={89}>
                    {({percentage}) => (
                        <div className="progress">
                        <span className="skill">Bench Press <i className="val">245/275</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: percentage + '%'}}></div>
                        </div>
                        </div>
                    )}

                </ProgressBar>

                <ProgressBar value={87}>
                    {({percentage}) => (
                        <div className="progress">
                        <span className="skill">Squat <i className="val">300/345</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: percentage + '%'}}></div>
                        </div>
                        </div>
                    )}
                </ProgressBar>

                <ProgressBar value={95}>
                    {({percentage}) => (
                        <div className="progress">
                        <span className="skill">Deadlift <i className="val">365/385</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: percentage + '%'}}></div>
                        </div>
                        </div>
                    )}
                </ProgressBar>
            </div>
            </div>
        </div>
        </section>

        <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Music</h2>
            <div className='row'>
            <div className='col-lg-9 side-align'>
            <p>I've always been the type of person to have a very refined music taste but last year I decided to pick up the guitar and later on the bass guitar and ukulele. This is a hobby I mostly enjoy with friends or on my own but I'm slowly getting more confident in my skills and am soon hoping to join a band.</p>
            <p>
                Genres that I enjoy include Indie, R&B, Rock, Reggaeton and Hip hop.
            </p>
            </div>
            <div className="col-lg-3 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
                <img src={require('../../images/guitar.JPG')} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                <span></span>
                </div>
            </div>
            </div>
            </div>
            
            </div>

        </div>
        </section>

        <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Barbering</h2>
            <div className='row'>
            <div className="col-lg-3 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
                <img src={require('../../images/haircut.jpg')} className="img-fluid" alt=""/>
            </div>
            </div>
            <div className='col-lg-7 side-align'>
            <p>
            This was a skill I picked up during the COVID-19 pandemic when barbershops closed. Using the hair on my head as practice, I worked on figuring out how to do fades and cut different styles of hair which I later began doing for friends on occasion.
            </p>
            </div>
            <div className="col-lg-2 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
                <img src={require('../../images/IMG_2973.gif')} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                <span>A haircut I gave to my friend free of charge</span>
                </div>
            </div>
            </div>
            </div>
            </div>

        </div>

        </section>
        <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Boardsports</h2>
            <div className='row'>
                
            
            <div className='col-lg-8 side-align'>
            <p>
                From a very young age I skiied and at roughly 11 years old I began taking more of a liking to snowboarding so I stuck with that. More recently I've also picked up surfing which came quite naturally. Whenever I travel anywhere by the ocean I try to go surfing at least a few times. Just like most of my other hobbies I am mostly self taught with past one lesson at the beginning for safety.
            </p>
            <p>There was also a phase where I longboarded quite often but I slowly grew tired of showing up at home every day covered in cuts and scrapes.</p>
            
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
                <img src={require('../../images/surf.jpg')} className="img-fluid" alt=""/>
                <div className="portfolio-info">
                <span>Me in Tofino, British Columbia</span>
                </div>
            </div>
            </div>

            </div>
            </div>

        </div>
        </section>
        { false &&
        <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Misc</h2>
            <p>
                To do.
            </p>
            </div>
            </div>

        </section>
        }
    </main>
    );
}

export default HobbiesComponent;