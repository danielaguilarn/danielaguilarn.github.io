import { NavigationComponent } from "../navigationmenu";

const HeaderComponent = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h1 className="logo me-auto me-lg-0"><a href="home">Daniel Nova</a></h1>
                
                <NavigationComponent />

                <div className="header-social-links">
                  <a href="https://instagram.com/danielnova" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="https://linkedin.com/in/danielnovaa" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  <a href="https://github.com/novadaniel" className="github"><i className="bi bi-github"></i></a>
                </div>

            </div>

        </header>
    );
}
/* <!-- Uncomment below if you prefer to use an image logo --> */
/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */
      
export default HeaderComponent;
