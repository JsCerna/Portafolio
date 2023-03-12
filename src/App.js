import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './Components/Contacto/Contacto';
import Informacion from './Components/Informacion/Informacion';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import Home from './Views//Home/Home';
import Errorpage from './Views/Errorpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proyectos from './Components/Proyectos/proyectos';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={ <Layout /> }
        >
          <Route
            index
            element={ <Home /> }
          />
          <Route
            path="/informacion"
            element={ <Informacion /> }
          />
          <Route
            path="/proyectos"
            element={ <Proyectos /> }
          />
          <Route
            path="/contacto"
            element={ <Contacto /> }
          />
        </Route>
        <Route path='*' element={ <Errorpage /> } />
      </Routes>
    </>
  );
}

export default App;
