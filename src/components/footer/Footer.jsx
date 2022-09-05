import React from 'react'
import logo from '../../images/img-header/logo-sinFondo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import FormMessage from '../form/FormMessage'

function Footer() {
  return (
    <div className='footer'>
      <div>
        <img src={logo} alt="" className='img-fluid d-block m-auto mb-5' />
        <p>-Fundacion Liliana Bodoc.</p>
        <div className='redes-section'>
          <h6 >Redes Sociales</h6>
          <ul className="redes">
            <li className="icon facebook">
              <span className="nombre-red">Facebook</span>
              <a href="https://www.facebook.com/El-alma-en-un-hilo-Marionetas-y-Miniaturas--804228576283329" target="_blank">
                <span>
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
              </a>
            </li>
            <li className="icon instagram">
              <span className="nombre-red">Instagram</span>
              <a href="https://www.instagram.com/elalmaenunhilo.marionetas/?hl=es" target="_blank"><span><FontAwesomeIcon icon={faInstagram} /></span></a>

            </li>
            <li className="icon youtube">
              <span className="nombre-red">Youtube</span>
              <a href="https://www.youtube.com/channel/UC1BkfXOrAE1IfSgi7FUKC3A" target="_blank"><span><FontAwesomeIcon icon={faYoutube} /></span></a>

            </li>
            <li className="icon envelope">
              <span className="nombre-red">Mensaje</span>
              <a href="pages/contact.html" target="_blank"><span><FontAwesomeIcon icon={faWhatsapp} /></span></a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>mail: example@example</li>
          <li>Tel: +5413214515151</li>
          <li>Ubicacion: Mendoza</li>
          <li>Contacto: Fundacion</li>
        </ul>
      </div>
      <FormMessage />
    </div>
  )
}

export default Footer