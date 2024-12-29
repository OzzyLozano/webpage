import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.js'
import Home from './pages/Home.js';
import { useState } from 'react';
import infoIcon from './icons/info.svg'
import projectsIcon from './icons/projects.svg'
import contactIcon from './icons/contact.svg'

function App() {
  const routes = {
    about: { id: 1, title: 'Sobre mí', icon: infoIcon, linkPath: '/about' },
    projects: { id: 2, title: 'Proyectos', icon: projectsIcon, linkPath: '/projects' },
    contact: { id: 3, title: 'Contacto', icon: contactIcon, linkPath: '#contact' }
  }
  const [page, setPage] = useState(routes.about.id)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout currentPage={page} changePage={setPage} routes={routes} />}>
          <Route index element={<Home currentPage={page} changePage={setPage} routes={routes} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
