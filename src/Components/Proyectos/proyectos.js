import React from 'react'
import '../Proyectos/proyecto.css'

const Proyectos = () => {
  return (
    <main className='planilla'>
    <section id="proyectos" class="proyectos-recientes seccion-clara d-flex flex-column">
    <h2 class="seccion-titulo texto-negro">Mis proyectos recientes</h2>
    <h3 class="seccion-descripcion">Estos son algunos proyectos que he creado recientemente...</h3>


    <div class="container text-center proyectos-contenedor">
      <div class="row">


        <div class="col-12 col-md-6 col-lg-5">
          <div class="proyecto">
          <img src="https://i.ibb.co/TtYpX5z/pry1.jpg" alt="pry1" border="0"/>
            <div class="overlay">
              <p>Proyecto 1</p>
              <div class="iconos-contenedor">
                <a href="https://github.com/JsCerna/Primer-proyecto" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://rustysurfboardschile.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 col-md-6 col-lg-5">
          <div class="proyecto">
          <img src="https://i.ibb.co/vq4hZrV/pry2.jpg" alt="pry2" border="0" />
            <div class="overlay">
              <p>Proyecto 2</p>
              <div class="iconos-contenedor">
                <a href="https://github.com/JsCerna/Tercer-Proyecto" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://calidad-del-aire.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 col-md-6 col-lg-5">
          <div class="proyecto">
          <img src="https://i.ibb.co/ySc3ZHD/pry3.jpg" alt="pry3" border="0" /> 
            <div class="overlay">
              <p>Proyecto 3</p>
              <div class="iconos-contenedor">
                <a href="https://github.com/JsCerna/cuarto-proyecto" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://jauria-restaurant.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 col-md-6 col-lg-5">
          <div class="proyecto">
          <img src="https://i.ibb.co/Vm93GNM/pry4.jpg" alt="pry4" border="0" />
            <div class="overlay">
              <p>Proyecto 4</p>
              <div class="iconos-contenedor">
                <a href="https://github.com/JsCerna/Quinto-Proyecto" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://upgradeyt.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </main>
  )
}

export default Proyectos