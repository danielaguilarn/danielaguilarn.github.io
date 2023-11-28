import { useEffect } from "react";

const AboutComponent = () => {

    useEffect(() => {
        document.title = 'Daniel Nova - About'
    }, []);

    return (
        <main id="main">

        
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>About</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
            </div>

            <div className="row">
            <div className="col-lg-4 profile">
                <img src={require('../../images/about.jpg')} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Daniel Nova</h3>
                <p className="fst-italic">
                    About me:
                </p>
                <div className="row">
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-rounded-right"></i> <strong>Date of Birth:</strong> October 24th, 1999</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Hometown:</strong> Waterloo, ON, Canada</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Nationalities:</strong> Canada, Brazil, Spain</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Currently residing:</strong> Waterloo, ON, Canada / Palm Coast, FL, United States</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 24</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Bachelors</li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Email:</strong> <a href="mailto">danielnova5@outlook.com</a></li>
                    <li><i className="bi bi-rounded-right"></i> <strong>Work status:</strong> Looking</li>
                    </ul>
                </div>
                </div>
                <p>
                {/* Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. */}
                {/* Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores. */}
                </p>
            </div>
            </div>

        </div>
        </section>
        {false && 
        <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Career</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row skills-content">

            <div className="col-lg-6">

                
            </div>

            </div>

        </div>
        </section>&&

        <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Background</h2>
            <p>
            </p>            
            </div>

        </div>
        </section>
}

        <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Future plans for this website</h2>
            <p>
                I have a couple of software projects in the works. When I'm ready to release them there will be a section for that on here.
            </p>
            

            </div>

        </div>
        </section>


    </main>
    );
}

export default AboutComponent;
