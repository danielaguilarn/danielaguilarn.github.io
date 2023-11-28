import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import { HeaderComponent } from '../layout/sidepanel/header';
import { FooterComponent } from '../layout/sidepanel/footer';
import { DashboardComponent } from '../layout/sidepanel';
import { HeroComponent } from '../home';
import { ResumeComponent } from '../resume';

function App() {

  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 1000)
  }, []);

  return (
    <BrowserRouter>
      <DashboardComponent/>
    </BrowserRouter>
  );
}

export default App;
