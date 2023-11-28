import {useEffect} from 'react'

const ResumeComponent = () => {

    useEffect(() => {
        document.title = 'Daniel Nova - Resume'
    }, []);

    return (
        <main id="main">
            <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Resume</h2>
                <div className='text-center'>
                    <a href={require('../../documents/daniel_nova_resume_2023.pdf')} className='resumelink'>PDF Copy</a>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-6">
                    <h3 className="resume-title">Summary</h3>
                    <div className="resume-item pb-0">
                    <h4>Daniel Nova</h4>
                    <p><em>
                        Innovative and deadline-driven Software Engineer with 1 year of industry experience developing efficient software solutions for users.
                    </em></p>
                    <p>
                    <ul>
                        <li>Waterloo, ON</li>
                        <li>(519) 577-7174</li>
                        <li>danielnova5@outlook.com</li>
                    </ul>
                    </p>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                    <h4>B.A.Sc Honours Computer Science</h4>
                    <h5>September 2017-April 2022</h5>
                    <p><em>McMaster University, Hamilton, ON</em></p>
                    <p>
                    Relevant Coursework: <b>Operating Systems, Machine Learning, Algorithms and Complexity, Data Mining</b>
                    </p>
                    </div>
                    <h3 className="resume-title">Skills</h3>
                    <div className="resume-item">
                    <h4>Programming Languages</h4>
                    <p>Java, Python, C, C++, C#, TypeScript, JavaScript, Scala, Ruby, Kotlin, SQL, Haskell, Assembly, HTML/CSS</p>
                    </div>
                    <div className="resume-item">
                    <h4>Software Frameworks</h4>
                    <p>
                        AWS, Google Cloud Platform, Azure, Kubernetes, Git, LaTeX, REST, Node.js, Angular, React Native,
JIRA, REST, Bootstrap
                    </p>
                    </div>
                    <div className="resume-item">
                    <h4>Programming Libraries</h4>
                    <p>
                    React, TensorFlow, PyTorch, Scikit-Learn, NumPy, plotly
                    </p>
                    </div>
                    <div className="resume-item">
                    <h4>Spoken Languages</h4>
                    <p>
                    <ul>
                        <li>English: Native</li>
                        <li>Portuguese: Native</li>
                        <li>Spanish: Intermediate</li>
                        <li>French: Intermediate</li>
                    </ul>
                    </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                    <h4>Software Engineer at General Motors</h4>
                    <h5>August 2022-August 2023</h5>
                    <p><em>Markham, ON</em></p>
                    <p>
                    <ul>
                        <li>Key technologies: <b>C++, Java, Kotlin, XML, Android Studio, UNIX, Git, JIRA</b></li>
                        <li>Added features to Bluetooth services within GM Vehicles using <b>C++</b> and <b>Java</b></li>
                        <li>Developed deep understanding of existing <b>Bluetooth architecture</b> in order to resolve vehicle and cellular device defects and using log analysis</li>
                        <li>Modified UI using <b>Java</b>, <b>Kotlin</b>, and <b>XML</b> to facilitate the use of GM’s Trusted Device application</li>
                    </ul>
                    </p>
                    </div>
                    <div className="resume-item">
                    <h4>Teaching Assistant at McMaster University</h4>
                    <h5>September 2021-December 2021</h5>
                    <p><em>Hamilton, ON</em></p>
                    <p>
                    <ul>
                        <li>Assistant for a software development basics course which focuses on <b>Shell programming</b>, <b>UNIX</b> and <b>C</b></li>
                        <li>Provided answers and guidance to Level II students in educational labs</li>
                        <li>Supervised students in test labs and graded their reports</li>
                    </ul>
                    </p>
                    </div>
                    <div className="resume-item">
                    <h4>Software Engineer Intern at OpenText</h4>
                    <h5>May 2021-August 2021</h5>
                    <p><em>Waterloo, ON</em></p>
                    <p>
                    <ul>
                        <li>Key technologies: <b>Python, Kubernetes, Docker, Helm, Google Cloud Platform, Azure, AWS, PostgreSQL</b></li>
                        <li>Deployed different versions of OpenText’s Content Server on <b>GCP</b>, <b>AWS</b> and <b>Azure</b> using <b>Docker</b> and <b>Kubernetes</b></li>
                        <li>Modified <b>Python</b> and <b>Helm Chart</b> files to implement enhancements and fix bugs for newer versions of the Content Server product</li>
                        <li>Ensured consistency among containerized Content Server and other products</li>
                    </ul>
                    </p>
                    </div>
                    <div className="resume-item">
                    <h4>Software Engineer Intern at Symantec</h4>
                    <h5>May 2018-August 2018 &amp; May 2019-August 2019</h5>
                    <p><em>Waterloo, ON</em></p>
                    <p>
                    <ul>
                        <li>Key technologies: <b>Java, TypeScript, Angular, HTML, SASS, Bootstrap, REST, JSON, JSDocs, Node.js, npm, JIRA, UNIX, Git</b></li>
                        <li>Translated old <b>Java</b> code in <b>TypeScript</b> with <b>Angular framework</b> and <b>Node.js</b> for Symantec/Broadcom’s SGAC (Security Gateway Admin Console) project</li>
                        <li>Used responsive design with <b>Bootstrap</b> and <b>CSS</b></li>
                        <li>Participated in software development with Scrum methodologies (Agile model)</li>
                        <li>Communicated and collaborated regularly with UX designers to ensure the best product</li>
                    </ul>
                    </p>
                    </div>
                </div>
                </div>

            </div>
            </section>

        </main>
    );
}

export default ResumeComponent;
