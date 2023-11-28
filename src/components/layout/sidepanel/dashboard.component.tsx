import { AboutComponent } from "../../about";
import { ContactComponent } from "../../contact";
import { HobbiesComponent } from "../../hobbies";
import { HeroComponent } from "../../home";
import { ResumeComponent } from "../../resume";
import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";
import { NavigationComponent } from "./navigationmenu";
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const DashboardComponent = () => {

    const [screenLoading, setScreenLoading] = useState(false);

    useEffect(() => {
        setScreenLoading(true);
        setTimeout(() => {
            setScreenLoading(false);
        }, 1000);
    }, [])

    return (
        <>
            <HeaderComponent />

            <Routes>
                <Route path="/home" element={<HeroComponent/>}/>
                <Route path="/about" element={<AboutComponent/>}/>
                <Route path="/resume" element={<ResumeComponent/>}/>
                <Route path="/hobbies" element={<HobbiesComponent/>}/>
                <Route path="/projects" element={<Navigate to="/home"/>}/>
                <Route path="/blog" element={<Navigate to="/home"/>}/>
                <Route path="/contact" element={<ContactComponent/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/> 
            </Routes>

            <FooterComponent />

            {screenLoading &&
                <div id="preloader"></div>
            }
            
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>

            <script src="assets/js/main.js"></script>

        </>
    );
}

export default DashboardComponent;
