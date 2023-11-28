import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationComponent = () => {

    const [navOpened, setNavOpened] = useState(false);
    const navClassNames = navOpened ? "navbar order-last order-lg-0 navbar-mobile" : "navbar order-last order-lg-0"
    const navImage = navOpened ? "bi mobile-nav-toggle bi-x" : "bi mobile-nav-toggle bi-list"

    const activeClasses = "nav-link scrollto active"
    const inactiveClasses = "nav-link scrollto"
    let location = useLocation();

    const linkClass = (page: string) => {
        return "/" + page == location.pathname ? activeClasses : inactiveClasses
    }

    return (
        <nav id="navbar" className={navClassNames}>
            <ul>
              <li><Link to="/home" className={linkClass("home")}><span>Home</span></Link></li>
              <li><Link to="/about" className={linkClass("about")}><span>About</span></Link></li>
              <li><Link to="/resume" className={linkClass("resume")}><span>Resume</span></Link></li>
              <li><Link to="/hobbies" className={linkClass("hobbies")}><span>Hobbies</span></Link></li>
              {/* <li><Link to="/projects" className={linkClass("projects")}><span>Projects</span></Link></li> */}
              {/* <li><Link to="/blog" className={linkClass("blog")}><span>Blog</span></Link></li> */}
              <li><Link to="/contact" className={linkClass("contact")}><span>Contact</span></Link></li>
            </ul>
            <i className={navImage} onClick={() => setNavOpened(!navOpened)}></i>
        </nav>
    );
}

export default NavigationComponent;
