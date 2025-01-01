import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.js'
import Home from './pages/Home.js';
// import { useState } from 'react';
import homeIcon from './icons/home-smile.svg'
import infoIcon from './icons/info-circle.svg'
import projectsIcon from './icons/projects.svg'
import contactIcon from './icons/contact.svg'

function App() {
  const routes = {
    home: { id: 1, title: 'Inicio', icon: homeIcon, linkPath: '#welcome' },
    about: { id: 2, title: 'Sobre mí', icon: infoIcon, linkPath: '#about' },
    projects: { id: 3, title: 'Proyectos', icon: projectsIcon, linkPath: '#projects' },
    contact: { id: 4, title: 'Contacto', icon: contactIcon, linkPath: '#contact' }
  }
  // const [page, setPage] = useState(1)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout routes={routes} />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
