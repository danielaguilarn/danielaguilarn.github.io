import {useEffect} from 'react'
import { Link } from 'react-router-dom';

const HeroComponent = () => {

    useEffect(() => {
        document.title = 'Daniel Nova'
    }, []);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <h1>Daniel Nova</h1>
                <h2>I'm a 24 year old Software Engineer from Waterloo, Ontario, Canada</h2>
                <Link to="/about" className="btn-about"><span>About Me</span></Link>
            </div>
        </section>
    );
}

export default HeroComponent;
