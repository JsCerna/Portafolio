import React from 'react'
import '../Contacto/contacto.css'

export const Contacto = () => {
  return (
    <section className='contc'>
    <img class="contact-logo" src="http://cdn.onlinewebfonts.com/svg/img_315835.png" alt="Logo del portafolio" />
      <p class="contact-texto text-center">En busca de nuevos proyectos.. </p>
      <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://github.com/JsCerna" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/jose-cerna-734298202/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/cotecerna/" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="mailto:jcernat@udd.cl" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
      <div class="autor">Creado por José Cerna</div>
    </section>
  )
}
export default Contacto